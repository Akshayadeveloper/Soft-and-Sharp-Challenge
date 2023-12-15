
    function toggleSharpness() {
      const container = document.querySelector('.container');
      const imageContainer = document.querySelector('.image-container');
      const image = document.querySelector('img');

      container.style.backgroundColor = container.style.backgroundColor === '#f5f5f5' ? '#222222' : '#f5f5f5'; /* Toggle background color */

      if (imageContainer.classList.contains('sharp-image')) {
        imageContainer.classList.remove('sharp-image');
        image.style.filter = 'contrast(100%) brightness(100%)'; /* Soft transition for image filter property */
      } else {
        imageContainer.classList.add('sharp-image');
        image.style.filter = 'contrast(200%) brightness(80%)'; /* Sharp transition for image filter property */
      }
    }
  
