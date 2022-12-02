// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = 0;
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const valEl = document.querySelector("#value");

const handleDecClick = () => {
  return (valEl.textContent = Number(valEl.textContent) - 1);
};

const handleIncClick = () => {
  return (valEl.textContent = Number(valEl.textContent) + 1);
};

decBtn.addEventListener("click", handleDecClick);
incBtn.addEventListener("click", handleIncClick);
