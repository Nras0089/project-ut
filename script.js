const popupButton = document.querySelector('.popup-button');
const popupOverlay = document.querySelector('.popup-overlay');
const closeButton = document.querySelector('.popup-close-btn');

popupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});