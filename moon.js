/* ========================================
   moon.js
======================================== */

const moonPhase =
document.getElementById("moonPhase");

const moonGlow =
document.getElementById("moonGlow");

function updateMoonPhase(){

  const today = new Date();

  const knownNewMoon =
  new Date("2025-01-29");

  const diffDays =
  (today - knownNewMoon) /
  86400000;

  const moonAge =
  ((diffDays % 29.53) + 29.53) % 29.53;

  let emoji = "🌑";

  if(moonAge < 1){
    emoji = "🌑";
  }
  else if(moonAge < 7){
    emoji = "🌒";
  }
  else if(moonAge < 8){
    emoji = "🌓";
  }
  else if(moonAge < 14){
    emoji = "🌔";
  }
  else if(moonAge < 16){

    emoji = "🌕";

    moonGlow.classList
      .add("fullmoon");

  }
  else if(moonAge < 22){
    emoji = "🌖";
  }
  else{
    emoji = "🌘";
  }

  moonPhase.textContent =
  emoji;

}

updateMoonPhase();
