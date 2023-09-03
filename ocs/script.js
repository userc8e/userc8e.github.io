const infoFolder = document.querySelector(".infoFolder");
const info = document.querySelector(".info");

const mochaBtn = document.querySelector(".mochaBtn");
const mizukiBtn = document.querySelector(".mizukiBtn");
const karinBtn = document.querySelector(".karinBtn");
const shouyaBtn = document.querySelector(".shouyaBtn");

alert("this page is a work in progress !!");

mochaBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#c0bff4";
    info.style.visibility = "visible";
});

mizukiBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#ffafbd";
});

karinBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#accdc9";
});

shouyaBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#bdbdca";
});

// erm on second thought maybe ill just do this in css using that display:none to display:block thingy