var menu = document.getElementById("menu");
var headerNav = document.getElementById("headerNav");

menu.addEventListener("click", function () {
  headerNav.classList.toggle("showNav");
});

headerNav.addEventListener("click", function () {
  headerNav.classList.remove("showNav");
});
