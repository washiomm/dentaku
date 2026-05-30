/* ========================================
   audio.js
======================================== */

const bgm =
document.getElementById(
  "bgm"
);

const clickSound =
document.getElementById(
  "clickSound"
);

/*
ブラウザ対策
最初のクリックでBGM開始
*/

document.addEventListener(
  "click",
  startMusic,
  {once:true}
);

function startMusic(){

  if(!bgm) return;

  bgm.volume = 0.25;

  bgm.play()
  .catch(()=>{});

}

/*
ボタン音
*/

document
.querySelectorAll(".btn")
.forEach(btn=>{

  btn.addEventListener(
    "click",
    ()=>{

      if(!clickSound) return;

      clickSound.currentTime = 0;

      clickSound.play()
      .catch(()=>{});

    }
  );

});
