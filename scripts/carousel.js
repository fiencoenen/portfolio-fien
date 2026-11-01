(function() {
  const images = [
    '/images/Start%20Screen/startscreen_1.png',
    '/images/Start%20Screen/startscreen_2.png',
    '/images/Start%20Screen/startscreen_3.png',
    '/images/Start%20Screen/startscreen_4.png',
    '/images/Start%20Screen/startscreen_5.png'
  ];

  // Preload all images immediately
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  let currentIndex = 0;
  const imgElement = document.getElementById('carousel-image');
  if (!imgElement) return;

  function updateSlide(index) {
    currentIndex = index;
    // Hard immediate switch - no fading, no transitions
    imgElement.src = images[currentIndex];
    // Images 2 and 4 (indices 1 and 3) extend slightly beyond the placeholder boundary
    const isLarger = (currentIndex === 1 || currentIndex === 3);
    imgElement.classList.toggle('carousel-img--larger', isLarger);
  }

  function nextImage() {
    updateSlide((currentIndex + 1) % images.length);
  }

  setInterval(nextImage, 3000);
})();
