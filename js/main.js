// get the burger menu
const burger = document.getElementsByClassName("content-menu")[0];
// elements which was hidden
const header = document.getElementsByClassName("menu")[0];

burger.children[0].addEventListener("click", () => {
  if (header.className.match(/hidden/g)) {
    burger.className += " active";
    return (header.className = "menu");
  }
  burger.className = "content-menu";
  header.className += " hidden";
});
