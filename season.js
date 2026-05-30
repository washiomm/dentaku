/* ==========================================
   和幸贈web
   season.js
========================================== */

const seasonInfo =
document.getElementById(
  "seasonInfo"
);

function updateSeason(){

  const now =
  new Date();

  const month =
  now.getMonth() + 1;

  let title = "";
  let message = "";

  if(month === 1){

    title = "🎍 お正月";
    message =
    "新しい一年の始まりです";

  }

  else if(month === 2){

    title = "👹 節分";
    message =
    "福を呼び込みましょう";

  }

  else if(month === 3){

    title = "🌸 春";
    message =
    "桜の季節が近づいています";

  }

  else if(month === 4){

    title = "🌸 桜";
    message =
    "春を楽しみましょう";

  }

  else if(month === 5){

    title = "🎏 初夏";
    message =
    "爽やかな季節です";

  }

  else if(month === 6){

    title = "☔ 梅雨";
    message =
    "紫陽花が美しい時期です";

  }

  else if(month === 7){

    title = "🎋 七夕";
    message =
    "星空を見上げてみましょう";

  }

  else if(month === 8){

    title = "🌻 夏";
    message =
    "夏空が広がっています";

  }

  else if(month === 9){

    title = "🌕 お月見";
    message =
    "月が綺麗な季節です";

  }

  else if(month === 10){

    title = "🍁 秋";
    message =
    "紅葉が始まります";

  }

  else if(month === 11){

    title = "🍂 紅葉";
    message =
    "秋の景色を楽しみましょう";

  }

  else{

    title = "🎄 冬";
    message =
    "イルミネーションの季節です";

  }

  seasonInfo.innerHTML =

  `
  <h3>${title}</h3>
  <br>
  <p>${message}</p>
  `;

}

updateSeason();
