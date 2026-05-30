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

function createRain(){

  setInterval(()=>{

    const rain =
    document.createElement("div");

    rain.className =
    "rain";

    rain.style.left =
    Math.random()*100+"vw";

    rain.style.animationDuration =
    .5+Math.random()+"s";

    document.body.appendChild(
      rain
    );

    setTimeout(()=>{
      rain.remove();
    },2000);

  },50);

}

function createSnow(){

  setInterval(()=>{

    const snow =
    document.createElement("div");

    snow.className =
    "snow";

    snow.style.left =
    Math.random()*100+"vw";

    snow.style.animationDuration =
    3+Math.random()*4+"s";

    document.body.appendChild(
      snow
    );

    setTimeout(()=>{
      snow.remove();
    },8000);

  },150);

}
