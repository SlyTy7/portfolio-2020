(() => {
  const init = () => {
    if(!window.portfolio) window.portfolio = {};

    addProjects();
    addPortfolioSocial();

    displayProjects();
    displaySocialButtons();

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
        },
        "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
          "Git",
          "Github",
          "Responsive Design"
        ]
      },
      {
        "title": "SpotOn",
        "description": `As the only front end developer on my team, I became well versed
          in many aspects. I built a HUBL framework that enabled the marketing team to make
          simple changes to the website, emails, or blog; an entirely automated email campaign
          based on last purchase, new customer, time as a customer, etc; and some internal
          tools and dashboards with React.js, that sent API calls to our internal database.`,
        "thumb_url": "./assets/projects/spoton-screenshot-scaled.png",
        "links": {
          "live_url": "https://www.spoton.com/"
        },
        "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Node.js",
          "Zapier",
          "jQuery",
          "Git",
          "SEO",
          "Hubspot",
          "HUBL",
          "HubDB",
          "REST API",
          "Responsive Design"
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
        "skills": [
          "HTML",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "jQuery",
          "Git",
          "Github",
          "REST API",
          "Responsive Design"
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
        "skills": [
          "HTML",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "Git",
          "Github",
          "Responsive Design"
        ]
      },
      {
        "title": "React To-Do",
        "description": "A basic to-do list built with React and CRUD functionality.",
        "thumb_url": "./assets/projects/todo-screenshot-scaled.png",
        "links": {
          "live_url": "https://slyty7.github.io/react-todo/",
          "code_url": "https://github.com/SlyTy7/react-todo",
        },
        "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Git",
          "Github",
          "Responsive Design"
        ]
      },
      {
        "title": "The GLD Shop",
        "description": "",
        "thumb_url": "./assets/projects/gldshop-screenshot-scaled.png",
        "links": {
          "live_url": "https://www.thegldshop.com/"
        },
        "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "jQuery",
          "SEO",
          "Shopify",
          "Responsive Design"
        ]
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

      // skills
      let skills = "";
      if(project.skills) project.skills.forEach(skill => skills += `<p class="project-skill dark-gray-bg white-font">${skill}</p>`);
      let skillsContainer = `<div class="project-skills-container">${skills}</div>`;

      // links
      let liveButton = "";
      let codeButton = "";
      if(project.links.live_url) liveButton = `<a href="${project.links.live_url}" target="_blank" rel="noopener" class="dark-blue-bg white-font">view it live</a>`;
      if(project.links.code_url) codeButton = `<a href="${project.links.code_url}" target="_blank" rel="noopener" class="white-bg dark-blue-font">see the code</a>`;
      const buttons = `<div class="project-buttons">${liveButton}${codeButton}</div>`;

      // card
      const content = `<div class="project-content">${title}${description}${skillsContainer}${buttons}</div>`
      const container = `<div class="project-container">${image}${content}</div>`;
      const cell = `<li class="projects-section-cell" data-index="${index}">${container}</li>`;

      projectsGrid.append(cell);
    });
  };

  const addPortfolioSocial = () => {
    if(!window.portfolio.contact) window.portfolio.contact = [
      {"linkedin" : "https://www.linkedin.com/in/tylerjwest/"},
      {"github" : "https://github.com/SlyTy7"},
      {"email" : "mailto:tylerwest.dev@gmail"},
      {"phone" : "tel:5107363210"},
      {"resume": "./assets/tyler-west-resume.PDF"}
    ];
  };

  const displaySocialButtons = () => {
    const container = $(".social-buttons-container");
    const links = window.portfolio.contact;

    links.forEach(link => {
      let buttonLink = "";
      if(link.github) buttonLink = link.github;
      if(link.linkedin) buttonLink = link.linkedin;
      if(link.email) buttonLink = link.email;
      if(link.phone) buttonLink = link.phone;
      if(link.codepen) buttonLink = link.codepen;
      if(link.resume) buttonLink = link.resume;

      let buttonIcon = "";
      if(link.github) buttonIcon = `<i class="fab fa-github dark-gray-font"></i>`;
      if(link.linkedin) buttonIcon = `<i class="fab fa-linkedin dark-gray-font"></i>`;
      if(link.email) buttonIcon = `<i class="fas fa-envelope dark-gray-font"></i>`;
      if(link.phone) buttonIcon = `<i class="fas fa-phone dark-gray-font"></i>`;
      if(link.codepen) buttonIcon = `<i class="fab fa-codepen dark-gray-font"></i>`;
      if(link.resume) buttonIcon = `<i class="fas fa-file dark-gray-font"></i>`;

      const button = `<a href="${buttonLink}" target="_blank" rel="noopener" class="white-bg">${buttonIcon}</a>`;

      container.append(button);
    })

  };

  const addEventListeners = () => {
    addWindowScrollListener();
    addNavButtonListener();
    addHeroButtonListener();
    addResumeButtonListener();
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

  const addResumeButtonListener = () => {
    const button = $("#resume-button");

    button.on("click", e => {
      window.open('./assets/tyler-west-resume.PDF', '_blank', 'fullscreen=yes');

      e.preventDefault();
      return false;
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
