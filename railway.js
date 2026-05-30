/* ==========================================
   和幸贈web
   railway.js
========================================== */

const railwayInfo =
document.getElementById(
  "railwayInfo"
);

/*
対象路線
*/

const lines = [

  "山手線",
  "中央線",
  "総武線",
  "東西線",
  "銀座線",
  "丸ノ内線",
  "半蔵門線"

];

/* ==========================================
   運行情報取得
========================================== */

async function updateRailway(){

  try{

    const response =
    await fetch(
      "https://rti-giken.jp/fhc/api/train_tetsudo/delay.json"
    );

    const data =
    await response.json();

    const delays =

    data.filter(item=>

      lines.some(line=>

        item.name &&
        item.name.includes(line)

      )

    );

    if(
      delays.length === 0
    ){

      railwayInfo.innerHTML =

      `
      現在、
      対象路線の遅延情報は
      ありません
      `;

      return;

    }

    railwayInfo.innerHTML =

    delays.map(item=>

      `
      <div>
      🚨 ${item.name}
      </div>
      `

    ).join("");

  }

  catch(error){

    railwayInfo.innerHTML =

    `
    運行情報を
    取得できません
    `;

    console.error(error);

  }

}

updateRailway();

setInterval(
  updateRailway,
  300000
);
