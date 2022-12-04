//Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і
//натискає кнопку Створити, після чого рендериться колекція.
//Натисненням на кнопку Очистити, колекція елементів очищається.

//Створи функцію createBoxes(amount), яка приймає один параметр - число.
//Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX.
//Використовуй готову функцію getRandomHexColor для отримання кольору.
//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const div = document.querySelector("#controls");
const inputNumber = div.firstElementChild;
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const arrDivBox = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = 30 + i * 10 + "px";
    div.style.height = 30 + i * 10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    arrDivBox.push(div);
  }
  divBoxes.append(...arrDivBox);
};
const destroyBoxes = () => {
  [...divBoxes.children].map((div) => div.remove());
  inputNumber.value = "";
};

const handleButonCreateClick = () => createBoxes(inputNumber.value);

buttonCreate.addEventListener("click", handleButonCreateClick);
buttonDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
