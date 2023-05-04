let name = prompt("Ваше имя?");

let weatherArray = ['windy', 'no wind', 'storm'];
let rainArray = ['no rain', 'rainy', 'heavy rain'];


function rand(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function getWeather() {
  const weather = {};

  const weatherIndex = rand(weatherArray.length);
  weather.wind = weatherArray[weatherIndex];

  const rainIndex = rand(rainArray.length);
  weather.rain = rainArray[rainIndex];

  if (weather == 'heavy rain' || weather == 'storm') {
    alert(`Hello, ${name}, the weather bad, stay at home` + 'weather');
  } else {
    alert(`Hello, ${name}, the weather nice, go outside`);
  }
  return weather;
}

console.log(getWeather());