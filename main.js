import './style.css'

const btn = document.querySelector("#menu");
const body = document.querySelector("body");
const list = document.querySelector("#list");

btn.addEventListener('click', () => {
  list.classList.toggle('block');
  list.classList.toggle('hidden');

  // TODO add linear background color 

});