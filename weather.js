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
