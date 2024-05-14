window.addEventListener("DOMContentLoaded", function() {
    // Initialize the map
    var map = L.map("map").setView([0, 0], 2);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
    }).addTo(map);

    var bounds = map.getBounds(); // Get the initial map bounds
    // Initialize the shadow layer
    var shadowLayer = L.rectangle(bounds, {color: "#000", opacity: 0.5, fillOpacity: 0.85}).addTo(map);

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
    // Update the shadow layer on the map with the new track
    // Combine the new track's shadow layer with the existing shadow layer
    function updateRevealLayer(track, shadowLayer) {        
        // Check if the track and shadow layer are valid
        if (!track || !shadowLayer) {
            console.log("GPX track or shadow layer not found.");
            return;
        }

        map.removeLayer(shadowLayer);
        // Subtract the track and buffer areas from the shadow layer
        var RevealLayer = subtractGpxTrackFromShadowLayer(track, shadowLayer);
        RevealLayer.addTo(map);
        RevealLayer.bringToBack(); // Ensure the shadow layer is behind the track
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
        var difference = turf.difference(shadowLayerGeoJSON, bufferedTrack);
        // Convert the difference back to a Leaflet layer and add it to the map
        var updatedShadowLayer = L.geoJSON(difference, { color: '#000', opacity: 0, fillOpacity: 0.88 });
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
