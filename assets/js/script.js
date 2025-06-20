document.addEventListener('DOMContentLoaded', function() {
  var terminalContainer = document.getElementById('terminal');
  var terminalText = document.getElementById('terminal-text');
  var videoBackground = document.getElementById('myVideo');
  var audioBackground = document.getElementById('myAudio');
  var blurredBox = document.getElementById('blurred-box');
  var closeButton = document.getElementById('close-button');

  var terminalTextContent = [
      "User: ch34t3r",
      "IP: Loading...",
      "System: Loading...",
      "Bio Loaded",
      "Press Enter To Continue",
  ];
  var currentIndex = 0;

  videoBackground.pause();
  audioBackground.pause();

  function typeWriter() {
      var line = currentIndex === 0 ? getAsciiArt() : terminalTextContent[currentIndex - 1];
      var i = 0;

      function typeChar() {
          if (i < line.length) {
              terminalText.textContent += line.charAt(i);
              i++;
              setTimeout(typeChar, 50);
          } else {
              terminalText.textContent += "\n";
              currentIndex++;
              if (currentIndex < terminalTextContent.length + 1) {
                  typeWriter();
              } else {
                  addEventListeners();
              }
          }
      }

      typeChar();
  }

  function handleInput() {
      terminalContainer.style.display = 'none';
      videoBackground.play();
      
      // Trigger auto-play music with random song
      if (window.startMusicWithRandom) {
          window.startMusicWithRandom();
      } else {
          audioBackground.play();
      }
      
      blurredBox.style.display = 'block';
      removeEventListeners();
  }

  function addEventListeners() {
      document.addEventListener('keydown', handleKeyPress);
      terminalContainer.addEventListener('click', handleInput);
  }

  function removeEventListeners() {
      document.removeEventListener('keydown', handleKeyPress);
      terminalContainer.removeEventListener('click', handleInput);
  }

  function handleKeyPress(event) {
      if (event.key === 'Enter') {
          handleInput();
      }
  }

  closeButton.addEventListener('click', function() {
      handleInput();
  });

  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
          var ipAddress = data.ip;
          terminalTextContent[1] = "IP: " + ipAddress;
          typeWriter();
      })
      .catch(error => {
          console.error('Error fetching IP address:', error);
          terminalTextContent[1] = "IP: Unable to fetch IP address";
          typeWriter();
      });

  var userAgent = navigator.userAgent;
  var systemInfo;
  
  function getOperatingSystem() {
      if (userAgent.match(/Windows/)) {
          return getWindowsVersion();
      } else if (userAgent.match(/Macintosh/)) {
          return getMacOSVersion();
      } else if (userAgent.match(/Linux/)) {
          return "Linux";
      } else if (userAgent.match(/Android/)) {
          return getAndroidVersion();
      } else if (userAgent.match(/iPhone|iPad|iPod/)) {
          return getiOSVersion();
      } else {
          return "Unknown";
      }
  }
  
  function getWindowsVersion() {
      var version = userAgent.match(/Windows NT ([\d.]+)/);
      if (version) {
          version = version[1];
          switch (version) {
              case "5.1":
                  return "Windows XP";
              case "6.0":
                  return "Windows Vista";
              case "6.1":
                  return "Windows 7";
              case "6.2":
                  return "Windows 8";
              case "6.3":
                  return "Windows 8.1";
              case "10.0":
                  return "Windows 10";
              case "10.0":
                  return "Windows 11";
              default:
                  return "Windows";
          }
      } else {
          return "Windows";
      }
  }
  
  function getMacOSVersion() {
      var version = userAgent.match(/Mac OS X ([\d_]+)/);
      if (version) {
          version = version[1].replace(/_/g, '.');
          return "macOS " + version;
      } else {
          return "macOS";
      }
  }
  
  function getAndroidVersion() {
      var version = userAgent.match(/Android ([\d.]+)/);
      if (version) {
          return "Android " + version[1];
      } else {
          return "Android";
      }
  }
  
  function getiOSVersion() {
      var version = userAgent.match(/OS ([\d_]+)/);
      if (version) {
          version = version[1].replace(/_/g, '.');
          return "iOS " + version;
      } else {
          return "iOS";
      }
  }
  
  var operatingSystem = getOperatingSystem();
  terminalTextContent[2] = "System: " + operatingSystem;

  function centerTerminal() {
      var terminalWidth = terminalContainer.offsetWidth;
      var terminalHeight = terminalContainer.offsetHeight;
      var centerX = (window.innerWidth - terminalWidth) / 2;
      var centerY = (window.innerHeight - terminalHeight) / 2;

      terminalContainer.style.position = 'absolute';
      terminalContainer.style.left = centerX + 'px';
      terminalContainer.style.top = centerY + 'px';
  }

  centerTerminal();
  window.addEventListener('resize', centerTerminal);

  terminalText.style.textAlign = 'center';

  function getAsciiArt() {
      return `  




      i am a cheater
  `;
  }

  var audio = document.getElementById("myAudio");

  var maxVolume = 1;
  function limitVolume(volume) {
      if (volume > maxVolume) {
          audio.volume = maxVolume;
      } else {
          audio.volume = volume;
      }
  }

  limitVolume(1);
});
