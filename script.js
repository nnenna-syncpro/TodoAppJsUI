const wrapperEl = document.querySelector(".wrapper");
const menuBtnEl = document.querySelector(".menu-btn");
const backBtnEl = document.querySelector(".back-btn");

const toggleScreen = () => {
  wrapperEl.classList.toggle("show-list");
};
menuBtnEl.addEventListener("click", toggleScreen);
backBtnEl.addEventListener("click", toggleScreen);
