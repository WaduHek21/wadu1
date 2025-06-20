// Error Handler for 404 Resources
document.addEventListener('DOMContentLoaded', function() {
    // Handle image load errors
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function(e) {
            console.warn(`Failed to load image: ${this.src}`);
            
            // Set fallback for profile picture
            if (this.id === 'profile-picture') {
                console.log('Using default profile picture fallback');
                // Image will fallback via CSS or leave as is
            }
            
            // Hide badges that fail to load
            if (this.closest('.badges-container')) {
                this.style.display = 'none';
                console.log(`Hiding failed badge: ${this.src}`);
            }
        });
    });
    
    // Handle audio load errors
    const audio = document.getElementById('myAudio');
    if (audio) {
        audio.addEventListener('error', function(e) {
            console.warn(`Failed to load audio: ${this.src}`);
            console.log('Audio will be silent - no background music');
        });
        
        audio.addEventListener('loadstart', function() {
            console.log(`Loading audio: ${this.currentSrc}`);
        });
        
        audio.addEventListener('canplay', function() {
            console.log(`Audio ready: ${this.currentSrc}`);
        });
    }
    
    // Handle video load errors
    const video = document.getElementById('myVideo');
    if (video) {
        video.addEventListener('error', function(e) {
            console.warn(`Failed to load video: ${this.src}`);
            console.log('Video background may not display');
        });
        
        video.addEventListener('loadstart', function() {
            console.log(`Loading video: ${this.currentSrc}`);
        });
        
        video.addEventListener('canplay', function() {
            console.log(`Video ready: ${this.currentSrc}`);
        });
    }
    
    // Log successful resource loads
    console.log('%c✅ Error Handler Initialized', 'color: #00ff00; font-weight: bold;');
    console.log('%cMonitoring for 404 errors and providing fallbacks...', 'color: #ffffff;');
}); 