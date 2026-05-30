/* ========================================
   Dream Calculator Ultimate
   script.js
======================================== */

/* -------------------------
   要素取得
------------------------- */

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const quote = document.getElementById("quote");
const assistant = document.getElementById("assistant");
const fireworks = document.getElementById("fireworks");

let expression = "";

/* -------------------------
   電卓
------------------------- */

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const value = button.textContent;

    playClickEffect(button);

    if (value === "C") {

      expression = "";
      display.textContent = "0";

      return;
    }

    if (value === "=") {

      calculate();

      return;
    }

    addValue(value);

  });

});

/* -------------------------
   入力
------------------------- */

function addValue(value){

  let converted = value;

  if(value === "×") converted = "*";
  if(value === "÷") converted = "/";
  if(value === "−") converted = "-";

  expression += converted;

  display.textContent = expression;

  createSparkles();

}

/* -------------------------
   計算
------------------------- */

function calculate(){

  try{

    const result = eval(expression);

    expression = result.toString();

    display.textContent = expression;

    display.classList.add("result");

    createSparkles();

    checkSecretModes(expression);

    if(Number(result) >= 1000){
      launchFireworks();
    }

  }

  catch(error){

    display.textContent = "Error";

    expression = "";

  }

}

/* -------------------------
   ボタン演出
------------------------- */

function playClickEffect(button){

  button.animate(
    [
      {transform:"scale(1)"},
      {transform:"scale(0.92)"},
      {transform:"scale(1)"}
    ],
    {
      duration:180
    }
  );

}

/* -------------------------
   キラキラ
------------------------- */

function createSparkles(){

  const calc = document.querySelector(".calculator");

  for(let i=0;i<10;i++){

    const sparkle =
      document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
      Math.random()*100 + "%";

    sparkle.style.top =
      Math.random()*100 + "%";

    calc.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    },1000);

  }

}

/* -------------------------
   花火
------------------------- */

function launchFireworks(){

  for(let i=0;i<20;i++){

    const firework =
      document.createElement("div");

    firework.className =
      "firework";

    firework.style.left =
      Math.random()*100 + "vw";

    firework.style.top =
      Math.random()*100 + "vh";

    fireworks.appendChild(firework);

    setTimeout(()=>{
      firework.remove();
    },1000);

  }

}

/* -------------------------
   時計
------------------------- */

function updateClock(){

  const now = new Date();

  const h =
    String(now.getHours()).padStart(2,"0");

  const m =
    String(now.getMinutes()).padStart(2,"0");

  const s =
    String(now.getSeconds()).padStart(2,"0");

  const clock =
    document.getElementById("clock");

  if(clock){

    clock.textContent =
      `${h}:${m}:${s}`;

  }

}

updateClock();

setInterval(
  updateClock,
  1000
);

/* -------------------------
   名言
------------------------- */

const quotes = [

  "Dream Big ✨",

  "Believe In Magic 🌙",

  "The Sky Is Not The Limit ☁️",

  "Make Today Beautiful 🌸",

  "Follow The Stars ⭐",

  "Keep Shining 💖",

  "Everything Starts Here 🌈",

  "Your Future Is Bright ☀️"

];

function changeQuote(){

  quote.textContent =
    quotes[
      Math.floor(
        Math.random()*quotes.length
      )
    ];

}

changeQuote();

setInterval(
  changeQuote,
  10000
);

/* -------------------------
   AIメッセージ
------------------------- */

function updateAssistant(){

  const hour =
    new Date().getHours();

  if(hour >= 5 && hour < 11){

    assistant.textContent =
      "☀️ おはようございます";

  }

  else if(hour < 17){

    assistant.textContent =
      "🌸 素敵な一日を";

  }

  else if(hour < 20){

    assistant.textContent =
      "🌇 夕暮れの時間です";

  }

  else{

    assistant.textContent =
      "🌙 夜空が綺麗ですね";

  }

}

updateAssistant();

/* -------------------------
   星空生成
------------------------- */

function createStars(){

  const stars =
    document.getElementById("stars");

  if(!stars) return;

  for(let i=0;i<150;i++){

    const star =
      document.createElement("div");

    star.className = "star";

    star.style.left =
      Math.random()*100 + "vw";

    star.style.top =
      Math.random()*100 + "vh";

    star.style.animationDelay =
      Math.random()*4 + "s";

    stars.appendChild(star);

  }

}

createStars();

/* -------------------------
   流れ星
------------------------- */

function createMeteor(){

  const meteor =
    document.createElement("div");

  meteor.className =
    "meteor";

  document.body.appendChild(
    meteor
  );

  setTimeout(()=>{
    meteor.remove();
  },2000);

}

setInterval(()=>{

  createMeteor();

},8000);

/* -------------------------
   隠しコマンド
------------------------- */

function checkSecretModes(result){

  if(result === "777"){

    assistant.textContent =
      "🌈 Rainbow Mode Activated!";

    document.body.style.filter =
      "hue-rotate(90deg)";

  }

  if(result === "9999"){

    assistant.textContent =
      "☄️ Meteor Shower Activated!";

    for(let i=0;i<30;i++){

      setTimeout(()=>{

        createMeteor();

      },i*150);

    }

  }

  if(result === "314159"){

    assistant.textContent =
      "🚀 Space Mode Activated!";

    document.querySelector(".sky")
      .style.background =
      "linear-gradient(180deg,#000000,#091540,#28145c)";

  }

}

/* -------------------------
   キーボード対応
------------------------- */

document.addEventListener(
  "keydown",
  (event)=>{

    const key = event.key;

    if(
      "0123456789+-*/()."
      .includes(key)
    ){

      expression += key;

      display.textContent =
        expression;

    }

    if(key === "Enter"){

      calculate();

    }

    if(key === "Escape"){

      expression = "";

      display.textContent = "0";

    }

  }
);

/* -------------------------
   起動メッセージ
------------------------- */

setTimeout(()=>{

  assistant.textContent =
    "✨ Dream Calculator Ready";

},1500);
