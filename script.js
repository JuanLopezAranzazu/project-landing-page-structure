// elements
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
const navMenu = document.getElementById("nav-menu");
const toggleBtn = document.getElementById("toggle-btn");
const toggleBtnIcon = toggleBtn.querySelector("i");
const scrollTopBtn = document.getElementById("scroll-top-btn");

// events
// Event to toggle the nav menu
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const isActive = navMenu.classList.contains("active");

  menuBtnIcon.setAttribute(
    "class",
    isActive ? "ri-close-line" : "ri-menu-line"
  );
});

// Event to close the nav menu when a link is clicked
navMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Event to toggle dark mode
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");
  toggleBtnIcon.setAttribute(
    "class",
    isDarkMode ? "ri-sun-line" : "ri-moon-line"
  );
});

// Event to scroll to top
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Event to show/hide the scroll to top button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
