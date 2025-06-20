// Console information display
document.addEventListener('DOMContentLoaded', function() {
    // Banner art
    console.log('%c██     ██  █████  ██████  ██    ██ ██    ██ ', 'color: #00ff00; font-family: monospace;');
    console.log('%c██     ██ ██   ██ ██   ██ ██    ██ ██    ██', 'color: #00ff00; font-family: monospace;');
    console.log('%c██     ██ ███████ ██████  ██    ██ ██    ██', 'color: #00ff00; font-family: monospace;');
    console.log('%c ██   ██  ██   ██ ██   ██ ██    ██ ██    ██', 'color: #00ff00; font-family: monospace;');
    console.log('%c  █████   ██   ██ ██   ██  ██████   ██████ ', 'color: #00ff00; font-family: monospace;');
    console.log('');
    console.log('%cHai Anh', 'color: #00ff00; font-family: monospace; font-size: 18px;');
    
    console.log('%c🚀 Website Information', 'color: #00ff00; font-size: 20px; font-weight: bold;');
    console.log('%c═══════════════════════════════════════════════════════════════', 'color: #00ff00;');
    console.log('%cDeveloper: waduangcap', 'color: #ffffff; font-size: 14px;');
    console.log('%cWebsite: https://taodangcap.com', 'color: #ffffff; font-size: 14px;');
    console.log('%cDiscord: 1206972381378379840', 'color: #ffffff; font-size: 14px;');
    console.log('%cTechnical Consultant at VietDynasty', 'color: #ffffff; font-size: 14px;');
    console.log('%c═══════════════════════════════════════════════════════════════', 'color: #00ff00;');
    console.log('%c💻 Skills:', 'color: #ffff00; font-size: 16px; font-weight: bold;');
    console.log('%c  • 4 years Python experience', 'color: #ffffff;');
    console.log('%c  • 3 years Java experience', 'color: #ffffff;');
    console.log('%c  • Full-stack Web Development', 'color: #ffffff;');
    console.log('%c  • Discord Bot Development', 'color: #ffffff;');
    console.log('%c═══════════════════════════════════════════════════════════════', 'color: #00ff00;');
    console.log('%c🌐 Connect with me:', 'color: #ffff00; font-size: 16px; font-weight: bold;');
    console.log('%c  Discord: https://discord.com/users/1206972381378379840', 'color: #7289da;');
    console.log('%c  Website: https://taodangcap.com', 'color: #00bfff;');
    console.log('%c  Steam: http://trinhquanghuy.net/steam', 'color: #1b2838;');
    console.log('%c  TikTok: https://www.tiktok.com/@hoaghuy.24', 'color: #ff0050;');
    console.log('%c═══════════════════════════════════════════════════════════════', 'color: #00ff00;');
    
    // Display system info
    console.log('%c🔍 Browser Info:', 'color: #ff6600; font-size: 16px; font-weight: bold;');
    console.log(`%cUser Agent: ${navigator.userAgent}`, 'color: #cccccc;');
    console.log(`%cPlatform: ${navigator.platform}`, 'color: #cccccc;');
    console.log(`%cLanguage: ${navigator.language}`, 'color: #cccccc;');
    console.log(`%cScreen Resolution: ${screen.width}x${screen.height}`, 'color: #cccccc;');
    console.log(`%cViewport: ${window.innerWidth}x${window.innerHeight}`, 'color: #cccccc;');
    console.log(`%cCookies Enabled: ${navigator.cookieEnabled}`, 'color: #cccccc;');
    console.log(`%cOnline Status: ${navigator.onLine ? 'Online' : 'Offline'}`, 'color: #cccccc;');
    
    console.log('%c═══════════════════════════════════════════════════════════════', 'color: #00ff00;');
    console.log('%c🎵 Website Features:', 'color: #ff69b4; font-size: 16px; font-weight: bold;');
    console.log('%c  • Random Music Player', 'color: #ffffff;');
    console.log('%c  • Discord Integration with Lanyard', 'color: #ffffff;');
    console.log('%c  • Real-time Avatar Sync', 'color: #ffffff;');
    console.log('%c  • Interactive Terminal UI', 'color: #ffffff;');
    console.log('%c  • Responsive Design', 'color: #ffffff;');
    
    console.log('%c═══════════════════════════════════════════════════════════════', 'color: #00ff00;');
    
    // Add interactive commands
    console.log('%c🛠️ Console Commands:', 'color: #ff9500; font-size: 16px; font-weight: bold;');
    console.log('%c  Type "help()" for available commands', 'color: #ffffff;');
    
    // Define global functions for console interaction
    window.help = function() {
        console.log('%c📚 Available Commands:', 'color: #00ff00; font-size: 16px; font-weight: bold;');
        console.log('%c  • help() - Show this help menu', 'color: #ffffff;');
        console.log('%c  • info() - Show website information', 'color: #ffffff;');
        console.log('%c  • contact() - Show contact information', 'color: #ffffff;');
        console.log('%c  • skills() - Show technical skills', 'color: #ffffff;');
        console.log('%c  • music() - Show music player info', 'color: #ffffff;');
        console.log('%c  • clear() - Clear console', 'color: #ffffff;');
    };
    
    window.info = function() {
        console.log('%c🎯 Website Info:', 'color: #00bfff; font-size: 16px; font-weight: bold;');
        console.log('%c  Developer: taodangcap', 'color: #ffffff;');
        console.log('%c  Built with: HTML, CSS, JavaScript', 'color: #ffffff;');
        console.log('%c  APIs: Discord Lanyard, IP Geolocation', 'color: #ffffff;');
        console.log('%c  Version: 2.0.0', 'color: #ffffff;');
    };
    
    window.contact = function() {
        console.log('%c📞 Contact Information:', 'color: #7289da; font-size: 16px; font-weight: bold;');
        console.log('%c  Discord: https://discord.com/users/1206972381378379840', 'color: #7289da;');
        console.log('%c  Website: https://taodangcap.com', 'color: #00bfff;');
        console.log('%c  Steam: http://trinhquanghuy.net/steam', 'color: #1b2838;');
        console.log('%c  TikTok: https://www.tiktok.com/@hoaghuy.24', 'color: #ff0050;');
    };
    
    window.skills = function() {
        console.log('%c💻 Technical Skills:', 'color: #ffff00; font-size: 16px; font-weight: bold;');
        console.log('%c  Languages:', 'color: #00ff00;');
        console.log('%c    • Python (4 years)', 'color: #ffffff;');
        console.log('%c    • Java (3 years)', 'color: #ffffff;');
        console.log('%c    • JavaScript (3 years)', 'color: #ffffff;');
        console.log('%c    • HTML/CSS (4 years)', 'color: #ffffff;');
        console.log('%c  Frameworks & Tools:', 'color: #00ff00;');
        console.log('%c    • Discord.js', 'color: #ffffff;');
        console.log('%c    • Node.js', 'color: #ffffff;');
        console.log('%c    • Web APIs', 'color: #ffffff;');
    };
    
    window.music = function() {
        console.log('%c🎵 Music Player Info:', 'color: #ff69b4; font-size: 16px; font-weight: bold;');
        console.log('%c  Features:', 'color: #00ff00;');
        console.log('%c    • Random song selection', 'color: #ffffff;');
        console.log('%c    • Volume control', 'color: #ffffff;');
        console.log('%c    • Play/Pause functionality', 'color: #ffffff;');
        console.log('%c    • Auto-play on load', 'color: #ffffff;');
        console.log('%c  Supported formats: MP3', 'color: #ffffff;');
    };
    
    // Display current time
    const now = new Date();
    console.log('%c⏰ Loaded at:', 'color: #ff6600; font-size: 14px; font-weight: bold;');
    console.log(`%c  ${now.toLocaleString()}`, 'color: #ffffff;');
    
    console.log('%c═══════════════════════════════════════════════════════════════', 'color: #00ff00;');
    console.log('%c⚡ Thanks for visiting my website! ⚡', 'color: #00ffff; font-size: 18px; font-weight: bold;');
    console.log('%c💡 Tip: Try typing help() for interactive commands!', 'color: #ffff00; font-size: 14px;');
});
