/* ==========================================
   和幸贈web
   compass.js
========================================== */

const arrow =
document.getElementById(
  "compassArrow"
);

const directionText =
document.getElementById(
  "direction"
);

const degreesText =
document.getElementById(
  "degrees"
);

const statusText =
document.getElementById(
  "compassStatus"
);

const permissionBtn =
document.getElementById(
  "compassPermissionBtn"
);

/* ==========================================
   方角変換
========================================== */

function getDirectionName(deg){

  const directions = [

    "北",
    "北東",
    "東",
    "南東",
    "南",
    "南西",
    "西",
    "北西"

  ];

  return directions[
    Math.round(
      deg / 45
    ) % 8
  ];

}

/* ==========================================
   コンパス更新
========================================== */

function updateCompass(deg){

  const angle =
  Math.round(deg);

  arrow.style.transform =
  `rotate(${angle}deg)`;

  directionText.textContent =
  getDirectionName(angle);

  degreesText.textContent =
  `${angle}°`;

}

/* ==========================================
   Android系
========================================== */

function handleOrientation(event){

  let heading;

  if(
    event.webkitCompassHeading
  ){

    heading =
    event.webkitCompassHeading;

  }else{

    heading =
    360 -
    event.alpha;

  }

  updateCompass(heading);

}

/* ==========================================
   開始
========================================== */

function startCompass(){

  if(
    window.DeviceOrientationEvent
  ){

    window.addEventListener(
      "deviceorientation",
      handleOrientation,
      true
    );

    statusText.textContent =
    "方位取得中";

  }

  else{

    statusText.textContent =
    "この端末では利用できません";

  }

}

/* ==========================================
   iPhone
========================================== */

permissionBtn
.addEventListener(
  "click",
  async ()=>{

    try{

      if(

        typeof DeviceOrientationEvent
        !== "undefined"

        &&

        typeof DeviceOrientationEvent
        .requestPermission
        === "function"

      ){

        const result =

        await DeviceOrientationEvent
        .requestPermission();

        if(
          result === "granted"
        ){

          startCompass();

          permissionBtn
          .style.display =
          "none";

        }

        else{

          statusText.textContent =
          "許可されませんでした";

        }

      }

      else{

        startCompass();

        permissionBtn
        .style.display =
        "none";

      }

    }

    catch(error){

      statusText.textContent =
      "エラーが発生しました";

      console.error(error);

    }

  }
);

/* ==========================================
   PC判定
========================================== */

const isMobile =

/Android|iPhone|iPad|iPod/i

.test(
  navigator.userAgent
);

if(!isMobile){

  statusText.textContent =
  "スマートフォンで利用できます";

}
