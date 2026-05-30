/* ========================================
   particles.js
======================================== */

const particleContainer =
document.getElementById(
  "particles"
);

function createBackgroundParticle(){

  const p =
  document.createElement("div");

  p.className =
  "bg-particle";

  p.style.left =
  Math.random()*100+"vw";

  p.style.top =
  "110vh";

  p.style.opacity =
  Math.random();

  p.style.animationDuration =
  10+Math.random()*10+"s";

  particleContainer.appendChild(
    p
  );

  setTimeout(()=>{
    p.remove();
  },20000);

}

setInterval(
  createBackgroundParticle,
  300
);
