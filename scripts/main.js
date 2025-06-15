// Create twinkling stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        
        // Random size
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation
        const duration = 2 + Math.random() * 5;
        const delay = Math.random() * 5;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `-${delay}s`);
        
        starsContainer.appendChild(star);
    }
}

// Add subtle animation to moon icon
function animateMoonIcon() {
    const moonIcon = document.querySelector('.moon-icon');
    if (!moonIcon) return;
    
    setInterval(() => {
        const rotation = Math.sin(Date.now() / 8000) * 10;
        moonIcon.style.transform = `rotate(${-30 + rotation}deg)`;
        
        const glow = 0.3 + Math.abs(Math.sin(Date.now() / 2000)) * 0.7;
        moonIcon.style.filter = `drop-shadow(0 0 ${5 + glow * 10}px rgba(212, 180, 131, ${0.5 + glow * 0.3}))`;
    }, 50);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    animateMoonIcon();
});