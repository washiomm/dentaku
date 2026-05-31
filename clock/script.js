/* =========================
   和幸贈web 時計
========================= */

const digital =
document.getElementById("digital");

const dateEl =
document.getElementById("date");

const seasonInfo =
document.getElementById("seasonInfo");

const weatherInfo =
document.getElementById("weatherInfo");

/* =========================
   ランダムフォント
========================= */

const fonts = [

'"fot-tsukuardgothic-std",sans-serif',

'"hiragino sans","yu gothic",sans-serif',

'"yu mincho","hiragino mincho pro",serif'

];

document.body.style.fontFamily =
fonts[
Math.floor(
Math.random() * fonts.length
)
];

/* =========================
   季節判定
========================= */

function getSeason(){

  const month =
  new Date().getMonth()+1;

  if(month>=3 && month<=5){
    return "春";
  }

  if(month>=6 && month<=8){
    return "夏";
  }

  if(month>=9 && month<=11){
    return "秋";
  }

  return "冬";

}

seasonInfo.textContent =
"現在の季節：" +
getSeason();

/* =========================
   時計更新
========================= */

function updateClock(){

  const now =
  new Date();

  const week = [
    "日",
    "月",
    "火",
    "水",
    "木",
    "金",
    "土"
  ];

  const year =
  now.getFullYear();

  const month =
  now.getMonth()+1;

  const day =
  now.getDate();

  dateEl.textContent =
  `${year}年${month}月${day}日(${week[now.getDay()]})`;

  digital.textContent =
  now.toLocaleTimeString(
    "ja-JP",
    {
      hour12:false
    }
  );

  const sec =
  now.getSeconds();

  const min =
  now.getMinutes();

  const hour =
  now.getHours();

  document
  .getElementById("second")
  .style.transform =
  `translateX(-50%) rotate(${sec*6}deg)`;

  document
  .getElementById("minute")
  .style.transform =
  `translateX(-50%) rotate(${min*6}deg)`;

  document
  .getElementById("hour")
  .style.transform =
  `translateX(-50%) rotate(${hour*30 + min/2}deg)`;

  checkLuckyTime();

  midnightEffect();

}

setInterval(
  updateClock,
  1000
);

updateClock();

/* =========================
   ゾロ目判定
========================= */

function checkLuckyTime(){

  const now =
  new Date();

  const str =
  now
  .toLocaleTimeString(
    "ja-JP",
    {
      hour12:false
    }
  )
  .replace(/:/g,"");

  let count = 1;
  let max = 1;

  for(
    let i=1;
    i<str.length;
    i++
  ){

    if(
      str[i] === str[i-1]
    ){

      count++;

      if(count > max){

        max = count;

      }

    }else{

      count = 1;

    }

  }

  if(max >= 3){

    document.body
    .classList.add(
      "lucky"
    );

    setTimeout(()=>{

      document.body
      .classList.remove(
        "lucky"
      );

    },1000);

  }

}

/* =========================
   季節エフェクト
========================= */

function createSeasonParticle(){

  const particle =
  document.createElement("div");

  particle.className =
  "season-particle";

  const season =
  getSeason();

  let color =
  "#ffffff";

  if(season==="春"){

    color="#ffb6d9";

  }

  if(season==="夏"){

    color="#8fe7ff";

  }

  if(season==="秋"){

    color="#ffd95f";

  }

  if(season==="冬"){

    color="#ffffff";

  }

  particle.style.background =
  color;

  particle.style.left =
  Math.random()*100+"vw";

  particle.style.top =
  Math.random()*100+"vh";

  particle.style.opacity =
  Math.random();

  document.body.appendChild(
    particle
  );

  setTimeout(()=>{

    particle.remove();

  },8000);

}

setInterval(
  createSeasonParticle,
  500
);

/* =========================
   雨エフェクト
========================= */

function startRain(){

  setInterval(()=>{

    const drop =
    document.createElement("div");

    drop.className =
    "rain";

    drop.style.left =
    Math.random()*100+"vw";

    document.body.appendChild(
      drop
    );

    setTimeout(()=>{

      drop.remove();

    },3000);

  },120);

}

/* =========================
   東京の天気取得
========================= */

async function getWeather(){

  try{

    const res =
    await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.76&current=weather_code"
    );

    const data =
    await res.json();

    const code =
    data.current.weather_code;

    let text =
    "天気情報";

    if(code===0){

      text="☀️ 快晴";

    }else if(code<4){

      text="🌤 晴れ";

    }else if(code<50){

      text="☁️ 曇り";

    }else{

      text="🌧 雨";

      startRain();

    }

    weatherInfo.textContent =
    "東京：" + text;

  }catch{

    weatherInfo.textContent =
    "天気取得失敗";

  }

}

getWeather();

/* =========================
   日付変更演出
========================= */

function midnightEffect(){

  const now =
  new Date();

  if(

    now.getHours()===0 &&
    now.getMinutes()===0 &&
    now.getSeconds()<10

  ){

    for(
      let i=0;
      i<5;
      i++
    ){

      const p =
      document.createElement("div");

      p.className =
      "midnight";

      p.style.top =
      Math.random()*100+"vh";

      document.body.appendChild(
        p
      );

      setTimeout(()=>{

        p.remove();

      },5000);

    }

  }

}
