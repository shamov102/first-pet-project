// video 1
/* const button = document.querySelector('button');
function click() {
  alert('click');
}


button.addEventListener('click', click);
button.addEventListener('click', () => alert("click two"));

button.removeEventListener('click', click); */

// video 2
/* const button = document.querySelector('button');
function onClick(event) {
  event.target.textContent = 'clicked';
}
button.addEventListener('click', onClick);

function moved(event) {
  const coords = `x: ${event.clientX}, y: ${event.clientY}`;
  document.querySelector('div').textContent = coords;
}

window.addEventListener('mousemove', moved); */

// video 3 всплытие и погружение

function buttonClick(target) {
  console.log(event.currentTarget);
  // alert("Button click");
}

function bodyClick(target) {
  console.log(event.currentTarget);
  // alert("Body click");
}

function windowClick(target) {
  console.log(event.currentTarget);
  // alert("Body click");
}

document.querySelector('button').addEventListener('click', buttonClick, true);
document.body.addEventListener('click', bodyClick, true);
window.addEventListener('click', windowClick, true);

// video 4 отмена действия по умолчанию

/* function onSubmit(event) {
  event.preventDefault(); // первый способ отмены действия по умолчанию
  const name = document.querySelector('.name');
  if (name.value !== '') {
    alert('Hello, ' + name.value);
  } else {
    alert('Введите имя');
  }
}

document.querySelector('form').addEventListener('submit', onSubmit);

document.querySelector('a').addEventListener("click", (event) => { // второй способ отмены действия по умолчанию
  event.preventDefault();
}) */


// video 5 - делегирование событий
 
/* function random() {
  return Math.floor(Math.random() * 256);
}

function handleClick(event) {
  if (event.target.tagName !== 'TD') return; // tagname всегда возвращается с заглавной буквы
  const red = random();
  const green = random();
  const blue = random();
  const color = "rgb(" + red + ', а' + green + ',' + blue + ")"
  console.log(color);
  event.target.style.backgroundColor = color;
}

document.querySelector('table').addEventListener('click', handleClick);
 */


// video 6 - типы событий

// function init() {
// const text = document.querySelector('div').textContent;
// console.log(text);
// } 

// window.addEventListener('DOMContentLoaded', init);


/* function handleKey(event) {
  console.log(event);
}

window.addEventListener("keydown", handleKey); */


// дублирование текста вводимого в инпут на страницу 
/* function onInput(event) {
  document.querySelector('.duplicator').textContent = event.target.value;
}

document.querySelector('input').addEventListener('input', onInput);
 */

/* function onInput(event) {
  document.querySelector('.duplicator').textContent = event.target.value;
}

document.querySelector('input').addEventListener('change', onInput);

 */