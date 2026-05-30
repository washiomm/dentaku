/* ==========================================
   和幸贈web
   script.js
========================================== */

/* ==========================================
   タブ移動
========================================== */

const dashboard =
document.getElementById(
  "dashboard"
);

const tabs =
document.querySelectorAll(
  ".tab-btn"
);

const pages =
document.querySelectorAll(
  ".page"
);

tabs.forEach(tab=>{

  tab.addEventListener(
    "click",
    ()=>{

      const index =
      Number(
        tab.dataset.page
      );

      dashboard.scrollTo({

        left:
        window.innerWidth
        * index,

        behavior:"smooth"

      });

    }
  );

});

/* ==========================================
   タブ追従
========================================== */

dashboard.addEventListener(
  "scroll",
  ()=>{

    const index =
    Math.round(
      dashboard.scrollLeft
      /
      window.innerWidth
    );

    tabs.forEach(
      tab=>
      tab.classList.remove(
        "active"
      )
    );

    if(tabs[index]){

      tabs[index]
      .classList.add(
        "active"
      );

    }

  }
);

tabs[0].classList.add(
  "active"
);

/* ==========================================
   電卓
========================================== */

const display =
document.getElementById(
  "display"
);

let expression = "";

document
.querySelectorAll(".btn")
.forEach(button=>{

  button.addEventListener(
    "click",
    ()=>{

      const value =
      button.textContent;

      if(value==="C"){

        expression="";

        display.textContent=
        "0";

        return;

      }

      if(value==="="){

        calculate();

        return;

      }

      addValue(value);

    }
  );

});

function addValue(value){

  let converted =
  value;

  if(value==="×"){
    converted="*";
  }

  if(value==="÷"){
    converted="/";
  }

  if(value==="−"){
    converted="-";
  }

  expression += converted;

  display.textContent =
  expression;

}

function calculate(){

  try{

    const result =
    eval(expression);

    expression =
    String(result);

    display.textContent =
    expression;

  }

  catch{

    display.textContent =
    "エラー";

    expression="";

  }

}

/* ==========================================
   キーボード入力
========================================== */

document.addEventListener(
  "keydown",
  event=>{

    const key =
    event.key;

    if(
      "0123456789+-*/()."
      .includes(key)
    ){

      expression += key;

      display.textContent =
      expression;

    }

    if(
      key==="Enter"
    ){

      calculate();

    }

    if(
      key==="Escape"
    ){

      expression="";

      display.textContent=
      "0";

    }

  }
);

/* ==========================================
   デジタル時計
========================================== */

const digitalClock =
document.getElementById(
  "digitalClock"
);

function updateClock(){

  const now =
  new Date();

  const h =
  String(
    now.getHours()
  ).padStart(2,"0");

  const m =
  String(
    now.getMinutes()
  ).padStart(2,"0");

  const s =
  String(
    now.getSeconds()
  ).padStart(2,"0");

  digitalClock.textContent =
  `${h}:${m}:${s}`;

}

updateClock();

setInterval(
  updateClock,
  1000
);

/* ==========================================
   アナログ時計
========================================== */

const canvas =
document.getElementById(
  "analogClock"
);

const ctx =
canvas.getContext("2d");

function drawClock(){

  const now =
  new Date();

  const w =
  canvas.width;

  const h =
  canvas.height;

  const r =
  w/2;

  ctx.clearRect(
    0,
    0,
    w,
    h
  );

  ctx.save();

  ctx.translate(
    r,
    r
  );

  ctx.beginPath();

  ctx.arc(
    0,
    0,
    r-10,
    0,
    Math.PI*2
  );

  ctx.strokeStyle=
  "white";

  ctx.lineWidth=4;

  ctx.stroke();

  for(
    let i=0;
    i<12;
    i++
  ){

    const angle =
    i*Math.PI/6;

    ctx.beginPath();

    ctx.moveTo(
      Math.cos(angle)*(r-30),
      Math.sin(angle)*(r-30)
    );

    ctx.lineTo(
      Math.cos(angle)*(r-15),
      Math.sin(angle)*(r-15)
    );

    ctx.stroke();

  }

  const sec =
  now.getSeconds();

  const min =
  now.getMinutes();

  const hour =
  now.getHours()%12;

  drawHand(
    (hour+min/60)
    *Math.PI/6,
    r*0.5,
    6
  );

  drawHand(
    (min+sec/60)
    *Math.PI/30,
    r*0.7,
    4
  );

  drawHand(
    sec*Math.PI/30,
    r*0.8,
    2
  );

  ctx.restore();

}

function drawHand(
  angle,
  length,
  width
){

  ctx.beginPath();

  ctx.lineWidth=
  width;

  ctx.strokeStyle=
  "white";

  ctx.moveTo(0,0);

  ctx.lineTo(

    Math.cos(
      angle-Math.PI/2
    )*length,

    Math.sin(
      angle-Math.PI/2
    )*length

  );

  ctx.stroke();

}

setInterval(
  drawClock,
  1000
);

drawClock();

/* ==========================================
   タイマー
========================================== */

let timerInterval;

let timerSeconds =
0;

const timerDisplay =
document.getElementById(
  "timerDisplay"
);

document
.getElementById(
  "startTimer"
)
.addEventListener(
  "click",
  ()=>{

    clearInterval(
      timerInterval
    );

    timerInterval =
    setInterval(()=>{

      timerSeconds++;

      updateTimer();

    },1000);

  }
);

document
.getElementById(
  "stopTimer"
)
.addEventListener(
  "click",
  ()=>{

    clearInterval(
      timerInterval
    );

  }
);

document
.getElementById(
  "resetTimer"
)
.addEventListener(
  "click",
  ()=>{

    clearInterval(
      timerInterval
    );

    timerSeconds=0;

    updateTimer();

  }
);

function updateTimer(){

  const min =
  Math.floor(
    timerSeconds/60
  );

  const sec =
  timerSeconds%60;

  timerDisplay.textContent=

  `${String(min)
  .padStart(2,"0")}:${
  String(sec)
  .padStart(2,"0")}`;

}

updateTimer();

/* ==========================================
   ストップウォッチ
========================================== */

let swInterval;

let swTime = 0;

const swDisplay =
document.getElementById(
  "stopwatchDisplay"
);

/* 自動開始 */

swInterval =
setInterval(()=>{

  swTime++;

  const min =
  Math.floor(
    swTime/6000
  );

  const sec =
  Math.floor(
    (swTime%6000)/100
  );

  const cs =
  swTime%100;

  swDisplay.textContent =

  `${String(min)
  .padStart(2,"0")}:${
  String(sec)
  .padStart(2,"0")}.${String(cs)
  .padStart(2,"0")}`;

},10);

/* ==========================================
   メモ帳
========================================== */

const memo =
document.getElementById(
  "memo"
);

if(memo){

  memo.value =

  localStorage.getItem(
    "wakouMemo"
  ) || "";

  memo.addEventListener(
    "input",
    ()=>{

      localStorage.setItem(

        "wakouMemo",

        memo.value

      );

    }
  );

}
