const footerScene = document.getElementById('footer-scene');
const aboutScene = document.getElementById('about-scene');
const aboutScene2 = document.getElementById('about-scene-2');
const featuresScene = document.getElementById('features-scene');

const firstSlideScene = document.getElementById('first-slide-scene');
const secondSlideScene = document.getElementById('second-slide-scene');
const thirdSlideScene = document.getElementById('third-slide-scene');
const fourthSlideScene = document.getElementById('fourth-slide-scene');
const fifthSlideScene = document.getElementById('fifth-slide-scene');
const sixthSlideScene = document.getElementById('sixth-slide-scene');
const seventhSlideScene = document.getElementById('seventh-slide-scene');

const footerParallax = new Parallax(footerScene, {
  selector: '.parallax-layer',
});

const featursParallax = new Parallax(featuresScene, {
  selector: '.parallax-layer',
});

const firstSlideParallax = new Parallax(firstSlideScene, {
  selector: '.parallax-layer',
});

const secondSlideParallax = new Parallax(secondSlideScene, {
  selector: '.parallax-layer',
});

const thirdSlideParallax = new Parallax(thirdSlideScene, {
  selector: '.parallax-layer',
});

const fourthSlideParallax = new Parallax(fourthSlideScene, {
  selector: '.parallax-layer',
});

const fifthSlideParallax = new Parallax(fifthSlideScene, {
  selector: '.parallax-layer',
});

const sixthSlideParallax = new Parallax(sixthSlideScene, {
  selector: '.parallax-layer',
});

const seventhSlideParallax = new Parallax(seventhSlideScene, {
  selector: '.parallax-layer',
});

var slider = tns({
  container: '.intro__slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayButtonOutput: false,
  speed: 1500,
  preventActionWhenRunning: false,
  preventScrollOnTouch: 'force',
  nav: true,
  controls: true,
  controlsContainer: '.intro__arrows',
  navContainer: '.intro__controls .intro__list'
});

AOS.init();

document.addEventListener('aos:in', ({ detail }) => {
  if (detail === document.getElementById('about-cocktails')) {
    setTimeout(() => {
      new Parallax(aboutScene2, {
        selector: '.parallax-layer',
      });
    }, 600)
  }

  if (detail === document.getElementById('about-snacks')) {
    setTimeout(() => {
      new Parallax(aboutScene, {
        selector: '.parallax-layer',
      });
    }, 600)
  }
});

const scroll = new SmoothScroll('.intro__more', {
  speed: 1000,
  speedAsDuration: true
});
