// Import Firebase and auth from our client file
import { firebase, auth } from './firebase-client.js';

// Handle authentication state changes
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user.email);
    updateUIForSignedInUser(user);
  } else {
    // User is signed out
    console.log('User is signed out');
    updateUIForSignedOutUser();
  }
});

// Update UI elements based on auth state
function updateUIForSignedInUser(user) {
  // Get UI elements that should be updated when user is signed in
  const authButtons = document.querySelectorAll('.auth-button');
  const userProfileElements = document.querySelectorAll('.user-profile');
  
  // Update UI as needed
  authButtons.forEach(button => {
    if (button.dataset.authState === 'signed-in') {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  });
  
  // Update user profile elements if they exist
  userProfileElements.forEach(element => {
    if (element.dataset.userField === 'email') {
      element.textContent = user.email;
    } else if (element.dataset.userField === 'name') {
      element.textContent = user.displayName || 'User';
    }
  });
}

function updateUIForSignedOutUser() {
  // Get UI elements that should be updated when user is signed out
  const authButtons = document.querySelectorAll('.auth-button');
  
  // Update UI as needed
  authButtons.forEach(button => {
    if (button.dataset.authState === 'signed-out') {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  });
}

// Sign out function
window.signOut = async function() {
  try {
    await auth.signOut();
    // Redirect to home page after sign out
    window.location.href = '/';
  } catch (error) {
    console.error('Error signing out:', error);
  }
}

// Export auth for direct use in other scripts
export { auth, firebase }; 