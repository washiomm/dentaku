/* ==========================================
   和幸贈web
   weather.js
========================================== */

const todayWeather =
document.getElementById(
  "todayWeather"
);

const forecast =
document.getElementById(
  "forecast"
);

const sky =
document.querySelector(
  ".sky"
);

/* ==========================================
   天気取得
========================================== */

async function getWeather(){

  try{

    const response =
    await fetch(
      "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"
    );

    const data =
    await response.json();

    const area =
    data[0]
    .timeSeries[0]
    .areas[0];

    const weathers =
    area.weathers;

    const today =
    weathers[0];

    const tomorrow =
    weathers[1];

    const dayAfter =
    weathers[2];

    todayWeather.innerHTML =
    `
    <div class="weather-main">
      📍東京
      <br>
      ${today}
    </div>
    `;

    forecast.innerHTML =
    `
    <div>
      明日：${tomorrow}
    </div>

    <div>
      明後日：${dayAfter}
    </div>
    `;

    updateWeatherTheme(today);

  }

  catch(error){

    todayWeather.innerHTML =
    `
    天気情報を
    取得できませんでした
    `;

    console.error(error);

  }

}

getWeather();

/* ==========================================
   背景変更
========================================== */

function updateWeatherTheme(weather){

  const now =
  new Date();

  const hour =
  now.getHours();

  const day =
  now.getDay();

  const isWeekend =
  day === 0 || day === 6;

  /* 雨 */

  if(
    weather.includes("雨")
  ){

    sky.style.background =
    `
    linear-gradient(
      135deg,
      #c7eaff,
      #d8e8ff,
      #bce5ff,
      #d8f4ff,
      #d9ddff
    )
    `;

    createRain();

    return;

  }

  /* 雪 */

  if(
    weather.includes("雪")
  ){

    sky.style.background =
    `
    linear-gradient(
      135deg,
      #f8fbff,
      #eaf4ff,
      #edf0ff,
      #ffffff,
      #dfe8ff
    )
    `;

    createSnow();

    return;

  }

  /* 曇り */

  if(
    weather.includes("曇")
  ){

    sky.style.background =
    `
    linear-gradient(
      135deg,
      #e7e7f1,
      #dddfff,
      #f1ebff,
      #e2e2ee,
      #d8d8e8
    )
    `;

    return;

  }

  /* 晴れ＋夕方 */

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
      #ffcfab,
      #ffc5d7,
      #f4c3ff,
      #d8c7ff,
      #ffd9a7
    )
    `;

    return;

  }

  /* 晴れ＋土日 */

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
      #fff5c6,
      #c8fff0,
      #d9c7ff,
      #ffcde8
    )
    `;

    return;

  }

  /* 通常 */

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

/* ==========================================
   雨
========================================== */

function createRain(){

  setInterval(()=>{

    const rain =
    document.createElement("div");

    rain.className =
    "rain";

    rain.style.left =
    Math.random()*100+"vw";

    rain.style.animationDuration =
    0.5+
    Math.random()*0.8
    +"s";

    document.body.appendChild(
      rain
    );

    setTimeout(()=>{

      rain.remove();

    },2000);

  },40);

}

/* ==========================================
   雪
========================================== */

function createSnow(){

  setInterval(()=>{

    const snow =
    document.createElement("div");

    snow.className =
    "snow";

    snow.style.left =
    Math.random()*100+"vw";

    snow.style.animationDuration =
    4+
    Math.random()*4
    +"s";

    document.body.appendChild(
      snow
    );

    setTimeout(()=>{

      snow.remove();

    },9000);

  },180);

}
