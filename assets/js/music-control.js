document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const randomBtn = document.getElementById('randomBtn');
    
    let isPlaying = false;
    let isMuted = false;
    let previousVolume = 1;
    let currentSongIndex = 0;
    
    // Danh sách các file nhạc
    const musicPlaylist = [
        './assets/music/song1.mp3'
    ];

    // Initialize controls
    function initializeControls() {
        // Set initial volume
        audio.volume = volumeSlider.value / 100;
        
        // Audio is set to autoplay, so update button state
        audio.addEventListener('play', function() {
            isPlaying = true;
            updatePlayButton();
        });
        
        audio.addEventListener('pause', function() {
            isPlaying = false;
            updatePlayButton();
        });
        
        // Check if audio is actually playing
        audio.addEventListener('loadstart', function() {
            if (audio.autoplay) {
                isPlaying = true;
                updatePlayButton();
            }
        });
        
        // Auto play next random song when current song ends
        audio.addEventListener('ended', function() {
            playRandomSong();
        });
    }

    // Update play/pause button icon
    function updatePlayButton() {
        const icon = playPauseBtn.querySelector('i');
        if (isPlaying) {
            icon.className = 'fas fa-pause';
        } else {
            icon.className = 'fas fa-play';
        }
    }

    // Update mute button icon
    function updateMuteButton() {
        const icon = muteBtn.querySelector('i');
        if (isMuted || audio.volume === 0) {
            icon.className = 'fas fa-volume-mute';
        } else if (audio.volume < 0.5) {
            icon.className = 'fas fa-volume-down';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    }

    // Random song function
    function playRandomSong(forcePlay = false) {
        // Generate random index different from current
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * musicPlaylist.length);
        } while (randomIndex === currentSongIndex && musicPlaylist.length > 1);
        
        currentSongIndex = randomIndex;
        const newSong = musicPlaylist[currentSongIndex];
        
        // Lưu trạng thái hiện tại
        const wasPlaying = !audio.paused;
        const currentVolume = audio.volume;
        
        // Đổi source và load nhạc mới
        audio.src = newSong;
        audio.load();
        
        // Khôi phục volume
        audio.volume = currentVolume;
        
        if (wasPlaying || forcePlay) {
            audio.play().catch(function(error) {
                console.log('Audio play failed:', error);
            });
        }
        
        // Add some visual feedback
        if (randomBtn) {
            randomBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                randomBtn.style.transform = 'scale(1)';
            }, 150);
        }
    }

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(function(error) {
                console.log('Audio play failed:', error);
            });
        }
    });

    // Mute/Unmute functionality
    muteBtn.addEventListener('click', function() {
        if (isMuted) {
            audio.volume = previousVolume;
            volumeSlider.value = previousVolume * 100;
            isMuted = false;
        } else {
            previousVolume = audio.volume;
            audio.volume = 0;
            volumeSlider.value = 0;
            isMuted = true;
        }
        updateMuteButton();
    });

    // Volume slider functionality
    volumeSlider.addEventListener('input', function() {
        const volume = this.value / 100;
        audio.volume = volume;
        
        if (volume === 0) {
            isMuted = true;
        } else {
            isMuted = false;
            previousVolume = volume;
        }
        updateMuteButton();
    });

    // Handle volume changes from other sources
    audio.addEventListener('volumechange', function() {
        volumeSlider.value = audio.volume * 100;
        updateMuteButton();
    });

    // Random button functionality
    randomBtn.addEventListener('click', function() {
        playRandomSong();
    });

    // Initialize everything
    initializeControls();
    updatePlayButton();
    updateMuteButton();
    
    // Create global function for script.js to start music with random song
    window.startMusicWithRandom = function() {
        // Load and play a random song immediately
        playRandomSong(true);
    };

    // Add some delay to ensure audio element is ready
    setTimeout(() => {
        if (audio.paused) {
            isPlaying = false;
        } else {
            isPlaying = true;
        }
        updatePlayButton();
    }, 1000);
}); 