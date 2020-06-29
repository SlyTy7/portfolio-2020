(() => {
  const init = () => {
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
    const hero = $(".hero-section");
    const nav = $(".portfolio-navigation");

    $(window).scroll(e => {
      const scrollPos = e.currentTarget.scrollY;
      const newHeroPos = scrollPos / 3;

      hero.css({"background-position": `center ${newHeroPos}px`});

      if(scrollPos > 1){
        nav.css({"background-color": "rgba(0, 0, 0, 0.8)", "color": "#ffffff"});
        nav.addClass("section-shadow");
      } else {
        nav.css({"background-color": "transparent", "color": "#ffffff"});
        nav.removeClass("section-shadow");
      }
    });
  };

  const addNavButtonListener = () => {
    const buttons = $("nav a");
    const mobileMenu = $(".mobile-nav-menu-open");

    buttons.on("click", e => {
      const buttonClicked = $(e.currentTarget);
      const selector = buttonClicked.data().target;
      const section = document.querySelector(`.${selector}`);

      if(section) section.scrollIntoView({ behavior: "smooth" });
      if(selector === "mobile-menu-toggle") mobileMenu.toggle();

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
