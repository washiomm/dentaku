/* ==========================================
   和幸贈web
   zodiac.js
========================================== */

const zodiacSymbol =
document.getElementById(
  "zodiacSymbol"
);

const zodiacName =
document.getElementById(
  "zodiacName"
);

const zodiacDescription =
document.getElementById(
  "zodiacDescription"
);

const signs = [

  {
    symbol:"♈",
    name:"おひつじ座",
    text:"新しい挑戦に向いている日"
  },

  {
    symbol:"♉",
    name:"おうし座",
    text:"落ち着いて行動すると良い日"
  },

  {
    symbol:"♊",
    name:"ふたご座",
    text:"コミュニケーションが鍵"
  },

  {
    symbol:"♋",
    name:"かに座",
    text:"優しさが運を引き寄せます"
  },

  {
    symbol:"♌",
    name:"しし座",
    text:"自信を持って進みましょう"
  },

  {
    symbol:"♍",
    name:"おとめ座",
    text:"丁寧な作業が成功の鍵"
  },

  {
    symbol:"♎",
    name:"てんびん座",
    text:"バランスを意識しましょう"
  },

  {
    symbol:"♏",
    name:"さそり座",
    text:"集中力が高まります"
  },

  {
    symbol:"♐",
    name:"いて座",
    text:"行動力が運を呼びます"
  },

  {
    symbol:"♑",
    name:"やぎ座",
    text:"努力が結果に繋がります"
  },

  {
    symbol:"♒",
    name:"みずがめ座",
    text:"発想力が輝く日です"
  },

  {
    symbol:"♓",
    name:"うお座",
    text:"感性を大切にしましょう"
  }

];

function updateZodiac(){

  const day =
  new Date().getDate();

  const zodiac =
  signs[
    day % signs.length
  ];

  zodiacSymbol.textContent =
  zodiac.symbol;

  zodiacName.textContent =
  zodiac.name;

  zodiacDescription.textContent =
  zodiac.text;

}

updateZodiac();
