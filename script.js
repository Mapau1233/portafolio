const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const elements = document.querySelectorAll(".section, .imagen-full, .sobre-imagen");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if(scrollY >= sectionTop){
      current = section.getAttribute("id");
    }

    if(window.scrollY > section.offsetTop - 400){
      section.classList.add("visible");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });

  elements.forEach(el => {
    if(window.scrollY > el.offsetTop - 500){
      el.classList.add("visible");
    }
  });

});
