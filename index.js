(() => {
  const init = () => {
    if(!window.portfolio) window.portfolio = {};

    addProjects();
    displayProjects();

    addListeners();
    startSlider();
  };

  const addProjects = () => {
    if(!window.portfolio.projects) window.portfolio.projects = [];

    window.portfolio.projects = [
      {
        "title": "Clock.js",
        "description": "A simple digital clock made with vanilla javascript.",
        "thumb_url": "./assets/projects/clock-screenshot-scaled.png",
        "links": {
          "live_url": "https://slyty7.github.io/clock/",
          "code_url": "https://github.com/SlyTy7/clock",
        },
        "image_urls": [
          "./assets/projects/clock-screenshot-scaled.png",
          "./assets/projects/clock-screenshot-scaled.png",
          "./assets/projects/clock-screenshot-scaled.png",
        ]
      },
      {
        "title": "MovieFind",
        "description": "A web application that enables you to search for movies and get information about the movie.",
        "thumb_url": "./assets/projects/moviefind-screenshot-scaled.png",
        "links": {
          "live_url": "https://slyty7.github.io/MovieFind/",
          "code_url": "https://github.com/SlyTy7/MovieFind",
        },
        "image_urls": [
          "./assets/projects/moviefind-screenshot-scaled.png",
          "./assets/projects/moviefind-screenshot-scaled.png",
          "./assets/projects/moviefind-screenshot-scaled.png",
        ]
      },
      {
        "title": "DrumKit.js",
        "description": "A small drum kit made with JavaScript.",
        "thumb_url": "./assets/projects/drums-screenshot-scaled.png",
        "links": {
          "live_url": "https://slyty7.github.io/drums/",
          "code_url": "https://github.com/SlyTy7/drums",
        },
        "image_urls": [
          "./assets/projects/drums-screenshot-scaled.png",
          "./assets/projects/drums-screenshot-scaled.png",
          "./assets/projects/drums-screenshot-scaled.png",
        ]
      }
    ];
  };

  const displayProjects = () => {
    const projects = window.portfolio.projects;
    const projectsGrid = $(".projects-section-grid");

    projects.forEach( (project, index) => {
      const background = `background-image: url(${project.thumb_url})`;
      const title = `<h3 class="project-title">${project.title}</h3>`;
      const cta = `<hr><p class="project-tooltip">click for more info</p>`;
      const container = `<div class="project-container">${title}${cta}</div>`;
      const cell = `<li style="${background}" class="projects-section-cell" data-index="${index}">${container}</li>`;

      projectsGrid.append(cell);
    });
  };


  const addListeners = () => {
    addWindowScrollListener();
    addNavButtonListener();
    addHeroButtonListener();
    // addProjectsListener();
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

  /*
  const addProjectsListener = () => {
    const cells = $(".projects-section-cell");
    const container = $(".project-modal-container");

    cells.click(e => {
      const index = $(e.currentTarget).data("index");

      buildModal(index);
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
  */
  /*
  const buildModal = index => {
    const modal = $(".project-modal")[0];
    const projects = window.portfolio.projects;
    const project = projects[index];
    // const image = `<img src="${project.image_urls[0]}" alt="${project.title}">`;



    console.log(project);
  };
  */
  /*
  const showModal = () => {
    const modalContainer = $(".project-modal-container");

    modalContainer.show();
  };

  const closeModal = () => {
    const modalContainer = $(".project-modal-container");
    const modal = $(".project-modal");

    modalContainer.hide();
    modal.empty();
  };
  */

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
