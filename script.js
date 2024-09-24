const wrapperEl = document.querySelector(".wrapper");
const menuBtnEl = document.querySelector(".menu-btn");
const backBtnEl = document.querySelector(".back-btn");

const toggleScreen = () => {
  wrapperEl.classList.toggle("show-list");
};
menuBtnEl.addEventListener("click", toggleScreen);
backBtnEl.addEventListener("click", toggleScreen);

const addTaskBtnEl = document.querySelector(".add-task-btn");
const addTaskFormEl = document.querySelector(".add-task-form");
const blackBackdropEl = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
  addTaskBtnEl.classList.toggle("active");
  addTaskFormEl.classList.toggle("active");
  blackBackdropEl.classList.toggle("active");
};

addTaskBtnEl.addEventListener("click", toggleAddTaskForm);
blackBackdropEl.addEventListener("click", toggleAddTaskForm);
