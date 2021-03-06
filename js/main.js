const menuIcon = document.querySelector(".menu");
menuIcon.addEventListener("click", iconToggle);

const menuItens = document.querySelectorAll("#menu-itens a");

menuItens.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target);
  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}
animeScroll();

if (target.length) {
  window.addEventListener("scroll", function () {
    animeScroll();
  });
}

function iconToggle() {
  const mobileMenu = document.querySelector(".mobile__menu");
  setTimeout(() => {
    mobileMenu.classList.toggle("show");
  }, 300);
}
