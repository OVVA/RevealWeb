// Firebase configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxm_JUnPc1wXc4a4VQvSFAUvPAtzZbA24",
    authDomain: "revealtestapp-e5cd9.firebaseapp.com",
    projectId: "revealtestapp-e5cd9",
    storageBucket: "revealtestapp-e5cd9.firebasestorage.app",
    messagingSenderId: "247774786818",
    appId: "1:247774786818:web:beee18da3ba88cf2b23e1b"
};

// Initialize Firebase - only if it hasn't been initialized yet
let firebaseApp;
if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
    firebaseApp = firebase.app(); // If already initialized, use that one
}

// Export auth service
const auth = firebase.auth();

// Export firebase and auth for direct use
export { firebaseApp as firebase, auth }; 