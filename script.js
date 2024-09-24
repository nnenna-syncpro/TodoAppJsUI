import { default as categories } from "./data/categories.json" with { type: "json" };

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

const categoriesContainerEl = document.querySelector(".categories");
const renderCategories = () => {
  categoriesContainerEl.innerHTML = "";
  categories.forEach((category) => {
    //render category cards
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    categoryDiv.innerHTML = `
    <div class="category-details">
      <img src="${category.img}" alt="${category.title} icon" />
      <div class="content">
        <h1>${category.title}</h1>
        <p>0 Tasks</p>
      </div>
    </div>
    <div class="category-options">
      <div class="toggle-btn">
        <img src="./assets/images/toggle-btn.svg" alt="" />
      </div>
    </div>
    `;
    categoriesContainerEl.appendChild(categoryDiv);
  });
};

renderCategories();
