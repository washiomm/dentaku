/* ========================================
   weather.js
======================================== */

const weather =
document.getElementById(
  "weather"
);

const weatherList = [

  "☀️ 晴れ 26℃",
  "☁️ 曇り 22℃",
  "🌧️ 雨 18℃",
  "❄️ 雪 0℃"

];

function fakeWeather(){

  const item =
  weatherList[
    new Date().getDate()
    % weatherList.length
  ];

  weather.textContent =
  item;

  if(item.includes("雨")){
    createRain();
  }

  if(item.includes("雪")){
    createSnow();
  }

}

fakeWeather();
