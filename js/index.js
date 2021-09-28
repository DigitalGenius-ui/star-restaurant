// navigation background animation 

const header = document.querySelector(".header");

window.addEventListener("scroll", function(){
  header.classList.toggle("active", window.scrollY > 0);
});

// form animation part 

const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector(".btn");
const foodBtn = document.querySelector(".food-btn");

openBtn.addEventListener("click", function(){
  form.classList.add("open");
  overlay.classList.add("open");
});

closeBtn.addEventListener("click", function(){
  form.classList.remove("open");
  overlay.classList.remove("open");
});

foodBtn.addEventListener("click", function(){
  form.classList.add("open");
  overlay.classList.add("open");
});

// bar animation 

const bars = document.querySelector(".bars");
const menu = document.querySelector(".header")

bars.addEventListener("click", function(){
  bars.classList.toggle("open");
  menu.classList.toggle("open");
})