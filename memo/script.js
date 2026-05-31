const title =
document.getElementById("title");

const memo =
document.getElementById("memo");

const count =
document.getElementById("count");

const saved =
document.getElementById("saved");

function save(){

localStorage.setItem(
"memo-title",
title.value
);

localStorage.setItem(
"memo-body",
memo.value
);

saved.textContent =
"保存済み " +
new Date().toLocaleTimeString();

count.textContent =
memo.value.length + "文字";

}

title.value =
localStorage.getItem(
"memo-title"
) || "";

memo.value =
localStorage.getItem(
"memo-body"
) || "";

count.textContent =
memo.value.length + "文字";

title.addEventListener(
"input",
save
);

memo.addEventListener(
"input",
save
);

document
.getElementById(
"clearBtn"
)
.onclick = () => {

if(
confirm(
"全削除しますか？"
)
){

localStorage.removeItem(
"memo-title"
);

localStorage.removeItem(
"memo-body"
);

title.value="";
memo.value="";

save();

}

};

document
.getElementById(
"themeBtn"
)
.onclick = () => {

document.body
.classList.toggle(
"dark"
);

};
