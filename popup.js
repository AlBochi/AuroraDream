document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('adModal');
    const closeBtn = document.querySelector('.close-btn');
    const adImage = document.getElementById('adImage');
    
    // Check if the popup has been closed before (using sessionStorage)
    const popupClosed = sessionStorage.getItem('popupClosed');
    
    // Show popup on page load/refresh if not closed in this session
    if (!popupClosed) {
        setTimeout(() => {
            modal.style.display = 'flex';
        }, 500); // Small delay for better UX
    }
    
    // Close button functionality
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        sessionStorage.setItem('popupClosed', 'true');
    });
    
    // Close when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            sessionStorage.setItem('popupClosed', 'true');
        }
    });
    
    // Handle image loading error
    adImage.addEventListener('error', function() {
        console.log('Ad image not found. Using fallback content.');
        
        // Create fallback content
        const fallbackContent = document.createElement('div');
        fallbackContent.style.padding = '40px';
        fallbackContent.style.backgroundColor = '#1a3a5f';
        fallbackContent.style.color = 'white';
        fallbackContent.style.textAlign = 'center';
        fallbackContent.innerHTML = `
            <h2 style="font-size: 36px; margin-bottom: 10px;">BIG WINTER RESET</h2>
            <p style="font-size: 48px; color: #ff6b6b; margin: 20px 0;">20% OFF SALE</p>
            <p style="font-size: 24px; margin: 10px 0;">LIMITED TIME ONLY!</p>
            <p style="font-size: 18px; margin-top: 30px;">Conditions and terms apply</p>
            <p style="font-size: 14px; margin-top: 10px; opacity: 0.8;">dream™</p>
        `;
        
        // Replace broken image with fallback
        adImage.style.display = 'none';
        const modalContent = document.querySelector('.modal-content');
        modalContent.appendChild(fallbackContent);
    });
});
