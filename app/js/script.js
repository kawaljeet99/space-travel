const navList = document.getElementById("nav-list");
const menuOpen = document.getElementById("hamburger");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", () => {
  navList.classList.add("visible");
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  navList.classList.remove("visible");
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
});
