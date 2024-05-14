window.addEventListener("DOMContentLoaded", function() {
    // Initialize the map
    var map = L.map("map").setView([0, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
    }).addTo(map);

    var bounds = map.getBounds(); // Get the initial map bounds
    // Initialize the shadow layer
    var shadowLayer = L.rectangle(bounds, {color: "#000", opacity: 0.1, fillOpacity: 0.01}).addTo(map);

    // Function to handle uploading a GPX file
    function uploadGpxFile() {
        var fileInput = document.getElementById("gpxFileInput");
        fileInput.click();
    }

    // Function to handle the change event of the file input
    function handleFileInputChange() {
        var fileInput = document.getElementById("gpxFileInput");
        var file = fileInput.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var contents = e.target.result;
                processGpxData(contents);
            };
            reader.readAsText(file);
        }
    }

    function isValidGpx(gpxData) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(gpxData, "text/xml");
        var gpx = doc.querySelector("gpx");

        if (!gpx) {
            console.log("The GPX file does not contain a <gpx> element.");
            return false;
        }

        var trackSegments = gpx.querySelectorAll("trkseg");
        var hasValidTrackSegments = false;

        for (var i = 0; i < trackSegments.length; i++) {
            var segment = trackSegments[i];
            var points = segment.querySelectorAll("trkpt");

            if (points.length > 0) {
                hasValidTrackSegments = true;
                break;
            }
        }

        if (!hasValidTrackSegments) {
            console.log("The GPX file does not contain any valid track points.");
            return false;
        }

        return true;
    }

    // Function to process the GPX data
    function processGpxData(data) {
        // Load the GPX data
        if (!isValidGpx(data)) {
            console.log("The GPX file is not valid.");
            displayMessage("The GPX file is not valid.");
            return;
        }
        var parser = new DOMParser();
        var doc = parser.parseFromString(data, "text/xml");
        var gpx = doc.querySelector("gpx");

        // Extract the track points from the GPX data
        var trackPoints = [];
        var trackSegments = gpx.querySelectorAll("trkseg");
        for (var i = 0; i < trackSegments.length; i++) {
            var segment = trackSegments[i];
            var points = segment.querySelectorAll("trkpt");
            for (var j = 0; j < points.length; j++) {
                var point = points[j];
                trackPoints.push([point.getAttribute("lat"), point.getAttribute("lon")]);
            }
        }

        // Draw the track on the map
        var track = L.polyline(trackPoints, {
            color: "blue",
            weight: 5,
            lineJoin: "round",
            lineCap: "round",
            opacity: 0.3 // Set opacity to make the track transparent
        }).addTo(map);

        // Fit the map to the track bounds if the trackPoints array is not empty
        if (trackPoints.length > 0) {
            setTimeout(function() {
                map.fitBounds(track.getBounds());
            }, 0);
        } else {
            console.log("The GPX file contains no valid track points.");
            displayMessage("The GPX file contains no valid track points.");
            return;
        }      

        updateRevealLayer(track, shadowLayer);
        displayMessage("Track uploaded successfully.");
    }


    // Function to update the Reveal layer after subtracting buffer areas
    function updateRevealLayer(track, shadowLayer) {
        // Check if the track and shadow layer are valid
        if (!track || !shadowLayer) {
            console.log("GPX track or shadow layer not found.");
            return;
        }

        map.removeLayer(shadowLayer);
        
        // Subtract the track and buffer areas from the shadow layer
        var RevealLayer = subtractGpxTrackFromShadowLayer(track, shadowLayer);
        
        // Combine the new RevealLayer with the existing shadow layer
        shadowLayer = combineLayers(RevealLayer, shadowLayer);
    
        if (shadowLayer) {
            // Add the combined layer to the map
            shadowLayer.addTo(map);
            shadowLayer.bringToBack(); // Ensure the shadow layer is behind the track
            console.log('success!!')
        } else {
            console.log("Failed to combine layers.");
            // Add the original RevealLayer back to the map if combination fails
            RevealLayer.addTo(map);
            RevealLayer.bringToBack(); // Ensure the shadow layer is behind the track
        }
    }

    // Modify the combineLayers function
    function combineLayers(layer1, layer2) {
        // Convert Leaflet layers to GeoJSON
        var layer1GeoJSON = layer1.toGeoJSON();
        var layer2GeoJSON = layer2.toGeoJSON();
        
        // Check if layer1GeoJSON is a FeatureCollection
        if (layer1GeoJSON.type === 'FeatureCollection') {
            // Extract the geometries of individual features
            var geometries = layer1GeoJSON.features.map(function(feature) {
                return feature.geometry;
            });
            
            // Log the geometry type of each feature
            geometries.forEach(function(geometry) {
                if (geometry) {
                    // Ensure that the GeoJSON data is valid
                    if (!isValidGeometry(geometry)) {
                        console.log("Invalid geometry data 1.");
                        return null;
                    }
                } else {
                    console.log("One of the features in Layer 1 GeoJSON does not have geometry property.");
                }
            });
        } else {
            // Log the geometry type of layer1GeoJSON
            if (layer1GeoJSON.geometry) {
                // Ensure that the GeoJSON data is valid
                if (!isValidGeometry(layer1GeoJSON.geometry)) {
                    console.log("Invalid geometry data 1.");
                    return null;
                }
            } else {
                console.log("Layer 1 GeoJSON does not have geometry property.");
            }
        }

        // Log the geometry type of layer2
        if (layer2GeoJSON.geometry) {
            console.log("Layer 2 Geometry Type:", layer2GeoJSON.geometry.type);
            // Ensure that the GeoJSON data is valid
            if (!isValidGeometry(layer2GeoJSON.geometry)) {
                console.log("Invalid geometry data 2.");
                return null;
            }
        } else {
            console.log("Layer 2 GeoJSON does not have geometry property.");
        }
                
        // Merge the features of both layers individually
        var data1 = layer1GeoJSON.features.map(function(feature) { return feature.geometry; });
        var data2 = layer2GeoJSON.geometry; 
        console.log('DATA 1:',data1[0]);
        console.log('DATA 2:',data2);
        
        var mergedData1 = turf.union(data1[0], data2);
        var mergedData2 = turf.union(data2, data1[0]);
        
        // Combine the resulting geometries into a single "MultiPolygon" geometry
        var mergedData = turf.union(mergedData2, mergedData1);
        
        // Ensure that the merged data is valid
        if (!isValidGeometry(mergedData)) {
            console.log("Invalid merged geometry data.");
            return null;
        }
        
        // Create a Leaflet layer from the merged GeoJSON data
        //var mergedLayer = L.geoJSON(mergedData, { color: '#red', opacity: 0, fillOpacity: 0.05 });
        
        // Return the combined layer
        return mergedData;
    }


    
    // Function to check if the geometry is valid (Polygon or MultiPolygon)
    function isValidGeometry(geometry) {
        // Check if the geometry is a Feature object
        if (geometry && geometry.type === "Feature" && geometry.geometry) {
            geometry = geometry.geometry; // Extract geometry from the Feature object
        }
        console.log("Geometry Type:", geometry.type);

        // Check if the geometry type is either "Polygon" or "MultiPolygon"
        var validTypes = ["Polygon", "MultiPolygon"];
        if (geometry && validTypes.includes(geometry.type)) {
            return true;
        } else {
            console.log("Invalid geometry type:", geometry.type);
            return false;
        }
    }


    function subtractGpxTrackFromShadowLayer(track, shadowLayer) {
        if (!track || !shadowLayer) {
            console.log("GPX track or shadow layer not found.");
            return;
        }
    
        // Extract track points from the polyline
        var trackPoints = track.getLatLngs().map(function(latlng) {
            return [latlng.lat, latlng.lng];
        });
    
        // Create a polyline representing the track
        var polyline = L.polyline(trackPoints);
        var trackGeoJSON = polyline.toGeoJSON();
        // Create a buffer around the entire track GeoJSON
        var bufferedTrack = turf.buffer(trackGeoJSON, 0.05, { units: 'kilometers' }); // Adjust the buffer distance as needed
        var bufferedTrackLayer = L.geoJSON(bufferedTrack);
        var shadowLayerGeoJSON = shadowLayer.toGeoJSON();
        // Calculate the difference between the shadow layer and the buffered track
        var updatedShadowLayer = turf.difference(shadowLayerGeoJSON, bufferedTrack);
        
        updatedShadowLayer = L.geoJSON(updatedShadowLayer, { color: '#000', opacity: 0, fillOpacity: 0.88 }).addTo(map);    
        return updatedShadowLayer;
    }
    
    // Function to display user feedback as a toast
    function displayMessage(message) {
        var toastElement = document.getElementById('toast');
        var toastBody = toastElement.querySelector('.toast-body');
        toastBody.innerHTML = '<strong class="me-auto">Success!</strong> ' + message;
        var toast = new bootstrap.Toast(toastElement);
        toast.show();
    }

    // Attach event listeners
    document.getElementById("uploadGpxButton").addEventListener("click", uploadGpxFile);
    document.getElementById("gpxFileInput").addEventListener("change", handleFileInputChange);
});
