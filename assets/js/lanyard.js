document.addEventListener('DOMContentLoaded', () => {
  const userId = '931156175850967050';
  const apiUrl = `https://api.lanyard.rest/v1/users/${userId}`;
  
  const avatar = document.getElementById('discord-avatar');
  const mainProfilePicture = document.getElementById('profile-picture');
  const username = document.getElementById('discord-username');
  const statusDot = document.getElementById('discord-status-dot');
  const statusText = document.getElementById('discord-status-text');
  const activityInfo = document.getElementById('discord-activity-info');
  const noActivity = document.getElementById('discord-no-activity');
  const activityName = document.getElementById('discord-activity-name');
  const activityDetails = document.getElementById('discord-activity-details');
  const activityState = document.getElementById('discord-activity-state');
  const albumArt = document.getElementById('discord-album-art');
  const syncIndicator = document.getElementById('discord-sync-indicator');
  
  async function updateDiscordStatus() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.success) {
        const discord = data.data;
        
        // Update avatar with fallback
        if (discord.discord_user && discord.discord_user.avatar) {
          const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${discord.discord_user.avatar}.png?size=256`;
          
          // Show sync indicator
          if (syncIndicator) {
            syncIndicator.classList.add('active');
          }
          
          // Update both discord widget avatar and main profile picture
          if (avatar) {
            avatar.src = avatarUrl;
          }
          if (mainProfilePicture) {
            // Add loading animation
            mainProfilePicture.style.opacity = '0.5';
            mainProfilePicture.style.filter = 'blur(2px)';
            
            const newImg = new Image();
            newImg.onload = function() {
              mainProfilePicture.src = avatarUrl;
              mainProfilePicture.style.opacity = '1';
              mainProfilePicture.style.filter = 'none';
              mainProfilePicture.style.transform = 'scale(1.05)';
              setTimeout(() => {
                mainProfilePicture.style.transform = 'scale(1)';
                // Hide sync indicator after animation
                if (syncIndicator) {
                  setTimeout(() => {
                    syncIndicator.classList.remove('active');
                  }, 1000);
                }
              }, 300);
            };
            newImg.onerror = function() {
              // Fallback to default image if Discord avatar fails to load
              mainProfilePicture.src = './assets/pfp/default.jpg';
              mainProfilePicture.style.opacity = '1';
              mainProfilePicture.style.filter = 'none';
              if (syncIndicator) {
                syncIndicator.classList.remove('active');
              }
            };
            newImg.src = avatarUrl;
          }
        }
        
        // Update username
        if (discord.discord_user && discord.discord_user.username) {
          username.textContent = discord.discord_user.username;
        }
        
        // Update status
        const status = discord.discord_status || 'offline';
        statusDot.className = `status-${status}`;
        statusText.textContent = status.charAt(0).toUpperCase() + status.slice(1);
        
        // Debug log to see what's in activities
        console.log('Activities:', discord.activities);
        console.log('Spotify:', discord.spotify);
        
        // Check for activities
        let hasActivity = false;
        
        // Check Spotify first
        if (discord.spotify && discord.spotify.track_id) {
          hasActivity = true;
          activityInfo.classList.remove('hidden');
          noActivity.classList.add('hidden');
          
          activityName.textContent = discord.spotify.song || 'Spotify';
          activityDetails.textContent = discord.spotify.artist || '';
          activityState.textContent = discord.spotify.album || '';
          
          if (discord.spotify.album_art_url) {
            albumArt.style.backgroundImage = `url('${discord.spotify.album_art_url}')`;
          } else {
            albumArt.style.backgroundImage = '';
          }
        }
        // Check for game activities
        else if (discord.activities && Array.isArray(discord.activities) && discord.activities.length > 0) {
          // Look for any activity
          for (let activity of discord.activities) {
            console.log('Activity:', activity);
            
            // Skip Discord activity types like custom status
            if (activity.type === 4) continue; // Skip custom status
            
            hasActivity = true;
            activityInfo.classList.remove('hidden');
            noActivity.classList.add('hidden');
            
            activityName.textContent = activity.name || 'Unknown Activity';
            activityDetails.textContent = activity.details || '';
            activityState.textContent = activity.state || '';
            
            // Handle different asset types
            if (activity.assets) {
              let imageUrl = '';
              
              if (activity.assets.large_image) {
                imageUrl = getAssetUrl(activity.assets.large_image, activity.application_id);
              } else if (activity.assets.small_image) {
                imageUrl = getAssetUrl(activity.assets.small_image, activity.application_id);
              }
              
              if (imageUrl) { 
                albumArt.style.backgroundImage = `url('${imageUrl}')`;
              } else {
                albumArt.style.backgroundImage = '';
              }
            } else {
              albumArt.style.backgroundImage = '';
            }
            
            break; // Use first valid activity
          }
        }
        
        // Show no activity if nothing found
        if (!hasActivity) {
          activityInfo.classList.add('hidden');
          noActivity.classList.remove('hidden');
        }
      }
    } catch (error) {
      console.error('Error fetching Discord status:', error);
      // Show no activity on error
      if (activityInfo && noActivity) {
        activityInfo.classList.add('hidden');
        noActivity.classList.remove('hidden');
      }
    }
  }
  
  function getAssetUrl(asset, applicationId) {
    if (!asset) return '';
    
    // Handle different asset formats
    if (asset.startsWith('mp:')) {
      return `https://media.discordapp.net/${asset.replace('mp:', '')}`;
    } else if (asset.startsWith('spotify:')) {
      return `https://i.scdn.co/image/${asset.replace('spotify:', '')}`;
    } else if (asset.startsWith('https://')) {
      return asset;
    } else if (applicationId) {
      return `https://cdn.discordapp.com/app-assets/${applicationId}/${asset}.png`;
    }
    
    return '';
  }
  
  updateDiscordStatus();
  setInterval(updateDiscordStatus, 30000); // Update every 30 seconds instead of 10
});