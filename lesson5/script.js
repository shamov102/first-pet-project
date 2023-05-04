const clouds = ["sunny", "cloudly", "rainy", "heavy clouds"]
const precipitation = ["nothing", "rain", "fog"]



function rnd(max) {
  return Math.floor(Math.random() * max)
}

function getForecast() {
  const weather = {};


  const cloudIndex = rnd(clouds.length);
  weather.clouds = clouds[cloudIndex];

  const precipitationIndex = rnd(precipitation.length);
  weather.precipitation = precipitation[precipitationIndex];

  weather.temperature = rnd(35) + " C";

  return weather;
}

function showForecast() {
  const weather = getForecast();
  for (let key in weather) {
    alert(key + ": " + weather[key]);
  }
}

showForecast();