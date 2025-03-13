// Main JavaScript functionality for Reveal website

// Define Alpine.js components before DOM loads
window.headerComponent = function() {
    return {
        isScrolled: false,
        isMobileMenuOpen: false,
        
        init() {
            console.log('Header component initialized');
            window.addEventListener('scroll', () => {
                this.isScrolled = window.pageYOffset > 20;
            });
        }
    };
};

window.cookieNoticeComponent = function() {
    return {
        showCookieNotice: true,
        
        init() {
            this.showCookieNotice = !localStorage.getItem('cookiesAccepted');
        },
        
        acceptCookies() {
            localStorage.setItem('cookiesAccepted', 'true');
            this.showCookieNotice = false;
        }
    };
};

// DOM Content Loaded event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Reveal website loaded successfully!');
    
    // Initialize current year for copyright
    updateYear();
    
    // Initialize smooth scrolling for anchor links
    initSmoothScroll();
    
    // Initialize any modals
    initModals();
});

// Update year in footer copyright
function updateYear() {
    const yearElements = document.querySelectorAll('.update-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Initialize smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a.inner-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 77; // Adjust based on your header height
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without page reload
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
}

// Initialize modals
function initModals() {
    document.querySelectorAll('[data-notification-link]').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('data-notification-link');
            const targetModal = document.querySelector(`[data-modal-index="${targetId}"]`) || 
                               document.querySelector(`[data-notification-link="${targetId}"]`);
            
            if (targetModal) {
                targetModal.classList.toggle('notification--reveal');
            }
        });
    });
    
    // Close modal when clicking close button
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal-container') || this.closest('.notification');
            if (modal) {
                modal.classList.remove('notification--reveal');
            }
        });
    });
}

// Global functions

// Sign out function
function signOut() {
    if (typeof firebase !== 'undefined' && firebase.auth) {
        firebase.auth().signOut()
            .then(() => {
                console.log('User signed out successfully');
                // Redirect to home page after sign out
                window.location.href = '/';
            })
            .catch((error) => {
                console.error('Sign out error:', error);
                alert('Error signing out. Please try again.');
            });
    } else {
        console.error('Firebase not initialized when trying to sign out');
        // Still redirect even if there's an error
        window.location.href = '/';
    }
}

// Component functions for Alpine.js
document.addEventListener('alpine:init', () => {
    // Header component with scroll detection
    Alpine.data('headerComponent', () => ({
        isScrolled: false,
        isMobileMenuOpen: false,
        init() {
            // Check initial scroll position
            this.isScrolled = window.pageYOffset > 10;
            
            // Listen for scroll events
            window.addEventListener('scroll', () => {
                this.isScrolled = window.pageYOffset > 10;
            });
        }
    }));
    
    // Cookie notice component
    Alpine.data('cookieNoticeComponent', () => ({
        showCookieNotice: true,
        init() {
            // Check if user has already accepted cookies
            const cookiesAccepted = localStorage.getItem('cookies-accepted');
            this.showCookieNotice = !cookiesAccepted;
        },
        acceptCookies() {
            localStorage.setItem('cookies-accepted', 'true');
            this.showCookieNotice = false;
        }
    }));
}); 