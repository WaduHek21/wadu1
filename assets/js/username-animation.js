/**
 * Enhanced Username Animation with Modern JavaScript
 * Features: Smooth typing, better performance, visual effects
 */
document.addEventListener('DOMContentLoaded', function() {
    const usernameElement = document.getElementById('username');
    const cursorElement = document.getElementById('typing-cursor');
    
    // Configuration object for easy customization
    const config = {
        usernames: [
            "Wadudangcap", 
            "3z03",
            "! WadudaPoet",
            "Wadu1sm4"
        ],
        typeSpeed: 100,
        deleteSpeed: 50,
        pauseDuration: 2000,
        initialDelay: 1000,
        cursorBlinkSpeed: 600
    };
    
    // Animation state
    let state = {
        currentText: '',
        isDeleting: false,
        textIndex: 0,
        isAnimating: true,
        animationFrame: null
    };
    
    /**
     * Enhanced typing effect with smooth animations
     */
    function typeEffect() {
        const fullText = config.usernames[state.textIndex];
        
        // Update current text based on typing/deleting state
        if (state.isDeleting) {
            state.currentText = fullText.substring(0, state.currentText.length - 1);
        } else {
            state.currentText = fullText.substring(0, state.currentText.length + 1);
        }
        
        // Update DOM with visual effects
        updateUsername();
        
        // Calculate next timeout duration
        let nextTimeout = state.isDeleting ? config.deleteSpeed : config.typeSpeed;
        
        // Handle state transitions
        if (!state.isDeleting && state.currentText === fullText) {
            // Finished typing, pause before deleting
            nextTimeout = config.pauseDuration;
            state.isDeleting = true;
            addCompletedEffect();
        } else if (state.isDeleting && state.currentText === '') {
            // Finished deleting, move to next username
            state.isDeleting = false;
            state.textIndex = (state.textIndex + 1) % config.usernames.length;
            nextTimeout = 500;
        }
        
        // Continue animation
        if (state.isAnimating) {
            setTimeout(typeEffect, nextTimeout);
        }
    }
    
    /**
     * Update username display with visual effects
     */
    function updateUsername() {
        if (!usernameElement) return;
        
        usernameElement.textContent = state.currentText;
        
        // Add subtle glow effect when typing
        if (!state.isDeleting && state.currentText.length > 0) {
            usernameElement.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
        } else {
            usernameElement.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.7)';
        }
    }
    
    /**
     * Add completion effect when username is fully typed
     */
    function addCompletedEffect() {
        if (!usernameElement) return;
        
        usernameElement.style.transform = 'scale(1.02)';
        usernameElement.style.textShadow = '0 0 20px rgba(103, 207, 255, 0.6)';
        
        setTimeout(() => {
            usernameElement.style.transform = 'scale(1)';
        }, 200);
    }
    
    /**
     * Enhanced cursor blinking with bounce effect
     */
    function initCursorAnimation() {
        if (!cursorElement) return;
        
        let isBlinking = true;
        
        setInterval(() => {
            if (!state.isAnimating) return;
            
            if (isBlinking) {
                cursorElement.style.opacity = '0';
                cursorElement.style.transform = 'translateY(-2px) scale(0.9)';
            } else {
                cursorElement.style.opacity = '1';
                cursorElement.style.transform = 'translateY(0) scale(1)';
            }
            
            isBlinking = !isBlinking;
        }, config.cursorBlinkSpeed);
        
        // Add typing bounce effect
        setInterval(() => {
            if (!state.isDeleting && state.currentText.length > 0) {
                cursorElement.style.transform = 'translateY(-3px) scale(1.1)';
                setTimeout(() => {
                    cursorElement.style.transform = 'translateY(0) scale(1)';
                }, 80);
            }
        }, 800);
    }
    
    /**
     * Add keyboard sound effect simulation
     */
    function playTypingSound() {
        // Create a subtle typing sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.01, audioContext.currentTime);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.05);
        } catch (e) {
            // Silent fallback if Web Audio API is not supported
        }
    }
    
    /**
     * Pause/Resume animation (useful for performance)
     */
    window.pauseUsernameAnimation = function() {
        state.isAnimating = false;
    };
    
    window.resumeUsernameAnimation = function() {
        if (!state.isAnimating) {
            state.isAnimating = true;
            typeEffect();
        }
    };
    
    /**
     * Initialize all animations
     */
    function init() {
        // Add CSS transitions for smooth effects
        if (usernameElement) {
            usernameElement.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        if (cursorElement) {
            cursorElement.style.transition = 'all 0.15s ease-out';
        }
        
        // Start animations
        initCursorAnimation();
        setTimeout(typeEffect, config.initialDelay);
        
        console.log('%c🔤 Username Animation Initialized', 'color: #00ff00; font-weight: bold;');
        console.log(`%cUsernames: ${config.usernames.join(', ')}`, 'color: #ffffff;');
    }
    
    // Handle visibility change for performance optimization
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            window.pauseUsernameAnimation();
        } else {
            window.resumeUsernameAnimation();
        }
    });
    
    // Initialize everything
    init();
});