(() => {
  const init = () => {
    addListeners();
    startSlider();
  };

  const addListeners = () => {
    addWindowScrollListener();
    addNavButtonListener();
    addHeroButtonListener();
  };

  const addWindowScrollListener = () => {
    const hero = $(".hero-section");
    const nav = $(".portfolio-navigation");

    $(window).scroll(e => {
      const scrollPos = e.currentTarget.scrollY;
      const newHeroPos = scrollPos / 3;

      hero.css({"background-position": `center ${newHeroPos}px`});

      if(scrollPos > 1){
        nav.css({"background-color": "#557a95", "color": "#ffffff"});
      } else {
        nav.css({"background-color": "transparent", "color": "#ffffff"});
      }
    });
  };

  const addNavButtonListener = () => {
    const buttons = $("nav a");

    buttons.on("click", e => {
      const buttonClicked = $(e.currentTarget);
      const selector = buttonClicked.data().target;
      const section = document.querySelector(`.${selector}`);

      section.scrollIntoView({
        behavior: 'smooth'
      });

      e.preventDefault();
    });
  };

  const addHeroButtonListener = () => {
    const button = $("#heading-button");

    button.on("click", e => {
      const projectsSection = document.querySelector(".projects-section");

      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });

      e.preventDefault();
    });
  };

  const startSlider = () => {
    // slick.js requires a jquery object
    const sliderContainer = $(".testimonials-slider");
    console.log(sliderContainer);
    sliderContainer.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false
    });
  };


  return init();
})()
