class SimpleGallery {
  constructor(options = {}) {

    if(!options.el) {
      throw new Error('Specify root selector')
    }

    this.el = options.el;
    this.el.classList.add('simple-gallery');

    this.imgContainer = this.el.querySelector('div');
    this.imgContainer.classList.add('simple-gallery__container');

    this.images = this.el.querySelectorAll('img:not(.current)');
    this.images[0].classList.add('current-target');

    this.changingDelay = options.changingDelay || 500;

    this.initCurrentImage();
    this.changeCurrentImageSrc();
  }

  initCurrentImage() {
    let currentImage = document.createElement('img');
    currentImage.classList.add('current');
    currentImage.src = this.images[0].src;
    this.el.prepend(currentImage);
    return currentImage;
  }

  changeCurrentImageSrc() {
    let that = this;
    let currentImage = this.el.querySelector('.current');

    this.images.forEach(function(image) {
      image.addEventListener('click', function(e) {
        that.clearClassesUtil();

        currentImage.src = e.target.src;
        currentImage.classList.add("changing");
        setTimeout(() => currentImage.classList.remove("changing"), that.changingDelay);

        e.target.classList.add('current-target');
      })
    })
  }

  clearClassesUtil() {
    this.images.forEach(function(image) {
      image.classList.remove('current-target')
    })
  }
}