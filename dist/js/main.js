// Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-items");

// Set Iniial State Of Menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    // Set Menu State

    showMenu = true;
  } else {
    menuBtn.classList.remove("show");
    menu.classList.remove("close");
    menuNav.classList.remove("close");
    menuBranding.classList.remove("close");
    navItem.forEach(item => item.classList.remove("show"));

    // Set Menu State

    showMenu = false;
  }
}
