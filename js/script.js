const btnMenu = document.querySelector("#btn-menu");
const nav = document.querySelector("#nav");
const btnCoaching = document.querySelector("#buton-coaching");

btnMenu.addEventListener("click", () => {
  if (nav.classList.contains("close")) {
    nav.classList.add("open");
    nav.classList.remove("close");
  } else {
    nav.classList.add("close");
    nav.classList.remove("open");
  }

  if (btnCoaching.classList.contains("close-button")) {
    btnCoaching.classList.add("open-button");
    btnCoaching.classList.remove("close-button");
  } else {
    btnCoaching.classList.add("close-button");
    btnCoaching.classList.remove("open-button");
  }
});
