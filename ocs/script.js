const infoFolder = document.querySelector(".infoFolder");
const info = document.querySelector(".info");

const mochaBtn = document.querySelector(".mochaBtn");
const mizukiBtn = document.querySelector(".mizukiBtn");
const karinBtn = document.querySelector(".karinBtn");
const shouyaBtn = document.querySelector(".shouyaBtn");

// i feel like this is probably the most inefficient way to do this but! shrug
const charaName = document.querySelector(".charaName");
const occupation = document.querySelector(".occupation");
const age = document.querySelector(".age");
const ethnicity = document.querySelector(".ethnicity");
const family = document.querySelector(".family");
const love = document.querySelector(".love");
const gender = document.querySelector(".gender");
const pronouns = document.querySelector(".pronouns");
const affiliation = document.querySelector(".affiliation");
const color = document.querySelector(".color");
const food = document.querySelector(".food");
const music = document.querySelector(".music");
const animal = document.querySelector(".animal");
const game = document.querySelector(".game");


mochaBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#c0bff4";
    info.style.visibility = "visible";

    charaName.innerHTML = "Mocha Amara";
    age.innerHTML = "17";
    occupation.innerHTML = "2nd year student at Shujin Academy";
    ethnicity.innerHTML = "Filipino";
    family.innerHTML = "Mizuki Amara (sister), Yuzuki Amara (cousin)";
    love.innerHTML = "Ryuji Sakamoto";
    gender.innerHTML = "cisgender heteromantic asexual";
    pronouns.innerHTML = "she/her";
    affiliation.innerHTML = "Phantom Thieves, Neo Trio";
    color.innerHTML = "light blue / #c0bff4";
    food.innerHTML = "pancit, penne pasta";
    music.innerHTML = "Glue Song - beabadoobee, Clairo";
    animal.innerHTML = "bunny";
    game.innerHTML = "Mario Kart";
});

mizukiBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#ffafbd";
    info.style.visibility = "visible";

    charaName.innerHTML = "Mizuki Amara";
    age.innerHTML = "15";
    occupation.innerHTML = "1st year Game Development track student at Kosei High School";
    ethnicity.innerHTML = "Filipino";
    family.innerHTML = "Mocha Amara (sister), Yuzuki Amara (cousin)"
    love.innerHTML = "n/a";
    gender.innerHTML = "demigirl biromantic asexual";
    pronouns.innerHTML = "she/they";
    affiliation.innerHTML = "Internet Best Friends gc";
    color.innerHTML = "light pink / #ffafbd";
    food.innerHTML = "pata tim, ravioli";
    music.innerHTML = "Super Shy - NewJeans";
    animal.innerHTML = "cat";
    game.innerHTML = "Stardew Valley";
});

karinBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#accdc9";
    info.style.visibility = "visible";

    charaName.innerHTML = "Karin Ishikawa";
    age.innerHTML = "18";
    occupation.innerHTML = "3rd year at Shujin Academy, 7-Eleven worker";
    ethnicity.innerHTML = "Japanese, Canadian";
    family.innerHTML = "n/a"
    love.innerHTML = "Aya Ito";
    gender.innerHTML = "genderfluid lesbian";
    pronouns.innerHTML = "they/xe/she/he";
    affiliation.innerHTML = "n/a";
    color.innerHTML = "dark green / #424f37";
    food.innerHTML = "Titan Turkey Subway© sandwich";
    music.innerHTML = "Disco - Surf Curse";
    animal.innerHTML = "giraffe";
    game.innerHTML = "Minecraft";
});

shouyaBtn.addEventListener("click", () => {
    infoFolder.style.backgroundColor = "#bdbdca";
    info.style.visibility = "visible";

    charaName.innerHTML = "Shouya Takeuchi";
    age.innerHTML = "15";
    occupation.innerHTML = "1st year New Media Design track student at Kosei High School";
    ethnicity.innerHTML = "Japanese";
    family.innerHTML = "Choa Takeuchi (sister)"
    love.innerHTML = "n/a";
    gender.innerHTML = "demiboy panromantic asexual";
    pronouns.innerHTML = "he/they/xe";
    affiliation.innerHTML = "Internet Best Friends gc";
    color.innerHTML = "black / #000000";
    food.innerHTML = "pizza bagel bites";
    music.innerHTML = "Feel Special - TWICE";
    animal.innerHTML = "gerbil";
    game.innerHTML = "Valorant";
});

// erm on second thought maybe ill just do this in css using that display:none to display:block thingy