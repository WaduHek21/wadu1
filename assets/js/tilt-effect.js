document.addEventListener('DOMContentLoaded', function() {
  const blurredBox = document.getElementById('blurred-box');
  if (!blurredBox) return;

  blurredBox.style.setProperty('--rotate-x', '0deg');
  blurredBox.style.setProperty('--rotate-y', '0deg');

  const handleTilt = (e) => {
    const rect = blurredBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = (x - centerX) / 30;
    const rotateX = (centerY - y) / 30;
    
    blurredBox.style.setProperty('--rotate-x', `${rotateX}deg`);
    blurredBox.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  let isHovering = false;
  let animationFrameId = null;

  blurredBox.addEventListener('mouseenter', () => {
    isHovering = true;
    animateTilt();
  });

  blurredBox.addEventListener('mousemove', (e) => {
    if (isHovering) {
      handleTilt(e);
    }
  });

  blurredBox.addEventListener('mouseleave', () => {
    isHovering = false;
    blurredBox.style.setProperty('--rotate-x', '0deg');
    blurredBox.style.setProperty('--rotate-y', '0deg');
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  });

  function animateTilt() {
    if (!isHovering) return;
    animationFrameId = requestAnimationFrame(animateTilt);
  }
});