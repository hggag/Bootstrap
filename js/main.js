let up = document.querySelector(".top");

window.onscroll = function () {
  this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  up.classList.add("up");
};
