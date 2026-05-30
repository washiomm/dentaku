/* ========================================
   weather.js
   東京の実際の天気
======================================== */

const weatherElement =
document.getElementById("weather");

/*
東京都の天気予報
気象庁API
130000 = 東京都
*/

async function getTokyoWeather(){

  try{

    const response =
    await fetch(
      "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"
    );

    const data =
    await response.json();

    const area =
    data[0].timeSeries[0].areas[0];

    const weather =
    area.weathers[0];

    weatherElement.textContent =
    "📍東京 " + weather;

    if(
      weather.includes("雨")
    ){
      createRain();
    }

    if(
      weather.includes("雪")
    ){
      createSnow();
    }

  }

  catch(error){

    weatherElement.textContent =
    "天気取得失敗";

    console.error(error);

  }

}

getTokyoWeather();

const sky =
document.querySelector(".sky");

if(weather.includes("雨")){

  sky.style.background =
  `
  linear-gradient(
  135deg,
  #c8f0ff,
  #b6e7ff,
  #d7d8ff,
  #e5f6ff,
  #d8eaff
  )
  `;

}
if(weather.includes("曇")){

  sky.style.background =
  `
  linear-gradient(
  135deg,
  #e6e6ef,
  #dcdcff,
  #f4e9ff,
  #d8d8e8
  )
  `;

}
const hour =
new Date().getHours();
if(
 weather.includes("晴")
 &&
 hour >= 17
 &&
 hour <= 19
){

 sky.style.background =
 `
 linear-gradient(
 135deg,
 #ffcfb0,
 #ffc4d6,
 #f5c5ff,
 #d8c6ff,
 #ffd6a8
 )
 `;

}
if(
 weather.includes("晴")
 &&
 (hour < 17 || hour > 19)
){

 sky.style.background =
 `
 linear-gradient(
 135deg,
 #ffd8f5,
 #f2c6ff,
 #d9c4ff,
 #ffcce6,
 #e4d6ff
 )
 `;

}
if(
 weather.includes("晴")
 &&
 isWeekend
){

 sky.style.background =
 `
 linear-gradient(
 135deg,
 #ffd8f5,
 #f2c6ff,
 #d9c4ff,
 #c7fff2,
 #fff5c4,
 #ffcce6
 )
 `;

}
