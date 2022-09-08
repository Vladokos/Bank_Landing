// get the burger menu
const burger = document.getElementsByClassName("content-menu")[0];
// elements which was hidden
const header = document.getElementsByClassName("menu")[0];

if (window.screen.width <= 1082) {
  header.className = "menu hidden";
  burger.className = "content-menu";
}

window.addEventListener("resize", () => {
  if (window.screen.width <= 1082) {
    header.className = "menu hidden";
    burger.className = "content-menu";
  } else {
    header.className = "menu";
    burger.className = "content-menu hidden";
  }
});

burger.children[0].addEventListener("click", () => {
  if (header.className.match(/hidden/g)) {
    burger.className += " active";
    header.className = "menu";
  } else {
    burger.className = "content-menu";
    header.className += " hidden";
  }
});
