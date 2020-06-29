(() => {
  const init = () => {
    if(!window.portfolio) window.portfolio = {};
    addListeners();
    startSlider();
  };

  const addListeners = () => {
    addWindowScrollListener();
    addNavButtonListener();
    addHeroButtonListener();
    addProjectsListener();
  };

  const addWindowScrollListener = () => {
    startLimiter();

    $(window).scroll(e => {
      window.portfolio.scrolling = true;
      window.portfolio.scrollEvent = e;
    });
  };

  const startLimiter = e => {
    setInterval(() => {
      if(window.portfolio.scrolling){
        const navigation = $("nav");
        const scrollPos = window.portfolio.scrollEvent.currentTarget.scrollY;

        if(scrollPos > 1){
          navFadeIn();
          navigation.addClass("scrolled");
        } else {
          navFadeOut();
          navigation.removeClass("scrolled");
        }

        parallaxHero(scrollPos);

      }

      window.portfolio.scrolling = false;
    }, 50);
  };

  const parallaxHero = scrollPos => {
    const hero = $(".hero-section");
    const parallaxPos = Math.round(scrollPos / 3);

    hero.css({"background-position": `center ${parallaxPos}px`});
  }

  const navFadeIn = () => {
    const nav = $(".portfolio-navigation");

    nav.css({"background-color": "rgba(0, 0, 0, 0.8)", "color": "#ffffff"});
    nav.addClass("section-shadow");
  };

  const navFadeOut = () => {
    const nav = $(".portfolio-navigation");

    nav.css({"background-color": "transparent", "color": "#ffffff"});
    nav.removeClass("section-shadow");
  };

  const addNavButtonListener = () => {
    const navigation = $("nav");
    const buttons = $("nav a");
    const mobileMenu = $(".mobile-nav-menu-open");

    buttons.on("click", e => {
      const buttonClicked = $(e.currentTarget);
      const selector = buttonClicked.data().target;
      const section = document.querySelector(`.${selector}`);

      if(section) section.scrollIntoView({ behavior: "smooth" });
      if(selector === "mobile-menu-toggle") {
        if(!navigation.hasClass("scrolled") && !mobileMenu.hasClass("menu-open")) navFadeIn();
        if(!navigation.hasClass("scrolled") && mobileMenu.hasClass("menu-open")) navFadeOut();

        if(mobileMenu.hasClass("menu-open")) mobileMenu.slideUp(400);
        if(!mobileMenu.hasClass("menu-open")) mobileMenu.slideDown(400);

        mobileMenu.toggleClass("menu-open");
      };

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

  const addProjectsListener = () => {
    const cells = $(".projects-section-cell");
    const container = $(".project-modal-container");


    cells.click(e => {
      // const index = $(e.target).data("index");
      showModal();
    });

    container.click(e => {
      const target = $(e.target)
      // const index = target.data("index");

      if(target.hasClass("project-modal-container")){
        closeModal();
      };

    });

  };

  const showModal = () => {
    const container = $(".project-modal-container")[0];

    $(container).show();
  };

  const closeModal = () => {
    const container = $(".project-modal-container")[0];

    $(container).hide();
  };

  const startSlider = () => {
    // slick.js requires a jquery object
    const sliderContainer = $(".testimonials-slider");

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
