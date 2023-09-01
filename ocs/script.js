const infoFolder = document.querySelector(".infoFolder");
const info = document.querySelector(".info");

const mochaBtn = document.querySelector(".mochaBtn");
mochaBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#c0bff4";
    info.style.visibility = "visible";
});

const mizukiBtn = document.querySelector(".mizukiBtn");
mizukiBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#ffafbd";
});

const karinBtn = document.querySelector(".karinBtn");
karinBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#accdc9";
});

const shouyaBtn = document.querySelector(".shouyaBtn");
shouyaBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#bdbdca";
});

// erm on second thought maybe ill just do this in css using that display:none to display:block thingy