const wrapperEl = document.querySelector(".wrapper");
const menuBtnEl = document.querySelector(".menu-btn");

const toggleScreen = () => {
  wrapperEl.classList.toggle("show-list");
};
menuBtnEl.addEventListener("click", toggleScreen);
