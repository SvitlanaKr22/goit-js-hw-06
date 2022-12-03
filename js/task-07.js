//Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок,
//буде змінюватися розмір тексту.

const rangeInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

const handleRangeInput = () =>
  (textSpan.style.fontSize = rangeInput.value + "px");

handleRangeInput();

rangeInput.addEventListener("input", handleRangeInput);
