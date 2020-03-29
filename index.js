(() => {
  const init = () => {
    addListeners();
  };

  const addListeners = () => {
    window.addEventListener("load", () => {});
    window.addEventListener("scroll", handleWindowScroll);

    const navButtons = document.querySelectorAll("nav a");
    navButtons.forEach(button => {
      button.addEventListener("click", handleNavClick);
    });

    const heroButton = document.querySelector("#heading-button");
    heroButton.addEventListener("click", handelHeroButtonClick);
  };

  const handleWindowScroll = () => {
    navScrollFade();
    heroScrollParallax();
  };

  const handleNavClick = e => {
    const button = e.target;
    const selector = button.dataset.target;
    const section = document.querySelector(`.${selector}`);

    section.scrollIntoView({
      behavior: 'smooth'
    });

    e.preventDefault();
  };

  const handelHeroButtonClick = () => {
    const projectsSection = document.querySelector(".projects-section");

    projectsSection.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const navScrollFade = () => {
    const nav = document.querySelector(".portfolio-navigation");
    const scrollPos = window.scrollY;

    if(scrollPos > 1 ){
      nav.style.backgroundColor = "#557a95";
      nav.style.color = "#ffffff";
    } else {
      nav.style.backgroundColor = "transparent";
      nav.style.color = "#ffffff";
    }
  };

  const heroScrollParallax = () => {
    const hero = document.querySelector(".hero-section");
    const scrollPos = window.scrollY;
    const newHeroPos = scrollPos / 3;

    hero.style.backgroundPosition = `center ${newHeroPos}px`;
  };


  return init();
})()
