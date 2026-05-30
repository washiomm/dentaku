/* ==========================================
   和幸贈web
   moon.js
========================================== */

const moonEmoji =
document.getElementById(
  "moonEmoji"
);

const moonName =
document.getElementById(
  "moonName"
);

const moonAge =
document.getElementById(
  "moonAge"
);

const moonGlow =
document.getElementById(
  "moonGlow"
);

/* ==========================================
   月齢計算
========================================== */

function calculateMoonAge(){

  const today =
  new Date();

  /*
    基準新月
    2025/01/29
  */

  const knownNewMoon =
  new Date(
    "2025-01-29T00:00:00"
  );

  const diffDays =
  (
    today -
    knownNewMoon
  ) /
  86400000;

  const age =
  (
    (diffDays % 29.530588)
    +
    29.530588
  )
  %
  29.530588;

  return age;

}

/* ==========================================
   月情報更新
========================================== */

function updateMoon(){

  const age =
  calculateMoonAge();

  let emoji = "🌑";

  let name = "新月";

  /* 新月 */

  if(age < 1.8){

    emoji = "🌑";
    name = "新月";

  }

  /* 三日月 */

  else if(age < 6){

    emoji = "🌒";
    name = "三日月";

  }

  /* 上弦 */

  else if(age < 9){

    emoji = "🌓";
    name = "上弦の月";

  }

  /* 十三夜 */

  else if(age < 13){

    emoji = "🌔";
    name = "十三夜";

  }

  /* 満月 */

  else if(age < 16){

    emoji = "🌕";
    name = "満月";

  }

  /* 十六夜 */

  else if(age < 20){

    emoji = "🌖";
    name = "十六夜";

  }

  /* 下弦 */

  else if(age < 24){

    emoji = "🌗";
    name = "下弦の月";

  }

  /* 有明月 */

  else{

    emoji = "🌘";
    name = "有明月";

  }

  moonEmoji.textContent =
  emoji;

  moonName.textContent =
  name;

  moonAge.textContent =
  `月齢 ${age.toFixed(1)}`;

  updateMoonEffect(age);

}

updateMoon();

/* ==========================================
   満月エフェクト
========================================== */

function updateMoonEffect(age){

  if(!moonGlow) return;

  moonGlow.style.position =
  "fixed";

  moonGlow.style.inset =
  "0";

  moonGlow.style.pointerEvents =
  "none";

  moonGlow.style.zIndex =
  "-18";

  moonGlow.style.transition =
  "all 1s ease";

  /* 満月 */

  if(age >= 13 && age <= 16){

    moonGlow.style.background =

    `
    radial-gradient(
      circle,
      rgba(255,220,120,.35),
      transparent 60%
    )
    `;

  }

  /* 新月 */

  else if(age <= 1.8){

    moonGlow.style.background =

    `
    radial-gradient(
      circle,
      rgba(180,120,255,.25),
      transparent 60%
    )
    `;

  }

  else{

    moonGlow.style.background =
    "none";

  }

}

/* ==========================================
   日付情報
========================================== */

function getMoonMessage(age){

  if(age < 1.8){

    return "新しいことを始めるのに適した時期です";

  }

  if(age < 9){

    return "少しずつ満ちていく月です";

  }

  if(age < 16){

    return "月が最も美しく輝く時期です";

  }

  if(age < 24){

    return "落ち着いて振り返る時期です";

  }

  return "次の新月へ向かっています";

}

/* ==========================================
   メッセージ追加
========================================== */

const moonMessage =
document.createElement(
  "div"
);

moonMessage.id =
"moonMessage";

moonMessage.style.marginTop =
"20px";

moonMessage.style.textAlign =
"center";

moonMessage.style.fontSize =
"1.1rem";

const moonCard =
document.querySelector(
  ".moon-page .glass-card"
);

if(moonCard){

  moonCard.appendChild(
    moonMessage
  );

  moonMessage.textContent =
  getMoonMessage(
    calculateMoonAge()
  );

}
