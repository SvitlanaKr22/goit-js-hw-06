//Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
//і виводить значення кольору в span.color.

const buttonColor = document.querySelector(".widget .change-color");
const spanColor = document.querySelector(".widget .color");
const body = document.querySelector("body");

const handleButtonColorClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = body.style.backgroundColor;
};

buttonColor.addEventListener("click", handleButtonColorClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
