// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const textInput = document.querySelector("#validation-input");

const handleInputblur = (evt) => {
  if (
    evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)
  ) {
    evt.currentTarget.classList.remove("invalid");
    evt.currentTarget.classList.add("valid");
  } else {
    evt.currentTarget.classList.remove("valid");
    evt.currentTarget.classList.add("invalid");
  }
};

textInput.addEventListener("blur", handleInputblur);
