const mochaBtn = document.querySelector(".mochaBtn");
const mizukiBtn = document.querySelector(".mizukiBtn");
const karinBtn = document.querySelector(".karinBtn");
const shouyaBtn = document.querySelector(".shouyaBtn");

const infoFolder = document.querySelector(".infoFolder");


/* how the button should work in theory?????
    when you click on a charaTab button,
    it changes the background color of infoFolder to match the color of that button
    and then it changes all the info inside that div
    including h2, paragraphs, and images maybe idk
    but! how does this work!! idk!!!!!!!
*/

mochaBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#c0bff4";
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