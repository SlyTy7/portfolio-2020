(() => {
  const init = () => {
    if(!window.portfolio) window.portfolio = {};

    addProjects();
    displayProjects();
    addEventListeners();
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
        }
      },
      {
        "title": "SpotOn",
        "description": "",
        "thumb_url": "./assets/projects/spoton-screenshot-scaled.png",
        "links": {
          "live_url": "https://www.spoton.com/"
        }
      },
      {
        "title": "MovieFind",
        "description": "A web application that enables you to search for movies and get information about the movie.",
        "thumb_url": "./assets/projects/moviefind-screenshot-scaled.png",
        "links": {
          "live_url": "https://slyty7.github.io/MovieFind/",
          "code_url": "https://github.com/SlyTy7/MovieFind",
        }
      },
      {
        "title": "DrumKit.js",
        "description": "A small drum kit made with JavaScript.",
        "thumb_url": "./assets/projects/drums-screenshot-scaled.png",
        "links": {
          "live_url": "https://slyty7.github.io/drums/",
          "code_url": "https://github.com/SlyTy7/drums",
        }
      },
      {
        "title": "React To-Do",
        "description": "A basic to-do list built with React and CRUD functionality.",
        "thumb_url": "./assets/projects/todo-screenshot-scaled.png",
        "links": {
          "live_url": "https://slyty7.github.io/react-todo/",
          "code_url": "https://github.com/SlyTy7/react-todo",
        }
      },
      {
        "title": "The GLD Shop",
        "description": "",
        "thumb_url": "./assets/projects/gldshop-screenshot-scaled.png",
        "links": {
          "live_url": "https://www.thegldshop.com/"
        }
      }
    ];
  };

  const displayProjects = () => {
    const projects = window.portfolio.projects;
    const projectsGrid = $(".projects-section-grid");

    projects.forEach( (project, index) => {
      // image
      const background = `background-image: url(${project.thumb_url})`;
      const image = `<div class="project-image" style="${background}"></div>`;

      // title & description
      const title = `<h3 class="project-title">${project.title}</h3>`;
      const description = `<p class="project-description">${project.description}</p>`;

      // links
      let liveButton = "";
      let codeButton = "";
      if(project.links.live_url) liveButton = `<a href="${project.links.live_url}" target="_blank" rel="noopener" class="dark-blue-bg white-font">view it live</a>`;
      if(project.links.code_url) codeButton = `<a href="${project.links.code_url}" target="_blank" rel="noopener" class="white-bg dark-blue-font">see the code</a>`;
      const buttons = `<div class="project-buttons">${liveButton}${codeButton}</div>`;

      // card
      const content = `<div class="project-content">${title}${description}${buttons}</div>`
      const container = `<div class="project-container">${image}${content}</div>`;
      const cell = `<li class="projects-section-cell" data-index="${index}">${container}</li>`;

      projectsGrid.append(cell);
    });
  };

  const addEventListeners = () => {
    addWindowScrollListener();
    addNavButtonListener();
    addHeroButtonListener();
  };

  const addWindowScrollListener = () => {
    // scroll limiter
    // checks if scrolling every 50 ms
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

    // sets global variable if currently scrolling
    // does heavy work inside of limiter above
    $(window).scroll(e => {
      window.portfolio.scrolling = true;
      window.portfolio.scrollEvent = e;
    });
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

  const parallaxHero = scrollPos => {
    const hero = $(".hero-section");
    const parallaxPos = scrollPos / 4;

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
