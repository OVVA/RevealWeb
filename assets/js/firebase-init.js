// Firebase initialization script - non-module version to run before modules
// This ensures Firebase is available globally before our module scripts run

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxm_JUnPc1wXc4a4VQvSFAUvPAtzZbA24",
    authDomain: "revealtestapp-e5cd9.firebaseapp.com",
    projectId: "revealtestapp-e5cd9",
    storageBucket: "revealtestapp-e5cd9.firebasestorage.app",
    messagingSenderId: "247774786818",
    appId: "1:247774786818:web:beee18da3ba88cf2b23e1b"
};

// Initialize Firebase globally
if (typeof firebase !== 'undefined') {
    // Only initialize if Firebase is not already initialized
    if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("Firebase initialized successfully");
    } else {
        console.log("Firebase already initialized");
    }
} else {
    console.error("Firebase SDK not loaded!");
} 