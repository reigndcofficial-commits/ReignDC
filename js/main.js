const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navActions = document.querySelector(".nav-actions");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    navActions.classList.toggle("active");
  });
}
