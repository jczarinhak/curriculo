const img = document.querySelector('.profile img');
const originalSize = img.clientWidth;

img.addEventListener('mouseover', () => {
    img.style.width = `${originalSize}px`;
    img.style.height = `${originalSize}px`;
  });


