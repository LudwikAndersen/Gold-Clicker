const scores = document.querySelector(".score");
const money = document.querySelectorAll(".money");
const coin = document.querySelector("#coin");
const banknote = document.querySelector("#banknote");
const goldBar = document.querySelector("#goldBar");
const wallet = document.querySelector(".wallet");
const piggyBank = document.querySelector(".piggyBank");
const bitCoin = document.querySelector("#bitCoin");
const achievement = document.querySelector("#achievement");
const achievement2 = document.querySelector("#achievement2");
const achievement3 = document.querySelector("#achievement3");
const achievement4 = document.querySelector("#achievement4");
const achievement5 = document.querySelector("#achievement5");
const achievement6 = document.querySelector("#achievement6");
const achievement7 = document.querySelector("#achievement7");
const achievement8 = document.querySelector("#achievement8");
const achievement9 = document.querySelector("#achievement9");
const achievement10 = document.querySelector("#achievement10");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const button10 = document.querySelector("#button10");
const infoGoldGain = document.querySelector(".infoGoldGain");
const board = document.querySelector(".board");
const achievementTable = document.querySelector(".achievementTable");
const clicker = document.querySelector("#clicker");
const clickerShadow = document.querySelector("#clickerShadow");
const frame1 = document.querySelector("#frame1");
const frame2 = document.querySelector("#frame2");
const frame3 = document.querySelector("#frame3");
const lvlUp1 = document.querySelector("#lvlUp1");
const lvlUp2 = document.querySelector("#lvlUp2");
const lvlUp3 = document.querySelector("#lvlUp3");
const lvlUp4 = document.querySelector("#lvlUp4");
const doubleLvlUp1 = document.querySelector("#doubleLvlUp1");
const doubleLvlUp2 = document.querySelector("#doubleLvlUp2");
const doubleLvlUp3 = document.querySelector("#doubleLvlUp3");
const doubleLvlUp4 = document.querySelector("#doubleLvlUp4");
const lvl1 = document.querySelector("#lvl1"); // napisy "lvl 1 etc."
const lvl2 = document.querySelector("#lvl2");
const lvl3 = document.querySelector("#lvl3");
const lvl4 = document.querySelector("#lvl4");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const text4 = document.querySelector("#text4");
const lvlText1 = document.querySelector("#lvltext1");
const lvlText2 = document.querySelector("#lvltext2");
const lvlText3 = document.querySelector("#lvltext3");
const lvlText4 = document.querySelector("#lvltext4");
const lvl10Text1 = document.querySelector("#lvl10text1");
const lvl10Text2 = document.querySelector("#lvl10text2");
const lvl10Text3 = document.querySelector("#lvl10text3");
const lvl10Text4 = document.querySelector("#lvl10text4");
const skill1 = document.querySelector("#skill1");
const skill2 = document.querySelector("#skill2");
const skill3 = document.querySelector("#skill3");
const cooldown1 = document.querySelector(".cooldown1");
const cooldown2 = document.querySelector(".cooldown2");
const cooldown3 = document.querySelector(".cooldown3");
const tip1 = document.querySelector("#tip1");
const tip2 = document.querySelector("#tip2");
const tip3 = document.querySelector("#tip3");
let mid = document.querySelector(".mid");

let lvlTexts = [lvlText1, lvlText2, lvlText3, lvlText4];
let lvl10Texts = [lvl10Text1, lvl10Text2, lvl10Text3, lvl10Text4];

let text = [text1, text2, text3, text4];

let lvls = [lvl1, lvl2, lvl3, lvl4];

coin.name = "Coin";
banknote.name = "Banknote";
goldBar.name = "Gold Bar";
bitCoin.name = "Bitcoin";

names = [coin.name, banknote.name, goldBar.name, bitCoin.name];

lvl1.cost = 10;
lvl2.cost = 20;
lvl3.cost = 30;
lvl4.cost = 40;

let level1 = 1;
let level2 = 1;
let level3 = 1;
let level4 = 1;

let levels = [level1, level2, level3, level4];
//let levels = {coin: 1, banknote: 1, goldBar: 1, bitCoin: 1};
let boardIncome = 0
let score = 0;
let opacity = 1;

let coins = [coin, banknote, goldBar, bitCoin];
let bonus = [wallet, piggyBank];
let achievements = [achievement, achievement2, achievement3, achievement4, achievement5, achievement6, achievement7, achievement8, achievement9, achievement10];
let buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9, button10];

let lvlUps = [lvlUp1, lvlUp2, lvlUp3, lvlUp4];
let lvl10Ups = [doubleLvlUp1, doubleLvlUp2, doubleLvlUp3, doubleLvlUp4];
let lvlAll = [lvlUp1, lvlUp2, lvlUp3, lvlUp4, doubleLvlUp1, doubleLvlUp2, doubleLvlUp3, doubleLvlUp4];
let dump = [coin, banknote, goldBar, bitCoin, lvlUp1, lvlUp2, lvlUp3, lvlUp4, doubleLvlUp1, doubleLvlUp2, doubleLvlUp3, doubleLvlUp4];

wallet.grey = "img/walletGrey.png";
piggyBank.grey = "img/piggyBankGrey.jpg";
wallet.white = "img/wallet.png";
piggyBank.white = "img/piggyBank.jpg";

coin.goldPerClick = 100;
banknote.goldPerClick = 2;
goldBar.goldPerClick = 3;
bitCoin.goldPerClick = 4;

coin.powerBurst = 1;
banknote.powerBurst = 2;
goldBar.powerBurst = 3;
bitCoin.powerBurst = 4;

wallet.income = 1;
piggyBank.income = 2;
wallet.originalIncome = 1;
piggyBank.originalIncome = 2;
wallet.resetIncome = false;
piggyBank.resetIncome = false;

wallet.price = 150;
piggyBank.price = 350;

achievement.score = 100;
achievement2.score = 1000;
achievement3.score = 10000;
achievement4.score = 100000;
achievement5.score = 1000000;
achievement6.score = 10000000;
achievement7.score = 100000000;
achievement8.score = 1000000000;
achievement9.score = 10000000000;
achievement10.score = 100000000000;
achievement.reward = 50;
achievement2.reward = 500;
achievement3.reward = 5000;
achievement4.reward = 50000;
achievement5.reward = 500000;
achievement6.reward = 5000000;
achievement7.reward = 50000000;
achievement8.reward = 500000000;
achievement9.reward = 5000000000;
achievement10.reward = 50000000000;

let flag = false;

let frames = [frame1, frame2, frame3];

frame1.price = 50;
frame2.price = 100;
frame3.price = 200;

let removedBonuses = [];

let interval1bool = false;
let interval2bool = false;
let interval1;
let interval2;
let walletbool;
let piggybool;

let save = document.querySelector(".save");
let load = document.querySelector(".load");

// Inicjowanie silnika Matter.js
const {
    Engine,
    Render,
    World,
    Bodies,
    Runner,
    Composite,
    Bounds
} = Matter;

const runner = Runner.create();
const engine = Engine.create();
engine.timing.timeScale = 1 / 3; // klony spadają dwa razy wolniej
const render = Render.create({
    element: document.getElementById('mid'),
    engine: engine,
    options: {
        wireframes: false,
        background: 'transparent',
        width: 900,
        height: 400
    },
});

const containerWidth = 900;
const containerHeight = 400;
const containerRadius = 0;

const binWidth = 20; // Szerokość "komórki" w naszej tablicy 2D
const binHeight = 20; // Wysokość "komórki" w naszej tablicy 2D
const binsX = Math.ceil(containerWidth / binWidth);
const binsY = Math.ceil(containerHeight / binHeight);
const bins = Array.from({ length: binsX }, () => Array(binsY).fill(0));

const createWall = (x, y, width, height) => Bodies.rectangle(x, y, width, height, { isStatic: true, chamfer: { radius: containerRadius } });
const ground = createWall(containerWidth / 2, containerHeight, containerWidth, 20, /*, render: {
    fillStyle: 'red'
}*/ );
const leftWall = createWall(0, containerHeight / 2, 20, containerHeight);
const rightWall = createWall(containerWidth, containerHeight / 2, 20, containerHeight);
const topWall = createWall(containerWidth / 2, 0, containerWidth, 20);
World.add(engine.world, [ground, leftWall, rightWall, topWall]);

// Uruchamienie silnika i renderera
Runner.run(runner, engine);
Render.run(render);

let currentBody = null;
let clonedBodies = [];
const overlay = document.getElementById('overlay');
let newBody = null;
const createShapeClickHandler = (shape, imageURL) => () => {
    const bodies = Composite.allBodies(engine.world);
    const binWidth = render.options.width;
    const binHeight = render.options.height;
    let occupiedArea = 0;

    if (bodies.length > 0) {
        for (let i = 0; i < bodies.length; i++) {
            const vertices = bodies[i].vertices;
            occupiedArea += Matter.Vertices.area(vertices);
        }
    }

    const binArea = binWidth * binHeight;
    const fillRate = occupiedArea / binArea;
    
    if (fillRate >= 1) {
        overlay.style.display = 'block';
        for (let i = 0; i < coins.length; i++) {
            coins[i].disabled = true;
        }
        
        return;
    } else {
        overlay.style.display = 'none';
        for (let i = 0; i < coins.length; i++) {
            coins[i].disabled = false;
        }
        
        //render.options.background = 'transparent';
    }

    const createBody = (shapeConstructor, x, y, ...rest) => {
        return shapeConstructor(
            x,
            y,
            ...rest,
            {
                render: { sprite: { texture: imageURL, xScale: 1, yScale: 1 } 
            }/*,
            frictionAir: 0.1 */
        }
        );
    };

    switch (shape) {
        case "circle":
            const radius = 10;
            const randomXForCircle = Math.random() * (render.options.width - radius * 2) + radius;
            newBody = createBody(Bodies.circle, randomXForCircle, 19, radius);
            break;
        case "banknote":
            const boxWidth = 46;
            const boxHeight = 20;
            const randomXForRect = Math.random() * (render.options.width - boxWidth);
            newBody = createBody(Bodies.rectangle, randomXForRect, 19, boxWidth, boxHeight);
            break;
        case "goldBar":
            const boxWidth2 = 21;
            const boxHeight2 = 20;
            const randomXForRect2 = Math.random() * (render.options.width - boxWidth2);
            newBody = createBody(Bodies.rectangle, randomXForRect2, 19, boxWidth2, boxHeight2);
            break;
    }

    
    //currentBody = newBody;
    World.add(engine.world, newBody);
    clonedBodies.push(newBody);
};
const walls = [ground, leftWall, rightWall, topWall];

function lvlUpgrade(i) {
    const bodies = Composite.allBodies(engine.world);
    const binWidth = render.options.width;
    const binHeight = render.options.height;
    let occupiedArea = 0;

    if (bodies.length > 0) {
        for (let i = 0; i < bodies.length; i++) {
            const vertices = bodies[i].vertices;
            occupiedArea += Matter.Vertices.area(vertices);
        }
    }

    const binArea = binWidth * binHeight;
    const fillRate = occupiedArea / binArea;
    if (fillRate < 1) {
        overlay.style.display = 'none';
        for (let i = 0; i < coins.length; i++) {
            coins[i].disabled = false;
        }
    } else {
        overlay.style.display = 'block';
        for (let i = 0; i < coins.length; i++) {
            coins[i].disabled = true;
        }
        
        //render.options.background = 'transparent';
    }
    if (clonedBodies.length > 0 && score >= lvls[i].cost) {
        const randomIndex = Math.floor(Math.random() * clonedBodies.length);
        Composite.remove(engine.world, clonedBodies[randomIndex]);
        clonedBodies.splice(randomIndex, 1);
    }
    
    if (score >= lvls[i].cost && levels[i] == 1) {
        if (currentBody) {
            Composite.remove(engine.world, currentBody);
            currentBody = null;
        }

        const bodies = Composite.allBodies(engine.world);
        for (let i = 0; i < bodies.length; i++) {
            if (bodies[i] !== currentBody && !ground) {
                Composite.remove(engine.world, bodies[i]);
            }
        }
        
        levels[i]++;
        $(lvls[i]).html("lvl "+levels[i]);
        coins[i].goldPerClick = coins[i].goldPerClick + coins[i].powerBurst;
        if (levels[i] == 2) {
            lvls[i].cost = lvls[i].cost * 1;
            score = score - lvls[i].cost;
        }
        numericalUnits();
        
    } else if (score >= Math.round(lvls[i].cost * 1.05) && levels[i] > 1) {
        //overlay.style.display = 'none';
        //coin.disabled = false;
        if (currentBody) {
            Composite.remove(engine.world, currentBody);
            currentBody = null;
        }
        const bodies = Composite.allBodies(engine.world);
        for (let i = 0; i < bodies.length; i++) {
            if (bodies[i] !== currentBody && !ground) {
                Composite.remove(engine.world, bodies[i]);
            }
        }
        levels[i]++;
        $(lvls[i]).html("lvl "+levels[i]);
        coins[i].goldPerClick = coins[i].goldPerClick + coins[i].powerBurst;
        if (levels[i] > 2) {
            lvls[i].cost = Math.round(lvls[i].cost * 1.05);
            score = score - lvls[i].cost;
        }
        numericalUnits();
    }
}

function lvl10Upgrade(i) {
    let count = 0;
    
      while(count < 10) {
        if (typeof $(lvlUps[i])[0] != "undefined") {
            $(lvlUps[i])[0].click();
            count++;
        }
    }
}
let bonusWhiteorGrey;
function time(nr) {
    //grey = "img/walletGrey.png";
    bonusWhiteorGrey = setInterval(() => {
        if (score >= bonus[nr].price) {
            bonus[nr].style.cssText+=`background-image:url(${bonus[nr].white})`;
        } if (score < bonus[nr].price) {
            bonus[nr].style.cssText+=`background-image:url(${bonus[nr].grey})`;
        }
}, "100" ) };
let framesUnblockInterval;
function unblockFrames(nr) {
    framesUnblockInterval = setInterval(() => {
        if (score >= frames[nr].price) {
            $(frames[nr]).css('display', 'flex');
        }
    }, "100");
}

function AchievementDisplay(nr) {
    setInterval(() => {
        if (score >= achievements[nr].score) {
            $(achievements[nr]).css('display', 'block');
        }
    }, "100");
}
    
function Top() {
    return Math.floor((Math.random() * 700) + 200) + "px";
}

function Left() {
    return Math.floor((Math.random() * 300)) + "px";
}

function getMoney(nr) { 
    score = score + coins[nr].goldPerClick;
    numericalUnits();
}


let isFunctionEnabled = false;
//let intervalIds = [cooldown100, cooldown3v2, cooldown100v2];

let ascend = document.querySelector("#ascend");

let incomeTimeout = null;
let incomeInterval = null;
let infoInterval = null;
//let ascendClick = false;
let previousCoinLevel;
let previousBanknoteLevel;
let previousGoldBarLevel;
let previousBitCoinLevel;
let ascendCount = 1;
let neededCoinLevel = 10;
let neededBanknoteLevel = 10;
let neededGoldBarLevel = 10;
let neededBitCoinLevel = 10;
setInterval(() => {
    previousCoinLevel = levels[0];
    previousBanknoteLevel = levels[1];
    previousGoldBarLevel = levels[2];
    previousBitCoinLevel = levels[3];
}, 1);
coin.ascendGoldPerClick = 1;
banknote.ascendGoldPerClick = 2;
goldBar.ascendGoldPerClick = 3;
bitCoin.ascendGoldPerClick = 4;
coin.originalAscendGoldPerClick = 1;
banknote.originalAscendGoldPerClick = 2;
goldBar.originalAscendGoldPerClick = 3;
bitCoin.originalAscendGoldPerClick = 4;
coin.originalGoldPerClick = 1;
banknote.originalGoldPerClick = 2;
goldBar.originalGoldPerClick = 3;
bitCoin.originalGoldPerClick = 4;
coin.test = 1;
let ascendPoints = 0;
//let ascendClicked = false;



$("#ascend").on("click", function() {
    ascend.style.boxShadow = "blue 0px 3px 2px";
    ascend.style.filter = "brightness(100%)";
    ascend.style.transform = "translate(0.05em, 0.05em)";
    ascend.style.justifySelf = "top";
    ascend.style.display = "inline-block";
});

let idle = document.querySelectorAll('.idle');
const addBonusIfNeeded = (nr) => {
    if (removedBonuses.includes(nr)) {
       // Dodaj bonus, jeśli został usunięty
        document.querySelector(".right").appendChild(idle[nr]);
        idle[nr].opacity = opacity;
        idle[nr].style.opacity = 1;
    }
}
function clearAll() {
    let excludedIntervals = [infoInterval, bonusWhiteorGrey, framesUnblockInterval];
    for (let i = setTimeout(function() {}, 0); i > 0; i--) {
        if (!excludedIntervals.includes(i)) {
            window.clearInterval(i);
            window.clearTimeout(i);
            if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
        } else {
            if (i === bonusWhiteorGrey || i === framesUnblockInterval) {
                return;
            }
        }
    }
}
let ascendPower = document.getElementById("ascendPower");

function resetGame() {
    lvl1.cost = 10;
    lvl2.cost = 20;
    lvl3.cost = 30;
    lvl4.cost = 40;
    score = 0;
    $(".score").html("0");
    boardIncome = 0;
    $(".board").html("Coins per second: <span>"+boardIncome+"</span>");
    for (i = 0; i < lvls.length; i++) {
        levels[i] = 1;
        $(lvls[i]).html("lvl 1");
    }
    
    
    
    $(cooldowns).html("");
    skill1.style.opacity = "1";
    skill2.style.backgroundColor = "rgb(255, 255, 255)";
    skill3.style.backgroundColor = "rgb(255, 255, 255)";
    doublePower.style.opacity = "1";
    x2.style.opacity = "1";
    doublePower.style.filter = "";
    skill3.style.webkitBoxShadow = "none";
    skill3.style.mozBoxShadow = "none";
    skill3.style.boxShadow = "none";
    para.click();
    
    overlay.style.display = 'none';

    for (let i = 0; i < coins.length; i++) {
        coins[i].disabled = false;
    }

    $(".ascendPower").css("display", "block");
    $(".awards").css("width", "120px");
    $(".gold").css("width", "120px");
    ascendPower.style.backgroundColor = "rgba(180, 136, 146, 0.8)";
    
    
}

function ascendion() {
    for (let i = 0; i < idle.length - 1; i++) {
        if (idle[i] !== idle[i + 1] && idle[i].nextElementSibling !== idle[i + 1]) {
            idle[i + 1].parentNode.insertBefore(idle[i], idle[i + 1]);
        }
    } 
}

let dragonLvl = 0;
let dragonButton1 = document.querySelector(".dragonButton1");
let dragon = document.querySelector(".dragonLvl");


function goldDragonPower() {
    coin.powerBurst += 1.5 * coin.powerBurst;
    coin.ascendGoldPerClick += 1.5 * coin.ascendGoldPerClick;
    coin.goldPerClick += 1.5 * coin.goldPerClick;
    coin.originalGoldPerClick += 1.5 * coin.originalGoldPerClick;
}

function addAscendLvl() {
    if (ascendPoints > 0) {
        ascendPoints--;
        dragonLvl++;
        $(".points").html(dragonLvl);
        
        $("#ascendPoints").html(ascendPoints);
        if (coin.powerBurst >= 1 && coin.ascendGoldPerClick >= 1 && coin.goldPerClick >= 1 && coin.originalGoldPerClick >= 1) {
            coin.powerBurst -= 1;
            coin.ascendGoldPerClick -= 1;
            coin.goldPerClick -= 1;
            coin.originalGoldPerClick -= 1;
            goldDragonPower();
        } 
        if (coin.powerBurst == 0 || coin.ascendGoldPerClick == 0 || coin.goldPerClick == 0 || coin.originalGoldPerClick == 0) {
            coin.powerBurst = 1;
            coin.ascendGoldPerClick = 1;
            coin.goldPerClick = 1;
            coin.originalGoldPerClick = 1;
        }
    }
}


function addAscend10Lvl() {
    if (ascendPoints >= 2) {
        let count = 0;
        while (count < 2) {
            if (typeof $(dragonButton1)[0] != "undefined") {
                $(dragonButton1)[0].click();
                count++;
            }
        }
        //ascendPoints--;
        //dragonLvl++;
        //$(".points").html(dragonLvl);
        //$(".ascendPoints").html("You have "+ascendPoints+" ascend points. Use them carefully!");
    }
}


$(ascend).on("click", function() {
    //ascendClicked = true;
    ascendCount++;
    //ascendClick = true;
    $(frames).css('display', 'none');
    
    resetGame();
    isFunctionEnabled = false;
    if (!isFunctionEnabled) {
        clearAll();
        console.log("funkcja wyłączona");
        isFunctionEnabled = true;
    }
    
    for (const body of clonedBodies) {
        World.remove(engine.world, body);
    }
    clonedBodies = [];
    if (previousCoinLevel >= neededCoinLevel) {
        console.log("jest coin");
            coin.powerBurst = coin.ascendGoldPerClick + coin.originalAscendGoldPerClick;
            coin.goldPerClick = coin.ascendGoldPerClick + coin.originalAscendGoldPerClick;
            coin.ascendGoldPerClick = coin.ascendGoldPerClick + coin.originalAscendGoldPerClick;
            coin.originalGoldPerClick = coin.originalGoldPerClick + 1;
            neededCoinLevel += 10;
            ascendPoints++;
            $("#ascendPoints").html(ascendPoints);
    } else {
        coin.goldPerClick = coin.originalGoldPerClick;
    }

    if (previousBanknoteLevel >= neededBanknoteLevel) {
        console.log("jest banknote");
            banknote.powerBurst = banknote.ascendGoldPerClick + banknote.originalAscendGoldPerClick;
            banknote.goldPerClick = banknote.ascendGoldPerClick + banknote.originalAscendGoldPerClick;
            banknote.ascendGoldPerClick = banknote.ascendGoldPerClick + banknote.originalAscendGoldPerClick;
            banknote.originalGoldPerClick = banknote.originalGoldPerClick + 2;
            neededBanknoteLevel += 10;
            ascendPoints++;
            $("#ascendPoints").html(ascendPoints);
    } else {
        banknote.goldPerClick = banknote.originalGoldPerClick;
    }

    if (previousGoldBarLevel >= neededGoldBarLevel) {
        console.log("jest goldBar");
            goldBar.powerBurst = goldBar.ascendGoldPerClick + goldBar.originalAscendGoldPerClick;
            goldBar.goldPerClick = goldBar.ascendGoldPerClick + goldBar.originalAscendGoldPerClick;
            goldBar.ascendGoldPerClick = goldBar.ascendGoldPerClick + goldBar.originalAscendGoldPerClick;
            goldBar.originalGoldPerClick = goldBar.originalGoldPerClick + 3;
            neededGoldBarLevel += 10;
            ascendPoints++;
            $("#ascendPoints").html(ascendPoints);
    } else {
        goldBar.goldPerClick = goldBar.originalGoldPerClick;
    }

    if (previousBitCoinLevel >= neededBitCoinLevel) {
        console.log("jest bitCoin");
        bitCoin.powerBurst = bitCoin.ascendGoldPerClick + bitCoin.originalAscendGoldPerClick;
        bitCoin.goldPerClick = bitCoin.ascendGoldPerClick + bitCoin.originalAscendGoldPerClick;
        bitCoin.ascendGoldPerClick = bitCoin.ascendGoldPerClick + bitCoin.originalAscendGoldPerClick;
        bitCoin.originalGoldPerClick = bitCoin.originalGoldPerClick + 4;
        neededBitCoinLevel += 10;
        ascendPoints++;
        $("#ascendPoints").html(ascendPoints);
    } else {
        bitCoin.goldPerClick = bitCoin.originalGoldPerClick;
    }
    
    for (let i = 0; i < bonus.length; i++) {
        addBonusIfNeeded(i);
    }
    enableInteraction();
    ascendion();
});

let dragonButton2 = document.querySelector(".dragonButton2");

let closeFlag = false;
let help = document.querySelector(".help");
let divFromHelp = document.querySelector(".divFromHelp");
  

let close = document.querySelector(".close");


/*
help.ondblclick = function() {
    if (closeFlag == true) {
        divFromHelp.style.display = "none";
        console.log(divFromHelp.style.display);
    }
    
    closeFlag = false;
}
*/
let intervalIsRunning = false;
let activeWalletInterval = 0;
let activePiggyInterval = 0;
let isRemoved = false;
isFunctionEnabled = true;
function getIncome(nr) {
    console.log(isFunctionEnabled)
    if (isFunctionEnabled) {
        console.log(isFunctionEnabled)
        console.log("funkcja włączona")
        if (bonus[nr] && score >= bonus[nr].price) {
            
            incomeTimeout = setTimeout(() => {
                    score = score - bonus[nr].price;
                    numericalUnits();
            }, 100);
              
            if (bonus[0] == bonus[nr]) {
                activeWalletInterval++;
                if (activeWalletInterval > 1) {
                    console.log("decrasing wallet income");
                    activeWalletInterval--;
                    clearInterval(interval1);
                }
                interval1 = setInterval(() => {
                        score = score + wallet.income;
                        numericalUnits();
                }, "1000");
            }

            if (bonus[1] == bonus[nr]) {
                activePiggyInterval++;
                if (activePiggyInterval > 1) {
                    console.log("decrasing piggy income");
                    activePiggyInterval--;
                    clearInterval(interval2);
                }

                interval2 = setInterval(() => {
                        score = score + piggyBank.income;
                        numericalUnits();
                }, "1000");
            }

            piggybool = false;
            walletbool = false;

            infoInterval = setInterval(() => {
                $(infoGoldGain).html("");
            }, "5000");
    
            boardIncome = boardIncome + bonus[nr].income;
            $(board).html('Coins per second: '+'<span>'+boardIncome+'</span>');
    
            $(infoGoldGain).html('<span style="color:rgb(189, 29, 15);">'+'-'+bonus[nr].price+'</span>');
        } else { return; }
            $(bonus[nr]).css('opacity', '0');
            bonus[nr].remove();
            removedBonuses.push(nr);
    }
}

let instance;
let opacityDown;

function clickButton(nr) {
    //buttons[nr].style.pointerEvents = "none";
    buttons[nr].disabled = true;
    score = score + achievements[nr].reward;
    numericalUnits();
    achievements[nr].style.opacity = opacity;
    
    opacityDown = setInterval(() => {
        if (achievements[nr].style.opacity > 0 && buttons[nr].disabled == true) {
            achievements[nr].style.opacity -= .1;
        }
    }, "50");

    instance = setInterval((i) => {
        if (achievements[nr].style.opacity <= 0) {
            achievements[nr].style.display = "none";
            achievements[nr].remove();
            if (buttons[i]) {
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
            }
        }
    }, "100");
    
    if (score >= achievements[nr].score) {
        if (achievements[nr].reward < 1000) {
            $(infoGoldGain).html('<span style="color:rgb(41, 189, 15);">'+"+" + achievements[nr].reward);
        } else if (achievements[nr].reward >= 1000 && achievements[nr].reward < 1000000) {
            $(infoGoldGain).html(('<span style="color:rgb(41, 189, 15);">'+"+"+achievements[nr].reward / 1000) + "K");
        } else if (achievements[nr].reward >= 1000000 && achievements[nr].reward < 1000000000) {
            $(infoGoldGain).html(('<span style="color:rgb(41, 189, 15);">'+"+"+achievements[nr].reward / 1000000) + "M");
        } else if (achievements[nr].reward >= 1000000000 && achievements[nr].reward < 1000000000000) {
            $(infoGoldGain).html(('<span style="color:rgb(41, 189, 15);">'+"+"+achievements[nr].reward / 1000000) + "B");
        }

        setTimeout(() => {
            $(infoGoldGain).html("");
        }, "1000");
    }
}



const para = document.createElement("div");
const start = document.getElementById("zone");
const dropzones = document.querySelectorAll(".dropzone");
let flag2 = false;
let flag3 = false;
let autoClicks;
let lvlUpsInterval;
clicker.draggable="true";

let errorMultipy = true;



function drag(i) {
    errorMultipy = true;
    //console.log("dragging");
    $("#clickerShadow").css("display", "block");
    $("#clicker").css("display", "none");
    $(".tooltip-text").css('visibility', 'hidden');
    if (dragDrop != dump[i] && errorMultipy == true) {
        window.clearInterval(autoClicks);
    }

    for (let j = 0; j < lvlAll.length; j++) {
        if (dragDrop != lvlAll[j] && errorMultipy == true) {
            window.clearInterval(autoClicks);
            $(lvlAll[j]).css("color", "");
        }
    }
    para.remove();
}

function dragStart(e) {
    //console.log("dragStart");
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(i) {
    $(".tooltip-text").css('visibility', '');
    $("#clickerShadow").css("display", "none");
    $("#clicker").css("display", "block");
    flag3 = true;
    if (flag2 == true && flag3 == true && dump[i]) {
        console.log("fag2 true, flag3 true");
        $("#clickerShadow").css("display", "block");
    }

    if (clicker.parentNode == dump[i]) {
        dump[i].after(para);
        console.log(dump[i]);
        $("#clickerShadow").css("display", "block");
        $("#clicker").css("display", "block");
    }
    
    autoClicks = setInterval(() => {
        if (clicker.parentNode == dump[i]) {
            $(dump[i]).click();
            $(dump[i]).addClass('active');
            $(clicker).addClass('active');
            $(clicker).css('background', 'url("img/clickerActive.png")');
        }
        if(clicker.parentNode == dump[i] && clicker.parentNode != coins[i]) {
            //$(dump[i]).click();
            $(dump[i]).css("color", "red");
        }
                
        setTimeout(() => {
            if(clicker.parentNode == dump[i] && clicker.parentNode != coins[i]) {
                $(dump[i]).css("color", "");
            }
                    
            if (clicker.parentNode == dump[i]) {
                $(dump[i]).removeClass('active');
                $(clicker).removeClass('active');
                $(clicker).css('background', 'url("img/clicker.png")');
            }
        }, 250);
                //$(coins[i]).toggleClass(coins[i]);
                // $(clicker).toggleClass(coins[i]);
    }, 500);
    

    if (flag2 == false && flag3 == true && clicker.parentNode != dump[i]) {
        console.log("flag2 false, flag3 true");
        $("#clickerShadow").css("display", "none");
        $("#clicker").css("display", "block");
    }
    console.log("dragEnd");
    this.className = 'clicker';
}

function dragOver(e) {
    console.log("dragOver");
    e.preventDefault();
}

function dragEnter(e) {
    console.log("dragEnter");
    e.preventDefault();
    $("#clickerShadow").css("display", "block");
    $("#clicker").css("display", "none");
}

function dragLeave() {
    console.log("dragLeave");
    this.className = 'dropzone';
    coin.className = 'money coin dropzone';
    banknote.className = 'money banknote dropzone';
    bitCoin.className = 'money bitCoin dropzone';
    goldBar.className = 'money goldBar dropzone';
    lvlUp1.className = 'icon-angle-up lvlUp dropzone';
    lvlUp2.className = 'icon-angle-up lvlUp dropzone';
    lvlUp3.className = 'icon-angle-up lvlUp dropzone';
    lvlUp4.className = 'icon-angle-up lvlUp dropzone';
    doubleLvlUp1.className = 'icon-angle-double-up lvlUp dropzone';
    doubleLvlUp2.className = 'icon-angle-double-up lvlUp dropzone';
    doubleLvlUp3.className = 'icon-angle-double-up lvlUp dropzone';
    doubleLvlUp4.className = 'icon-angle-double-up lvlUp dropzone';
    flag2 = false;
    $("#clickerShadow").css("display", "block");
}

function dragDrop(i) {
    if (clickerShadow) {
        clicker.parentNode.removeChild(clicker);
        start.appendChild(clicker);
    }

    if(!dump[i]) return
    errorMultipy = false;
    flag2 = true;
    $("#clickerShadow").css("display", "block");
    $("#clicker").css("display", "block");
    console.log("dragDrop");
    dump[i].append(clicker);
    dump[i].after(para);
    }

para.style.backgroundImage = "url('img/close.png')";
para.style.backgroundSize = "100%";
para.style.width = "15px";
para.style.height = "15px";
para.style.position = "absolute";

             


const awards = document.getElementById("awards");
const gold = document.getElementById("gold");
const left = document.getElementById("left");
const coinsDivs = document.getElementsByClassName("coins");



skill1.style.opacity = opacity;

const x2 = document.querySelector(".x2");
skill2.style.backgroundColor = "rgb(255, 255, 255)";


skill3.style.backgroundColor = "rgb(255, 255, 255)";

const doublePower = document.getElementById("doublePower");

let cooldown2Interval;
let cooldown3Interval;
let cooldown3v2Interval;
let cooldownTimer3;
let cooldowns = [cooldown1, cooldown2, cooldown3];

function numericalUnits() {
    if (score < 1000) {
        $('.score').html(score);
    } else if (score >= 1000 && score < 100000) { // 3 & 5 zeros
        $('.score').html((score / 1000).toFixed(3)); // 3 zeros
    }  else if (score >= 100000 && score < 1000000) { // 5 & 6 zeros
        $('.score').html((score / 1000).toFixed(0)+"K"); // 3 zeros
    } else if (score >= 1000000 && score < 100000000) { // 6 & 8 zeros
        $(".score").html((score / 1000000).toFixed(3)+"K"); // 6 zeros
    } else if (score >= 100000000 && score < 1000000000) { // 8 & 9 zeros
        $(".score").html((score / 1000000).toFixed(0)+"M"); // 6 zeros
    }  else if (score >= 1000000000 && score < 100000000000) { // 9 & 11 zeros
        $(".score").html((score / 1000000000).toFixed(3)+"M"); // 9 zeros
    } else if (score >= 100000000000 &&  score < 1000000000000) { // 11 & 12 zeros
        $(".score").html((score / 1000000000).toFixed(0)+"B"); // 9 zeros
    } else if (score >= 1000000000000 &&  score < 100000000000000) { // 12 & 14 zeros
        $(".score").html((score / 1000000000000).toFixed(3)+"B"); // 12 zeros
    } else if (score >= 100000000000000 &&  score < 1000000000000000) { // 14 & 15 zeros
        $(".score").html((score / 1000000000000).toFixed(0)+"T"); // 12 zeros
    } else if (score >= 1000000000000000 && score < Number(100000000000000000n)) { 
        $(".score").html((score / 1000000000000000).toFixed(3)+"T");
    } else if (score >= Number(100000000000000000n) && score < Number(1000000000000000000n)) {
        $(".score").html((score / 1000000000000000).toFixed(0)+"q");
    } else if (score >= Number(1000000000000000000n) && score < Number(100000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000n)).toFixed(3)+"q");
    } else if (score >= Number(100000000000000000000n) && score < Number(1000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000n)).toFixed(0)+"Q");
    } else if (score >= Number(1000000000000000000000n) && score < Number(100000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000n)).toFixed(3)+"Q");
    } else if (score >= Number(100000000000000000000000n) && score < Number(1000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000n)).toFixed(0)+"s");
    } else if (score >= Number(1000000000000000000000000n) && score < Number(100000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000000n)).toFixed(3)+"s");
    } else if (score >= Number(100000000000000000000000000n) && score < Number(1000000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000000n)).toFixed(0)+"S");
    } else if (score >= Number(1000000000000000000000000000n) && score < Number(100000000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000000000n)).toFixed(3)+"S");
    } else if (score >= Number(100000000000000000000000000000n) && score < Number(1000000000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000000000n)).toFixed(0)+"O");
    } else if (score >= Number(1000000000000000000000000000000n) && score < Number(100000000000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000000000000n)).toFixed(3)+"O");
    } else if (score >= Number(100000000000000000000000000000000n) && score < Number(1000000000000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000000000000n)).toFixed(0)+"N");
    } else if (score >= Number(1000000000000000000000000000000000n) && score < Number(100000000000000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000000000000000n)).toFixed(3)+"N");
    } else if (score >= Number(100000000000000000000000000000000000n) && score < Number(1000000000000000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000000000000000n)).toFixed(0)+"D");
    } else if (score >= Number(1000000000000000000000000000000000000n) && score < Number(100000000000000000000000000000000000000n)) {
        $(".score").html((score / Number(1000000000000000000000000000000000000n)).toFixed(3)+"D");
    } else if (score >= Number(100000000000000000000000000000000000000n) && score < Number(1000000000000000000000000000000000000000n)) {
        $(".score").html((score).toFixed(1));
    }
}
    
function numericalUnits2(i) {
    function update() {
    if (coins[i].goldPerClick < 1000) {
        $(text[i]).html('<span style="color: rgb(255, 255, 0);">'+names[i]+'</span>'+" - <span style='color:green;'>"+coins[i].goldPerClick+"$ </span> per click");
    } else if (coins[i].goldPerClick >= 1000 && coins[i].goldPerClick < 100000) { //1
        $(text[i]).html(names[i]+" - <span style='color:green;'>"+(coins[i].goldPerClick / 1000).toFixed(3)+"$ </span> per click"); 
    }  else if (coins[i].goldPerClick >= 100000 && coins[i].goldPerClick < 1000000) {
        $(text[i]).html(names[i]+" - <span style='color:green;'>"+(coins[i].goldPerClick / 1000).toFixed(0)+"K"+"$ </span> per click");   
    } else if (coins[i].goldPerClick >= 1000000 && coins[i].goldPerClick < 100000000) {
        $(text[i]).html(names[i]+" - <span style='color:green;'>"+(coins[i].goldPerClick / 1000000).toFixed(3)+"K"+"$ </span> per click");
    } else if (coins[i].goldPerClick >= 100000000 && coins[i].goldPerClick < 1000000000) {
        $(text[i]).html(names[i]+" - <span style='color:green;'>"+(coins[i].goldPerClick / 1000000).toFixed(0)+"M"+"$ </span> per click");
    } else if (coins[i].goldPerClick >= 1000000000 && coins[i].goldPerClick < 100000000000) {
        $(text[i]).html(names[i]+" - <span style='color:green;'>"+(coins[i].goldPerClick / 1000000000).toFixed(3)+"M"+"$ </span> per click");
    } else if (coins[i].goldPerClick >= 100000000000 && coins[i].goldPerClick < 1000000000000) {
        $(text[i]).html(names[i]+" - <span style='color:green;'>"+(coins[i].goldPerClick / 1000000000).toFixed(0)+"B"+"$ </span> per click");
    } else if (coins[i].goldPerClick >= 1000000000000 && coins[i].goldPerClick < 100000000000000) {
        $(text[i]).html(names[i]+" - <span style='color:green;'>"+(coins[i].goldPerClick / 1000000000000).toFixed(3)+"B"+"$ </span> per click");
    } else if (coins[i].goldPerClick >= 100000000000000 && coins[i].goldPerClick < 1000000000000000) {
        $(text[i]).html(names[i]+" - <span style='color:green;'>"+(coins[i].goldPerClick / 1000000000000).toFixed(0)+"T"+"$ </span> per click");
    } else if (coins[i].goldPerClick >= 1000000000000000 && coins[i].goldPerClick < 100000000000000000n) {
        $(text[i]).html(names[i]+" - <span style='color:green;'>"+(coins[i].goldPerClick / 1000000000000000).toFixed(3)+"T"+"$ </span> per click");
    }
    requestAnimationFrame(update);
}
update();
}

function numericalUnits3(i) {
    function update() {
        if (levels[i] == 1) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+lvls[i].cost+"$ </span>");
        } else if (Math.round(lvls[i].cost * 1.05) < 1000 && levels[i] > 1) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+Math.round(lvls[i].cost * 1.05)+"$ </span>");
        } else if (Math.round(lvls[i].cost * 1.05) >= 1000 && Math.round(lvls[i].cost * 1.05) < 100000) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+(Math.round(lvls[i].cost * 1.05) / 1000).toFixed(3)+"$ </span>");   
        }  else if (Math.round(lvls[i].cost * 1.05) >= 100000 && Math.round(lvls[i].cost * 1.05) < 1000000) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+(Math.round(lvls[i].cost * 1.05) / 1000).toFixed(0)+"K"+"$ </span>");   
        } else if (Math.round(lvls[i].cost * 1.05) >= 1000000 && Math.round(lvls[i].cost * 1.05) < 100000000) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+(Math.round(lvls[i].cost * 1.05) / 1000000).toFixed(3)+"K"+"$ </span>");   
        } else if (Math.round(lvls[i].cost * 1.05) >= 100000000 && Math.round(lvls[i].cost * 1.05) < 1000000000) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+(Math.round(lvls[i].cost * 1.05) / 1000000).toFixed(0)+"M"+"$ </span>");   
        } else if (Math.round(lvls[i].cost * 1.05) >= 1000000000 && Math.round(lvls[i].cost * 1.05) < 100000000000) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+(Math.round(lvls[i].cost * 1.05) / 1000000000).toFixed(3)+"M"+"$ </span>");   
        } else if (Math.round(lvls[i].cost * 1.05) >= 100000000000 && Math.round(lvls[i].cost * 1.05) < 1000000000000) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+(Math.round(lvls[i].cost * 1.05) / 1000000000).toFixed(0)+"B"+"$ </span>");   
        } else if (Math.round(lvls[i].cost * 1.05) >= 1000000000000 && Math.round(lvls[i].cost * 1.05) < 100000000000000) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+(Math.round(lvls[i].cost * 1.05) / 1000000000000).toFixed(3)+"B"+"$ </span>");   
        }else if (Math.round(lvls[i].cost * 1.05) >= 100000000000000 && Math.round(lvls[i].cost * 1.05) < 1000000000000000) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+(Math.round(lvls[i].cost * 1.05) / 1000000000000).toFixed(0)+"T"+"$ </span>");
        } else if (Math.round(lvls[i].cost * 1.05) >= 1000000000000000) {
            $(lvlTexts[i]).html("<span style='font-size:80%;'>x1</span> <span style='color:green;'>"+(Math.round(lvls[i].cost * 1.05) / 1000000000000000).toFixed(3)+"T"+"$ </span>");
        }
        requestAnimationFrame(update);
    }
    update();
}

function numericalUnits4(i) {
    function update() {
        let count = 0;
        let a = lvls[i].cost;
        let b;
        let c;
        let d;
        let e;
        let f;
        let g;
        let h;
        let j;
        let k;
        let aa;
        if (levels[i] == 1) {
            while(count < 10) {
                if (typeof $(a)[0] != "undefined") {
                    b = Math.round(a * 1.05);
                    c = Math.round(b * 1.05);
                    d = Math.round(c * 1.05);
                    e = Math.round(d * 1.05);
                    f = Math.round(e * 1.05);
                    g = Math.round(f * 1.05);
                    h = Math.round(g * 1.05);
                    j = Math.round(h * 1.05);
                    k = Math.round(j * 1.05);
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+(a + b + c + d + e + f + g + h + j + k)+"$ </span>");
                    count++;
                }
            }
        } else if (levels[i] > 1) {
            while(count < 10) {
                if (typeof $(a)[0] != "undefined") {
                    aa = Math.round(lvls[i].cost * 1.05);
                    b = Math.round(aa * 1.05);
                    c = Math.round(b * 1.05);
                    d = Math.round(c * 1.05);
                    e = Math.round(d * 1.05);
                    f = Math.round(e * 1.05);
                    g = Math.round(f * 1.05);
                    h = Math.round(g * 1.05);
                    j = Math.round(h * 1.05);
                    k = Math.round(j * 1.05);
                    if ((aa + b + c + d + e + f + g + h + j + k) < 1000 && levels[i] > 1) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+(aa + b + c + d + e + f + g + h + j + k)+"$ </span>");
                    } else if ((aa + b + c + d + e + f + g + h + j + k) >= 1000 && (aa + b + c + d + e + f + g + h + j + k) < 100000) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+((aa + b + c + d + e + f + g + h + j + k) / 1000).toFixed(3)+"$ </span>");   
                    }  else if ((aa + b + c + d + e + f + g + h + j + k) >= 100000 && (aa + b + c + d + e + f + g + h + j + k) < 1000000) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+((aa + b + c + d + e + f + g + h + j + k) / 1000).toFixed(0)+"K$ </span>");   
                    } else if ((aa + b + c + d + e + f + g + h + j + k) >= 1000000 && (aa + b + c + d + e + f + g + h + j + k) < 100000000) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+((aa + b + c + d + e + f + g + h + j + k) / 1000000).toFixed(3)+"K$ </span>");   
                    } else if ((aa + b + c + d + e + f + g + h + j + k) >= 100000000 && (aa + b + c + d + e + f + g + h + j + k) < 1000000000) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+((aa + b + c + d + e + f + g + h + j + k) / 1000000).toFixed(0)+"M$ </span>");   
                    } else if ((aa + b + c + d + e + f + g + h + j + k) >= 1000000000 && (aa + b + c + d + e + f + g + h + j + k) < 100000000000) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+((aa + b + c + d + e + f + g + h + j + k) / 1000000000).toFixed(3)+"M$ </span>");   
                    } else if ((aa + b + c + d + e + f + g + h + j + k) >= 100000000000 && (aa + b + c + d + e + f + g + h + j + k) < 1000000000000) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+((aa + b + c + d + e + f + g + h + j + k) / 1000000000).toFixed(0)+"B$ </span>");   
                    } else if ((aa + b + c + d + e + f + g + h + j + k) >= 1000000000000 && (aa + b + c + d + e + f + g + h + j + k) < 100000000000000) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+((aa + b + c + d + e + f + g + h + j + k) / 1000000000000).toFixed(3)+"B$ </span>");   
                    } else if ((aa + b + c + d + e + f + g + h + j + k) >= 100000000000000 && (aa + b + c + d + e + f + g + h + j + k) < 1000000000000000) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+((aa + b + c + d + e + f + g + h + j + k) / 1000000000000).toFixed(0)+"T$ </span>");
                    } else if ((aa + b + c + d + e + f + g + h + j + k) >= 1000000000000000) {
                    $(lvl10Texts[i]).html("<span style='font-size:80%;'>x10</span> <span style='color:green;'>"+((aa + b + c + d + e + f + g + h + j + k) / 1000000000000000).toFixed(3)+"T$ </span>");
                    }
                    count++;
                }
            }
        }
        requestAnimationFrame(update);
    }
    update();
}

let settings = document.querySelector(".settings");
let windowOfSettings = document.querySelector(".windowOfSettings");

let closeSettings = document.querySelector(".closeSettings");

function enableInteraction() {
    //console.log("enable");
    document.querySelectorAll(".moneyButtons").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll(".lvlUp").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll("#clicker").forEach(element => {
        element.classList.add('active');
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll(".skill").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll(".bar").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll(".settings").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll("#ascend").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll(".idle").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll(".dragonButton").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll(".dragonImage").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll(".help").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });

    document.querySelectorAll(".achievement").forEach(element => {
        element.classList.add('pointer');
        element.classList.remove("no-pointer");
    });
}

function disableInteraction() {
    //console.log("disable");
    document.querySelectorAll(".moneyButtons").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll(".lvlUp").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll("#clicker").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll(".skill").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll(".bar").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll(".settings").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll("#ascend").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll(".idle").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll(".dragonButton").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll(".dragonImage").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll(".help").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });

    document.querySelectorAll(".achievement").forEach(element => {
        element.classList.add('no-pointer');
        element.classList.remove("pointer");
    });
}

function getScore() {
    return score;
}

function setScore(savedScore) {
    //console.log('aktualna ilość score:' + savedScore);
    score = savedScore;
    $(".score").html(savedScore);
}

function getLvl1() {
    return levels[0];
}

function getLvl2() {
    return levels[1];
}

function getLvl3() {
    return levels[2];
}

function getLvl4() {
    return levels[3];

}

function setLvl1(savedLvl1) {
    levels[0] = savedLvl1;
    $(lvl1).html("lvl "+savedLvl1);
    //console.log('aktualna ilość levels1:' + savedLvl1);
}

function setLvl2(savedLvl2) {
    levels[1] = savedLvl2;
    $(lvl2).html("lvl "+savedLvl2);
    //console.log('aktualna ilość levels2:' + savedLvl2);
}

function setLvl3(savedLvl3) {
    levels[2] = savedLvl3;
    $(lvl3).html("lvl "+savedLvl3);
    //console.log('aktualna ilość levels3:' + savedLvl3);
}

function setLvl4(savedLvl4) {
    levels[3] = savedLvl4;
    $(lvl4).html("lvl "+savedLvl4);
    //console.log('aktualna ilość levels4:' + savedLvl4);
}

function getLvl1cost() {
    return lvls[0].cost;
}

function getLvl2cost() {
    return lvls[1].cost;
}

function getLvl3cost() {
    return lvls[2].cost;
}

function getLvl4cost() {
    return lvls[3].cost;
}

function setLvl1cost(savedLvl1cost) {
    lvls[0].cost = savedLvl1cost;
}

function setLvl2cost(savedLvl2cost) {
    lvls[1].cost = savedLvl2cost;
}

function setLvl3cost(savedLvl3cost) {
    lvls[2].cost = savedLvl3cost;
}

function setLvl4cost(savedLvl4cost) {
    lvls[3].cost = savedLvl4cost;
}

function getCoinPowerBurst() {
    return coin.powerBurst;
}

function setCoinPowerBurst(savedCoinPowerBurst) {
    coin.powerBurst = savedCoinPowerBurst;
}

function getCoinGoldPerClick() {
    return coin.goldPerClick;
}

function setCoinGoldPerClick(savedCoinGoldPerClick) {
    coin.goldPerClick = savedCoinGoldPerClick;
}

function getBanknotePowerBurst() {
    return banknote.powerBurst;
}

function setBanknotePowerBurst(savedBanknotePowerBurst) {
    banknote.powerBurst = savedBanknotePowerBurst;
}

function getBanknoteGoldPerClick() {
    return banknote.goldPerClick;
}

function setBanknoteGoldPerClick(savedBanknoteGoldPerClick) {
    banknote.goldPerClick = savedBanknoteGoldPerClick;
}

function getGoldBarPowerBurst() {
    return goldBar.powerBurst;
}

function setGoldBarPowerBurst(savedGoldBarPowerBurst) {
    goldBar.powerBurst = savedGoldBarPowerBurst;
}

function getGoldBarGoldPerClick() {
    return goldBar.goldPerClick;
}

function setGoldBarGoldPerClick(savedGoldBarGoldPerClick) {
    goldBar.goldPerClick = savedGoldBarGoldPerClick;
}

function getBitCoinPowerBurst() {
    return bitCoin.powerBurst;
}

function setBitCoinPowerBurst(savedBitCoinPowerBurst) {
    bitCoin.powerBurst = savedBitCoinPowerBurst;
}

function getBitCoinGoldPerClick() {
    return bitCoin.goldPerClick;
}

function setBitCoinGoldPerClick(savedBitCoinGoldPerClick) {
    bitCoin.goldPerClick = savedBitCoinGoldPerClick;
}

let savedBodies = [];

function getClonedBodies() {
    savedBodies = [];
    const bodies = Composite.allBodies(engine.world);
    for (let i = 0; i < bodies.length; i++) {
        if (clonedBodies.includes(bodies[i])) {
            savedBodies.push({
                position: { x: bodies[i].position.x, y: bodies[i].position.y },
                vertices: bodies[i].vertices.map(({ x, y }) => ({ x, y })),
                render: {
                    sprite: {
                        texture: bodies[i].render.sprite.texture,
                        xOffset: bodies[i].render.sprite.xOffset,
                        yOffset: bodies[i].render.sprite.yOffset
                    }
                }
            });
        }
    }
    return savedBodies;
}

function setClonedBodies(savedClonedBodies) {
    for (let i = 0; i < clonedBodies.length; i++) {
        World.remove(engine.world, clonedBodies[i]);
    }
    clonedBodies = [];
    if (savedClonedBodies) {
        for (let i = 0; i < savedClonedBodies.length; i++) {
            const body = Bodies.fromVertices(savedClonedBodies[i].position.x, savedClonedBodies[i].position.y, savedClonedBodies[i].vertices);
            body.render.sprite.texture = savedClonedBodies[i].render.sprite.texture;
            body.render.sprite.xOffset = savedClonedBodies[i].render.sprite.xOffset;
            body.render.sprite.yOffset = savedClonedBodies[i].render.sprite.yOffset;
            clonedBodies.push(body);
            World.add(engine.world, body);
        }
    }
}

function getPiggyBank() {
    piggyBank.opacity = opacity;
    //console.log("piggybank = 1");
    return piggyBank.style.opacity;
}

function getWallet() {
    wallet.opacity = opacity;
    //console.log("wallet = 1");
    return wallet.style.opacity;
}

function getBoardInc() {
    return boardIncome;
}
function setBoardInc(savedBoardInc) {
    boardIncome = savedBoardInc;
    $(".board").html("Coins per second: <span>"+savedBoardInc+"</span>");
}

function setWallet(savedWallet) {
    wallet.opacity = savedWallet;
    
    if (savedWallet == '1') {
        document.querySelector(".right").appendChild(wallet);
        wallet.opacity = opacity;
        wallet.style.opacity = 1;
        window.clearInterval(interval1);
        console.log("wallet back!");
        walletbool = true;
        console.log("opacity after back of wallet "+wallet.style.opacity);
    } if (savedWallet == '0') {
        console.log("wallet remove!");
        wallet.style.opacity = 0;
        bonus[0].remove();
        removedBonuses.push(0);
        console.log("removedBonuses "+removedBonuses);
        interval1bool = false;
        if (!interval1bool) {
            window.clearInterval(interval1);
            interval1 = setInterval(() => {
                interval1bool = true;
                score = score + 1;
                numericalUnits();
            }, 1000);
            //activeWalletInterval++;
        } else {return;}
        walletbool = false;
        console.log("opacity after remove of wallet "+wallet.style.opacity);
    } else {
        document.querySelector(".right").appendChild(wallet);
        wallet.opacity = opacity;
        wallet.style.opacity = 1;
        window.clearInterval(interval1);
        console.log("wrr");
        walletbool = true;
    }
}

function setPiggyBank(savedPiggyBank) {
    piggyBank.opacity = savedPiggyBank;

    if (savedPiggyBank == '1') {
        document.querySelector(".right").appendChild(piggyBank);
        piggyBank.opacity = opacity;
        piggyBank.style.opacity = 1;
        window.clearInterval(interval2);
        console.log("piggyBank back!");
        console.log("opacity after back of piggy "+piggyBank.style.opacity);
        piggybool = true;
    } if (savedPiggyBank == '0') {
        console.log("piggybank remove!");
        piggyBank.style.opacity = 0;
        bonus[1].remove();
        removedBonuses.push(1);
        console.log("removedBonuses "+removedBonuses);
        interval2bool = false;
        if (!interval2bool) {
            window.clearInterval(interval2);
            interval2 = setInterval(() => {
                interval2bool = true;
                score = score + 2;
                numericalUnits();
            }, 1000);
        }
        piggybool = false;
        console.log("opacity after remove of piggy "+piggyBank.style.opacity);
    } else {
        document.querySelector(".right").appendChild(piggyBank);
        piggyBank.opacity = opacity;
        piggyBank.style.opacity = 1;
        window.clearInterval(interval2);
        piggybool = true;
    }
}

function getSkill1Opacity() {
    skill1.opacity = opacity;
    return skill1.style.opacity;
}

function getSkill1Cooldown() {
    return cooldown1.value;
}

function setSkillOpacity1(savedskillOpacity1) {
    skill1.opacity = savedskillOpacity1;
    
    console.log(skill1.opacity);

    if (savedskillOpacity1 == '1') {
        console.log("savedskillOpacity1 == '1'");
        skill1.opacity = opacity;
        skill1.style.opacity = '1';
    } else if (savedskillOpacity1 == '0.2') {
        console.log("savedskillOpacity1 == '0.2'");
        skill1.style.opacity = '0.2';
    }
}
let cooldown1Interval;
function setSkillCooldown1(savedskillCooldown1) {
    cooldown1.value = savedskillCooldown1;

    if (savedskillCooldown1 == null || savedskillCooldown1 <= 0) {
        clearInterval(cooldown1Interval);
        console.log("savedskillCooldown1 == 'null'");
        $(cooldown1).html("");
        $("#100sec1").html("100s");
        clearInterval(cooldown1Interval);
    } else if (savedskillCooldown1 > 0) {
        clearInterval(cooldown1Interval);
        $(cooldown1).html(savedskillCooldown1);
        cooldown1Interval = setInterval(() => {
        savedskillCooldown1--;
        $(cooldown1).html(savedskillCooldown1);
        $("#100sec1").html(savedskillCooldown1);
        if (savedskillCooldown1 == 0) {
            console.log("cooldown1 STOP!!!!!!!!");
            $("#100sec1").html("100s");
            skill1.style.opacity = "1";
            $(cooldown1).html("");
            clearInterval(cooldown1Interval);
        }
        }, 1000);
        console.log("cooldown1 == 'savedskillCooldown1'");
    }
}

function getSkill2Opacity() {
    skill2.opacity = opacity;
    return skill2.style.opacity;
}

function getSkill2Cooldown() {
    return cooldown2.value;
}

function setSkillOpacity2(savedskillOpacity2) {
    skill2.opacity = savedskillOpacity2;

    if (savedskillOpacity2 == '1') {
        console.log("savedskillOpacity2 == '1'");
        skill2.opacity = opacity;
        skill2.style.opacity = '1';

    } else if (savedskillOpacity2 == '0.2') {
        console.log("savedskillOpacity2 == '0.2'");
        skill2.style.opacity = '0.2';
    }
}

function setSkillCooldown2(savedskillCooldown2) {
    cooldown2.value = savedskillCooldown2;
    
    if (savedskillCooldown2 == null) {
        clearInterval(cooldown2Interval);
        skill2.style.backgroundColor = "rgb(255, 255, 255)";
        x2.style.opacity = "1";
        console.log("savedskillCooldown2 == 'null'");
        $(cooldown2).html("");
        $("#100sec2").html("100s");
        clearInterval(cooldown2Interval);
    } else if (savedskillCooldown2 > 0) {
        clearInterval(cooldown2Interval);
        skill2.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
        x2.style.opacity = "0.2";
        $(cooldown2).html(savedskillCooldown2);
        cooldown2Interval = setInterval(() => {
        savedskillCooldown2--;
        $(cooldown2).html(savedskillCooldown2);
        $("#100sec2").html(savedskillCooldown2);
        
        if (savedskillCooldown2 == 0) {
            skill2.style.backgroundColor = "rgb(255, 255, 255)";
            x2.style.opacity = "1";
            console.log("cooldown2 STOP!!!!!!!!");
            $("#100sec2").html("100s");
            skill2.style.opacity = "1";
            $(cooldown2).html("");
            clearInterval(cooldown2Interval);
        }
        }, 1000);
        console.log("cooldown1 == 'savedskillCooldown1'");
    }
}

function getSkill3Opacity() {
    skill3.opacity = opacity;
    return skill3.style.opacity;
}

function getSkill3Cooldown() {
    return cooldown3.value;
}

function setSkillOpacity3(savedskillOpacity3) {
    skill3.opacity = savedskillOpacity3;

    if (savedskillOpacity3 == '1') {
        console.log("savedskillOpacity1 == '3'");
        skill3.opacity = opacity;
        skill3.style.opacity = '1';

    } else if (savedskillOpacity3 == '0.2') {
        console.log("savedskillOpacity3 == '0.2'");
        skill3.style.opacity = '0.2';
    }
}

let cooldown3value;
let coinsMultiply = false;
let coinsDivide = false;
cooldownTimer3 = "5";

function setSkillCooldown3(savedskillCooldown3) {
    cooldown3.value = savedskillCooldown3;
    cooldown3value = cooldown3.value;
    
    if (savedskillCooldown3 == 10) {
        cooldownTimer3 = 5;
    } else if (savedskillCooldown3 == 9) {
        cooldownTimer3 = 4;
    } else if (savedskillCooldown3 == 8) {
        cooldownTimer3 = 3;
    } else if (savedskillCooldown3 == 7) {
        cooldownTimer3 = 2;
    } else if (savedskillCooldown3 == 6) {
        cooldownTimer3 = 1;
    }
  
    if (savedskillCooldown3 == null && coinsMultiply == false) {
        coinsMultiply = false;
        coinsDivide = false;
        clearInterval(cooldown3Interval);
        clearInterval(cooldown3v2Interval);
        skill3.style.backgroundColor = "rgb(255, 255, 255)";
        doublePower.style.opacity = "1";
        //console.log("savedskillCooldown3 == 'null'");
        doublePower.style.filter = "";
        skill3.style.webkitBoxShadow = "none";
        skill3.style.mozBoxShadow = "none";
        skill3.style.boxShadow = "none";
        $(cooldown3).html("");
        $("#duration").html("Duration: ");
        $("#100sec").html("100s");
        clearInterval(cooldown3v2Interval);
        clearInterval(cooldown3Interval);
    } else if (savedskillCooldown3 <= 5 && coinsMultiply == true || savedskillCooldown3 == null && coinsMultiply == true) {
        //console.log("newskillCooldown3");
        skill3.style.webkitBoxShadow = "none";
        skill3.style.mozBoxShadow = "none";
        skill3.style.boxShadow = "none";
        skill3.style.backgroundColor = "rgb(255, 255, 255)";
        doublePower.style.opacity = "1";
        doublePower.style.filter = "";
        clearInterval(cooldown3v2Interval);
        clearInterval(cooldown3Interval);
        $("#duration").html("Duration: ");
        $("#60sec").html("60s");
        $("#100sec").html("100s");
        $(cooldown3).html("");
        if (coinsMultiply == true && cooldown3value <= 5 && cooldown3value > 0) {
            coinsMultiply = false;
            coinsDivide = true;
            //console.log("overwrittenskillCooldown3 > 5");
            doublePower.style.opacity = "0.2";
            $(cooldown3).html(cooldown3value);
            skill3.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
            cooldown3Interval = setInterval(() => {
                cooldown3value--;
                $(cooldown3).html(cooldown3value);
                $("#100sec").html(cooldown3value);
                skill3.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
                clearInterval(cooldown3v2Interval);
                if (cooldown3value == 0) {
                    //console.log("savedskillCooldown3 == 0");
                    $("#duration").html("Duration: ");
                    $("#100sec").html("100s");
                    skill3.style.backgroundColor = "rgb(255, 255, 255)";
                    doublePower.style.opacity = "1";
                    doublePower.style.filter = "";
                    $(cooldown3).html("");
                    skill3.style.webkitBoxShadow = "none";
                    skill3.style.mozBoxShadow = "none";
                    skill3.style.boxShadow = "none";
                    clearInterval(cooldown3v2Interval);
                    clearInterval(cooldown3Interval);
                }
            }, 1000);
        }
    } else if (savedskillCooldown3 >= 6 && coinsMultiply == true) {
        coinsMultiply = true;
        coinsDivide = false;
        doublePower.style.filter = "brightness(130%)";
        doublePower.style.opacity = "1";
        skill3.style.webkitBoxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
        skill3.style.mozBoxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
        skill3.style.boxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
        $(cooldown3).html(cooldown3value);
        clearInterval(cooldown3v2Interval);
        clearInterval(cooldown3Interval);

        cooldown3Interval = setInterval(() => {
            cooldown3value--;
            if (cooldown3value <= 5) {
                coinsMultiply = false;
                coinsDivide = true;
                //console.log("NO")
                $(cooldown3).html(cooldown3value);
                $("#100sec").html(cooldown3value);
                $("#duration").html("Duration: ");
                $("#60sec").html("60s");
            }
            
            $(cooldown3).html(cooldown3value);
                if (cooldown3value == 0) {
                    //console.log("savedskillCooldown3 == 0 nr2");
                    $("#100sec").html("100s");
                    skill3.style.backgroundColor = "rgb(255, 255, 255)";
                    doublePower.style.opacity = "1";
                    doublePower.style.filter = "";
                    skill3.style.webkitBoxShadow = "none";
                    skill3.style.mozBoxShadow = "none";
                    skill3.style.boxShadow = "none";
                    $(cooldown3).html(cooldown3value);
                    clearInterval(cooldown3Interval);
                    $(cooldown3).html("");
                }
        }, 1000); 

        cooldown3v2Interval = setInterval(() => {
            //console.log("savedskillCooldown3 > 5 && overwrittenskillCooldown3 > 5");
            cooldownTimer3--;
            $("#100sec").html(cooldown3value);
            $("#60sec").html(cooldownTimer3);
            $("#duration").html("Time remaining: ");
            skill3.style.backgroundColor = "rgb(255, 255, 254)";
            doublePower.style.filter = "brightness(130%)";
            doublePower.style.opacity = "1";
            skill3.style.webkitBoxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
            skill3.style.mozBoxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
            skill3.style.boxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";

            if (cooldown3value <= 5) {
                //console.log("coins[i].powerBurst = coins[i].powerBurst / 2;coins[i].goldPerClick = coins[i].goldPerClick / 2;");
                for (let i = 0; i < coins.length; i++) {
                    coins[i].powerBurst = coins[i].powerBurst / 2;
                    coins[i].goldPerClick = coins[i].goldPerClick / 2;
                    console.log(coins[i].powerBurst)
                }
                $("#100sec").html(cooldown3value);
                skill3.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
                //console.log("savedskillCooldown3 > 5 && overwrittenskillCooldown3 > 5 BUT savedskillCooldown3 < 5");
                doublePower.style.filter = "";
                skill3.style.webkitBoxShadow = "none";
                skill3.style.mozBoxShadow = "none";
                skill3.style.boxShadow = "none";
                doublePower.style.opacity = "0.2";
                clearInterval(cooldown3v2Interval);
            }
        }, 1000);       
        
    } else if (savedskillCooldown3 >= 6 && coinsMultiply == false) {
        coinsMultiply = true;
        skill3.style.backgroundColor = "rgb(255, 255, 254)";
        doublePower.style.filter = "brightness(130%)";
        doublePower.style.opacity = "1";
        skill3.style.webkitBoxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
        skill3.style.mozBoxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
        skill3.style.boxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
        //console.log("savedskillCooldown3 > 5 && overwrittenskillCooldown3 < 5 | * 2");
        $(cooldown3).html(cooldown3value);
        clearInterval(cooldown3Interval);
        clearInterval(cooldown3v2Interval);

        cooldown3v2Interval = setInterval(() => {
            $(cooldown3).html(cooldown3value);
            cooldownTimer3--;
            $("#100sec").html(cooldown3value);
            $("#60sec").html(cooldownTimer3);
            $("#duration").html("Time remaining: ");
            
            if (cooldown3value <= 5) {
                //console.log("no kuźwa....");
                for (let i = 0; i < coins.length; i++) {
                    coins[i].powerBurst = coins[i].powerBurst / 2;
                    coins[i].goldPerClick = coins[i].goldPerClick / 2;
                }
                clearInterval(cooldown3v2Interval);
            }
        }, 1000);

        cooldown3Interval = setInterval(() => {
            //console.log("interv start");
            cooldown3value--;
            $(cooldown3).html(cooldown3value);
            //console.log("SPAN WORKS");
            $("#100sec").html(cooldown3value);
            $("#60sec").html(cooldownTimer3);
            $("#duration").html("Time remaining: ");
            if (cooldown3value <= 5) {
                coinsMultiply = false;
                $("#duration").html("Duration: ");
                $("#60sec").html("60s");
                //console.log("savedskillCooldown3 > 5 && overwrittenskillCooldown3 < 5 | / 2");
                doublePower.style.filter = "";
                skill3.style.webkitBoxShadow = "none";
                skill3.style.mozBoxShadow = "none";
                skill3.style.boxShadow = "none";
                doublePower.style.opacity = "0.2";
                skill3.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
                $("#100sec").html(cooldown3value);
            }

            if (cooldown3value == 0) {
                //console.log("savedskillCooldown3 == 0 nr3");
                $("#duration").html("Duration: ");
                $("#100sec").html("100s");
                skill3.style.backgroundColor = "rgb(255, 255, 255)";
                doublePower.style.opacity = "1";
                doublePower.style.filter = "";
                $(cooldown3).html("");
                skill3.style.webkitBoxShadow = "none";
                skill3.style.mozBoxShadow = "none";
                skill3.style.boxShadow = "none";
                clearInterval(cooldown3v2Interval);
                clearInterval(cooldown3Interval);
            }
        }, 1000);
            
    } else if (savedskillCooldown3 <= 5 && coinsMultiply == false) {
        clearInterval(cooldown3Interval);
        coinsMultiply = false;
        coinsDivide = true;
        skill3.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
        skill3.style.webkitBoxShadow = "none";
        skill3.style.mozBoxShadow = "none";
        skill3.style.boxShadow = "none";
        doublePower.style.opacity = "0.2";
        doublePower.style.filter = "";
        //console.log("i dupa! A co chciałeś?");
        $(cooldown3).html(cooldown3value);
        
        cooldown3Interval = setInterval(() => {
            cooldown3value--;
            skill3.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
            $(cooldown3).html(cooldown3value);
            $("#100sec").html(cooldown3value);

            if (cooldown3value <= 0) {
                //console.log("zero dup no");
                skill3.style.backgroundColor = "rgb(255, 255, 255)";
                doublePower.style.opacity = "1";
                $(cooldown3).html("");
                $("#100sec").html("100sec");
                clearInterval(cooldown3Interval);
            }
        }, 1000);
    }
}

function getAscentPoints() {
    return ascendPoints;
}

function setAscentPoints(savedAscentPoints) {
    ascendPoints = savedAscentPoints;
    $("#ascendPoints").html(savedAscentPoints);
}

function getDragonLvl() {
    return dragonLvl;
}

function setDragonLvl(savedDragonLvl) {
    dragonLvl = savedDragonLvl;
    $(".points").html(savedDragonLvl);
}

function getAscendPowerBar() {
    return ascendPower.style.display;
}

function setAscendPowerBar(savedAscendPowerBar) {
    ascendPower.style.display = savedAscendPowerBar;
    if (savedAscendPowerBar == 'block') {
        $(".awards").css("width", "120px");
        $(".gold").css("width", "120px");
        ascendPower.style.backgroundColor = "rgba(180, 136, 146, 0.8)";
    } else {
        $(".awards").css("width", "180px");
        $(".gold").css("width", "180px");
    }
}

function getDivFromHelp() {
    return divFromHelp.style.display;
}

function setDivFromHelp(savedDivFromHelp) {
    divFromHelp.style.display = savedDivFromHelp;
    if (closeFlag == false && savedDivFromHelp == "block") {
        console.log("closeFlag == false && savedDivFromHelp == block");
        help.click();
    } else if (closeFlag == true && savedDivFromHelp == "none") {
        console.log("closeFlag == true && savedDivFromHelp == none");
        help.click();
    }
}

function getAchievement() {
    return buttons[0].disabled;
}

function setAchievement(savedAchievement) {
    buttons[0].disabled = savedAchievement;
    if (savedAchievement == true) {
        console.log("savedAchievement == true");
        buttons[0].disabled = true;
        achievements[0].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement == false) {
        let achievement1SavedInterval = setInterval(() => {
            if (score >= achievements[0].score) {
                 
                console.log(savedAchievement+" jeszcze nie był naciśnięty");
                buttons[0].disabled = false;
                achievements[0].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[0]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[0].opacity = opacity;
                achievements[0].style.opacity = 1;
                clearInterval(achievement1SavedInterval);
                
            } else if (score < achievements[0].score && savedAchievement == false) {
                console.log("u got it1");
                buttons[0].disabled = false;
                achievements[0].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[0].disabled = false;
                achievements[0].style.display = "none";
                clearInterval(achievement1SavedInterval);
            }
        }, 100);
    }
}

function getAchievement2() {
    return buttons[1].disabled;
}

function setAchievement2(savedAchievement2) {
    buttons[1].disabled = savedAchievement2;
    if (savedAchievement2 == true) {
        console.log("savedAchievement2 == true");
        buttons[1].disabled = true;
        achievements[1].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement2 == false) {
        let achievement2SavedInterval = setInterval(() => {
            if (score >= achievements[1].score) {
                console.log(savedAchievement2+" jeszcze nie był naciśnięty");
                buttons[1].disabled = false;
                achievements[1].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[1]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[1].opacity = opacity;
                achievements[1].style.opacity = 1;
                clearInterval(achievement2SavedInterval);
            } else if (score < achievements[1].score && savedAchievement2 == false) {
                console.log("u got it2");
                buttons[1].disabled = false;
                achievements[1].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[1].disabled = false;
                achievements[1].style.display = "none";
                clearInterval(achievement2SavedInterval);
            }
        }, 100);
    }
}

function getAchievement3() {
    return buttons[2].disabled;
}

function setAchievement3(savedAchievement3) {
    buttons[2].disabled = savedAchievement3;
    if (savedAchievement3 == true) {
        console.log("savedAchievement3 == true");
        buttons[2].disabled = true;
        achievements[2].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement3 == false) {
        let achievement3SavedInterval = setInterval(() => {
            if (score >= achievements[2].score) {
                 
                console.log(savedAchievement3+" jeszcze nie był naciśnięty");
                buttons[2].disabled = false;
                achievements[2].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[2]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[2].opacity = opacity;
                achievements[2].style.opacity = 1;
                clearInterval(achievement3SavedInterval);
                
            } else if (score < achievements[2].score && savedAchievement3 == false) {
                console.log("u got it3");
                buttons[2].disabled = false;
                achievements[2].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[2].disabled = false;
                achievements[2].style.display = "none";
                clearInterval(achievement3SavedInterval);
            }
        }, 100);
    }
}

function getAchievement4() {
    return buttons[3].disabled;
}

function setAchievement4(savedAchievement4) {
    buttons[3].disabled = savedAchievement4;
    if (savedAchievement4 == true) {
        console.log("savedAchievement4 == true");
        buttons[3].disabled = true;
        achievements[3].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement4 == false) {
        let achievement4SavedInterval = setInterval(() => {
            if (score >= achievements[3].score) {
                 
                console.log(savedAchievement4+" jeszcze nie był naciśnięty");
                buttons[3].disabled = false;
                achievements[3].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[3]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[3].opacity = opacity;
                achievements[3].style.opacity = 1;
                
                clearInterval(achievement4SavedInterval);
                
            } else if (score < achievements[3].score && savedAchievement4 == false) {
                console.log("u got it4");
                buttons[3].disabled = false;
                achievements[3].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[3].disabled = false;
                achievements[3].style.display = "none";
                clearInterval(achievement4SavedInterval);
            }
        }, 100);
    }
}

function getAchievement5() {
    return buttons[4].disabled;
}

function setAchievement5(savedAchievement5) {
    buttons[4].disabled = savedAchievement5;
    if (savedAchievement5 == true) {
        console.log("savedAchievement5 == true");
        buttons[4].disabled = true;
        achievements[4].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement5 == false) {
        let achievement5SavedInterval = setInterval(() => {
            if (score >= achievements[4].score) {
                 
                console.log(savedAchievement5+" jeszcze nie był naciśnięty");
                buttons[4].disabled = false;
                achievements[4].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[4]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[4].opacity = opacity;
                achievements[4].style.opacity = 1;
                
                clearInterval(achievement5SavedInterval);
                
            } else if (score < achievements[4].score && savedAchievement5 == false) {
                console.log("u got it5");
                buttons[4].disabled = false;
                achievements[4].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[4].disabled = false;
                achievements[4].style.display = "none";
                clearInterval(achievement5SavedInterval);
            }
        }, 100);
    }
}

function getAchievement6() {
    return buttons[5].disabled;
}

function setAchievement6(savedAchievement6) {
    buttons[5].disabled = savedAchievement6;
    if (savedAchievement6 == true) {
        console.log("savedAchievement6 == true");
        buttons[5].disabled = true;
        achievements[5].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement6 == false) {
        let achievement6SavedInterval = setInterval(() => {
            if (score >= achievements[5].score) {
                 
                console.log(savedAchievement6+" jeszcze nie był naciśnięty");
                buttons[5].disabled = false;
                achievements[5].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[5]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[5].opacity = opacity;
                achievements[5].style.opacity = 1;
                
                clearInterval(achievement6SavedInterval);
                
            } else if (score < achievements[5].score && savedAchievement6 == false) {
                console.log("u got it6");
                buttons[5].disabled = false;
                achievements[5].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[5].disabled = false;
                achievements[5].style.display = "none";
                clearInterval(achievement6SavedInterval);
            }
        }, 100);
    }
}

function getAchievement7() {
    return buttons[6].disabled;
}

function setAchievement7(savedAchievement7) {
    buttons[6].disabled = savedAchievement7;
    if (savedAchievement7 == true) {
        console.log("savedAchievement7 == true");
        buttons[6].disabled = true;
        achievements[6].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement7 == false) {
        let achievement7SavedInterval = setInterval(() => {
            if (score >= achievements[6].score) {
                 
                console.log(savedAchievement7+" jeszcze nie był naciśnięty");
                buttons[6].disabled = false;
                achievements[6].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[6]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[6].opacity = opacity;
                achievements[6].style.opacity = 1;
                
                clearInterval(achievement7SavedInterval);
                
            } else if (score < achievements[6].score && savedAchievement7 == false) {
                console.log("u got it7");
                buttons[6].disabled = false;
                achievements[6].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[6].disabled = false;
                achievements[6].style.display = "none";
                clearInterval(achievement7SavedInterval);
            }
        }, 100);
    }
}

function getAchievement8() {
    return buttons[7].disabled;
}

function setAchievement8(savedAchievement8) {
    buttons[7].disabled = savedAchievement8;
    if (savedAchievement8 == true) {
        console.log("savedAchievement8 == true");
        buttons[7].disabled = true;
        achievements[7].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement8 == false) {
        let achievement8SavedInterval = setInterval(() => {
            if (score >= achievements[7].score) {
                 
                console.log(savedAchievement8+" jeszcze nie był naciśnięty");
                buttons[7].disabled = false;
                achievements[7].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[7]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[7].opacity = opacity;
                achievements[7].style.opacity = 1;
                
                clearInterval(achievement8SavedInterval);
                
            } else if (score < achievements[7].score && savedAchievement8 == false) {
                console.log("u got it8");
                buttons[7].disabled = false;
                achievements[7].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[7].disabled = false;
                achievements[7].style.display = "none";
                clearInterval(achievement8SavedInterval);
            }
        }, 100);
    }
}

function getAchievement9() {
    return buttons[8].disabled;
}

function setAchievement9(savedAchievement9) {
    buttons[8].disabled = savedAchievement9;
    if (savedAchievement9 == true) {
        console.log("savedAchievement9 == true");
        buttons[8].disabled = true;
        achievements[8].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement9 == false) {
        let achievement9SavedInterval = setInterval(() => {
            if (score >= achievements[8].score) {
                 
                console.log(savedAchievement9+" jeszcze nie był naciśnięty");
                buttons[8].disabled = false;
                achievements[8].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[8]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[8].opacity = opacity;
                achievements[8].style.opacity = 1;
                
                clearInterval(achievement9SavedInterval);
                
            } else if (score < achievements[8].score && savedAchievement9 == false) {
                console.log("u got it9");
                buttons[8].disabled = false;
                achievements[8].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[8].disabled = false;
                achievements[8].style.display = "none";
                clearInterval(achievement9SavedInterval);
            }
        }, 100);
    }
}

function getAchievement10() {
    return buttons[9].disabled;
}

function setAchievement10(savedAchievement10) {
    buttons[9].disabled = savedAchievement10;
    if (savedAchievement10 == true) {
        console.log("savedAchievement10 == true");
        buttons[9].disabled = true;
        achievements[9].remove();
        window.clearInterval(instance);
        window.clearInterval(opacityDown);
    } else if (savedAchievement10 == false) {
        let achievement10SavedInterval = setInterval(() => {
            if (score >= achievements[9].score) {
                 
                console.log(savedAchievement10+" jeszcze nie był naciśnięty");
                buttons[9].disabled = false;
                achievements[9].style.display = "block";
                document.querySelector(".achievementTable").appendChild(achievements[9]);
                window.clearInterval(instance);
                window.clearInterval(opacityDown);
                achievements[9].opacity = opacity;
                achievements[9].style.opacity = 1;
                
                clearInterval(achievement10SavedInterval);
                
            } else if (score < achievements[9].score && savedAchievement10 == false) {
                console.log("u got it10");
                buttons[9].disabled = false;
                achievements[9].style.display = "none";
            } else {
                console.log("ERROR");
                buttons[9].disabled = false;
                achievements[9].style.display = "none";
                clearInterval(achievement10SavedInterval);
            }
        }, 100);
    }
}

const config = { childList: true, subtree: false };

// Tworzenie nowego obserwatora mutacji ze wskazaniem na element ".achievementTable"
const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            for (let i = 0; i < achievements.length - 1; i++) {
                if (achievements[i].length >= 2) {
                if (achievements[i] !== achievements[i + 1] && achievements[i].nextElementSibling !== achievements[i + 1]) {
                    achievements[i + 1].parentNode.insertBefore(achievements[i], achievements[i + 1]);
                }
                }
            }
        }
    }
});

// Rozpoczęcie obserwowania zmian w ".achievementTable" z zaktualizowaną konfiguracją
observer.observe(document.querySelector('.achievementTable'), config);

settings.addEventListener("click", function() {
    windowOfSettings.style.display = "block";
    //console.log(windowOfSettings.style.display);
    disableInteraction();
});

closeSettings.addEventListener("click", function() {
    windowOfSettings.style.display = "none";
    //console.log(windowOfSettings.style.display);
    enableInteraction();
});

save.addEventListener("click", function() {
    let savedScore = getScore();
    let savedLvl1 = getLvl1();
    let savedLvl2 = getLvl2();
    let savedLvl3 = getLvl3();
    let savedLvl4 = getLvl4();
    let savedLvl1cost = getLvl1cost();
    let savedLvl2cost = getLvl2cost();
    let savedLvl3cost = getLvl3cost();
    let savedLvl4cost = getLvl4cost();
    let savedCoinPowerBurst = getCoinPowerBurst();
    let savedCoinGoldPerClick = getCoinGoldPerClick();
    let savedBanknotePowerBurst = getBanknotePowerBurst();
    let savedBanknoteGoldPerClick = getBanknoteGoldPerClick();
    let savedGoldBarPowerBurst = getGoldBarPowerBurst();
    let savedGoldBarGoldPerClick = getGoldBarGoldPerClick();
    let savedBitCoinPowerBurst = getBitCoinPowerBurst();
    let savedBitCoinGoldPerClick = getBitCoinGoldPerClick();
    let savedClonedBodies = getClonedBodies();
    let savedPiggyBank = getPiggyBank();
    let savedWallet = getWallet();
    let savedBoardInc = getBoardInc();
    let savedskillOpacity1 = getSkill1Opacity();
    let savedskillOpacity2 = getSkill2Opacity();
    let savedskillOpacity3 = getSkill3Opacity();
    let savedskillCooldown1 = getSkill1Cooldown();
    let savedskillCooldown2 = getSkill2Cooldown();
    let savedskillCooldown3 = getSkill3Cooldown();
    let savedAscentPoints = getAscentPoints();
    let savedDragonLvl = getDragonLvl();
    let savedAscendPowerBar = getAscendPowerBar();
    let savedDivFromHelp = getDivFromHelp();
    let savedAchievement = getAchievement();
    let savedAchievement2 = getAchievement2();
    let savedAchievement3 = getAchievement3();
    let savedAchievement4 = getAchievement4();
    let savedAchievement5 = getAchievement5();
    let savedAchievement6 = getAchievement6();
    let savedAchievement7 = getAchievement7();
    let savedAchievement8 = getAchievement8();
    let savedAchievement9 = getAchievement9();
    let savedAchievement10 = getAchievement10();
    
    let gameData = {
        savedScore: savedScore,
        savedLvl1: savedLvl1,
        savedLvl2: savedLvl2,
        savedLvl3: savedLvl3,
        savedLvl4: savedLvl4,
        savedLvl1cost: savedLvl1cost,
        savedLvl2cost: savedLvl2cost,
        savedLvl3cost: savedLvl3cost,
        savedLvl4cost: savedLvl4cost,
        savedCoinPowerBurst: savedCoinPowerBurst,
        savedCoinGoldPerClick: savedCoinGoldPerClick,
        savedBanknotePowerBurst: savedBanknotePowerBurst,
        savedBanknoteGoldPerClick: savedBanknoteGoldPerClick,
        savedGoldBarPowerBurst: savedGoldBarPowerBurst,
        savedGoldBarGoldPerClick: savedGoldBarGoldPerClick,
        savedBitCoinPowerBurst: savedBitCoinPowerBurst,
        savedBitCoinGoldPerClick: savedBitCoinGoldPerClick,
        savedClonedBodies: savedClonedBodies,
        savedPiggyBank: savedPiggyBank,
        savedWallet: savedWallet,
        savedBoardInc: savedBoardInc,
        savedskillOpacity1: savedskillOpacity1,
        savedskillOpacity2: savedskillOpacity2,
        savedskillOpacity3: savedskillOpacity3,
        savedskillCooldown1: savedskillCooldown1,
        savedskillCooldown2: savedskillCooldown2,
        savedskillCooldown3: savedskillCooldown3,
        savedAscentPoints: savedAscentPoints,
        savedDragonLvl: savedDragonLvl,
        savedAscendPowerBar: savedAscendPowerBar,
        savedDivFromHelp: savedDivFromHelp,
        savedAchievement: savedAchievement,
        savedAchievement2: savedAchievement2,
        savedAchievement3: savedAchievement3,
        savedAchievement4: savedAchievement4,
        savedAchievement5: savedAchievement5,
        savedAchievement6: savedAchievement6,
        savedAchievement7: savedAchievement7,
        savedAchievement8: savedAchievement8,
        savedAchievement9: savedAchievement9,
        savedAchievement10: savedAchievement10,
    };
    
    //console.log(savedClonedBodies);
    let gameDataString = JSON.stringify(gameData);

    localStorage.setItem('gameData', gameDataString);
    alert('gra zapisana');
});

load.addEventListener("click", function() {
    let gameDataString = localStorage.getItem('gameData');

    if (gameDataString) {
        para.click();
        let gameData = JSON.parse(gameDataString);
        setScore(gameData.savedScore);
        setLvl1(gameData.savedLvl1);
        setLvl2(gameData.savedLvl2);
        setLvl3(gameData.savedLvl3);
        setLvl4(gameData.savedLvl4);
        setLvl1cost(gameData.savedLvl1cost);
        setLvl2cost(gameData.savedLvl2cost);
        setLvl3cost(gameData.savedLvl3cost);
        setLvl4cost(gameData.savedLvl4cost);
        setCoinPowerBurst(gameData.savedCoinPowerBurst);
        setCoinGoldPerClick(gameData.savedCoinGoldPerClick);
        setBanknotePowerBurst(gameData.savedBanknotePowerBurst);
        setBanknoteGoldPerClick(gameData.savedBanknoteGoldPerClick);
        setGoldBarPowerBurst(gameData.savedGoldBarPowerBurst);
        setGoldBarGoldPerClick(gameData.savedGoldBarGoldPerClick);
        setBitCoinPowerBurst(gameData.savedBitCoinPowerBurst);
        setBitCoinGoldPerClick(gameData.savedBitCoinGoldPerClick);
        setClonedBodies(gameData.savedClonedBodies);
        setWallet(gameData.savedWallet);
        setPiggyBank(gameData.savedPiggyBank);
        setBoardInc(gameData.savedBoardInc);
        setSkillOpacity1(gameData.savedskillOpacity1);
        setSkillOpacity2(gameData.savedskillOpacity2);
        setSkillOpacity3(gameData.savedskillOpacity3);
        setSkillCooldown1(gameData.savedskillCooldown1);
        setSkillCooldown2(gameData.savedskillCooldown2);
        setSkillCooldown3(gameData.savedskillCooldown3);
        setAscentPoints(gameData.savedAscentPoints);
        setDragonLvl(gameData.savedDragonLvl);
        setAscendPowerBar(gameData.savedAscendPowerBar);
        setDivFromHelp(gameData.savedDivFromHelp);
        setAchievement(gameData.savedAchievement);
        setAchievement2(gameData.savedAchievement2);
        setAchievement3(gameData.savedAchievement3);
        setAchievement4(gameData.savedAchievement4);
        setAchievement5(gameData.savedAchievement5);
        setAchievement6(gameData.savedAchievement6);
        setAchievement7(gameData.savedAchievement7);
        setAchievement8(gameData.savedAchievement8);
        setAchievement9(gameData.savedAchievement9);
        setAchievement10(gameData.savedAchievement10);
        //alert('Gra wczytana');
    } else {
        alert('Brak zapisu');
    }
    numericalUnits();
});

window.onload = function() {
    let redirectFromIndex = localStorage.getItem('redirectFromIndex');
    if (redirectFromIndex) {
        let gameDataString = localStorage.getItem('gameData');
        let gameData = JSON.parse(gameDataString);

        load.click();

        localStorage.removeItem('redirectFromIndex');
        //localStorage.removeItem('gameData');
    }
}

quit = document.querySelector(".quit");
quit.addEventListener("click", function() {
    window.location = "index.html";
});

dragonButton1.addEventListener("click", function() { addAscendLvl(); });

dragonButton2.addEventListener("click", function() { addAscend10Lvl(); });

help.addEventListener("click", function() {
    if (closeFlag) {
        divFromHelp.style.display = "none";
        console.log(divFromHelp.style.display);
        console.log(closeFlag);
        closeFlag = false;
    } else {
        divFromHelp.style.display = "block";
        console.log(divFromHelp.style.display);
        console.log(closeFlag);
        closeFlag = true;
    }
}); 

close.addEventListener("click", function() {
    divFromHelp.style.display = "none";
    console.log(divFromHelp.style.display);
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() { clickButton(i)});
}

clicker.addEventListener('dragstart', dragStart);
clicker.addEventListener('dragend', dragEnd);

for (const dropzone of dropzones) {
    dropzone.addEventListener('drag', drag);
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', dragDrop);
}

for (let i = 0; i < dump.length; i++) {
    dump[i].addEventListener("drag", function() { drag(i) });
    dump[i].addEventListener("drop", function() { dragDrop(i) });
    dump[i].addEventListener("dragend", function() { dragEnd(i) });
    dump[i].addEventListener("dragleave", function() { dragLeave(i) });
}

awards.addEventListener("click", function() {
    $(".ascendTab").css("display", "none");
    left.style.backgroundColor = "rgba(140, 116, 116, 0.8)";
    ascendPower.style.backgroundColor = "rgba(180, 136, 146, 0.8)";
    awards.style.borderLeft = "none";
    awards.style.borderRight = "none";
    awards.style.borderBottom = "none";
    if (left.style.backgroundColor == "rgba(140, 116, 116, 0.8)" || left.style.backgroundColor == "") {
        gold.style.backgroundColor = "rgba(91, 77, 77, 0.8)";
    }
    gold.style.borderBottom = "2px solid black";
    gold.style.borderRight = "2px solid black";
    ascendPower.style.borderLeft = "2px solid black";
    ascendPower.style.borderRight = "2px solid black";
    ascendPower.style.borderBottom = "2px solid black";
    for (let i =0; i < coinsDivs.length; i++) {
        coinsDivs[i].style.display = "none";
    }
    achievementTable.style.display = "block";
});

gold.addEventListener("click", function() {
    $(".ascendTab").css("display", "none");
    left.style.backgroundColor = "rgba(91, 77, 77, 0.8)";
    ascendPower.style.backgroundColor = "rgba(180, 136, 146, 0.8)";
    awards.style.borderLeft = "2px solid black";
    awards.style.borderRight = "2px solid black";
    awards.style.borderBottom = "2px solid black";
    gold.style.backgroundColor = "";
    gold.style.borderBottom = "none";
    gold.style.borderRight = "none";
    ascendPower.style.borderLeft = "2px solid black";
    ascendPower.style.borderRight = "2px solid black";
    ascendPower.style.borderBottom = "2px solid black";
    for (let i =0; i < coinsDivs.length; i++) {
        coinsDivs[i].style.display = "flex";
    }

    achievementTable.style.display = "none";
});

ascendPower.addEventListener("click", function() {
    left.style.backgroundColor = "rgba(180, 136, 146, 0.8)";
    gold.style.backgroundColor = "rgba(91, 77, 77, 0.8)";
    ascendPower.style.backgroundColor = "";
    achievementTable.style.display = "none";
    ascendPower.style.borderLeft = "none";
    ascendPower.style.borderBottom = "none";
    awards.style.borderLeft = "2px solid black";
    awards.style.borderRight = "2px solid black";
    awards.style.borderBottom = "2px solid black";
    gold.style.borderBottom = "2px solid black";
    gold.style.borderRight = "2px solid black";
    for (let i =0; i < coinsDivs.length; i++) {
        coinsDivs[i].style.display = "none";
    }
    $("#ascendPoints").html(ascendPoints);
    $(".ascendTab").css("display", "block");
});

skill1.addEventListener("click", function() {
    if (skill1.style.opacity == "1") {
        cooldown1.value = "10";
        skill1.style.opacity = "0.2";
        $(cooldown1).html("100");
        score = score + 100;
        numericalUnits();
        cooldown1Interval = setInterval(() => {
            cooldown1.value--;
            $(cooldown1).html(cooldown1.value);
            $("#100sec1").html(cooldown1.value);
            if (cooldown1.value == 0) {
                $("#100sec1").html("100s");
                clearInterval(cooldown1Interval);
                skill1.style.opacity = "1";
                $(cooldown1).html("");
            }
        }, 1000);
    }
});
cooldown1
skill2.addEventListener("click", function() {
    if (skill2.style.backgroundColor == "rgb(255, 255, 255)") {
        cooldown2.value = "10";
        skill2.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
        x2.style.opacity = "0.2";
        $(cooldown2).html("100");
        score = score * 2;
        numericalUnits();
        cooldown2Interval = setInterval(() => {
            cooldown2.value--;
            $(cooldown2).html(cooldown2.value);
            $("#100sec2").html(cooldown2.value);
            if (cooldown2.value == 0) {
                $("#100sec2").html("100s");
                clearInterval(cooldown2Interval);
                skill2.style.backgroundColor = "rgb(255, 255, 255)";
                x2.style.opacity = "1";
                $(cooldown2).html("");
            }
        }, 1000);
        return;
    }
});

skill3.addEventListener("click", function() {
    if (skill3.style.backgroundColor == "rgb(255, 255, 255)") {
        coinsDivide = false;
        coinsMultiply = true;
        cooldown3.value = "10";
        cooldownTimer3 = "5";
        skill3.style.backgroundColor = "rgb(255, 255, 254)";
        doublePower.style.filter = "brightness(130%)";
        
        $(cooldown3).html(cooldown3.value);
        for (let i = 0; i < coins.length; i++) {
            coins[i].goldPerClick = coins[i].goldPerClick * 2;
            coins[i].powerBurst = coins[i].powerBurst * 2;
        }
        
        skill3.style.webkitBoxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
        skill3.style.mozBoxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
        skill3.style.boxShadow = "0px 0px 3px 1px rgba(216, 202, 0, 1), inset 0px 0px 3px 1px rgba(216, 202, 0, 1)";
        
        cooldown3v2Interval = setInterval(() => {
            cooldownTimer3--;
            $("#100sec").html(cooldown3.value);
            $("#duration").html("Time remaining: ");
            $("#60sec").html(cooldownTimer3);
            
            if (cooldownTimer3 <= 0) {
                for (let i = 0; i < coins.length; i++) {
                    coinsMultiply = false;
                    coinsDivide = true;
                    coins[i].powerBurst = coins[i].powerBurst / 2;
                    coins[i].goldPerClick = coins[i].goldPerClick / 2;
                    skill3.style.webkitBoxShadow = "none";
                    skill3.style.mozBoxShadow = "none";
                    skill3.style.boxShadow = "none";
                    doublePower.style.opacity = "0.2";
                }
                    clearInterval(cooldown3v2Interval);
            }
        }, 1000);
        
        cooldown3Interval = setInterval(() => {
            if (cooldownTimer3 == 0) {
                $("#100sec").html(cooldown3.value);
                $("#duration").html("Duration: ");
                $("#60sec").html("60s");
                skill3.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
            }
            
            cooldown3.value--;
            $(cooldown3).html(cooldown3.value);
            if (cooldown3.value == 0) {
                $("#100sec").html("100s");
                $("#duration").html("Duration: ");
                $("#60sec").html("60s");
                clearInterval(cooldown3Interval);
                skill3.style.backgroundColor = "rgb(255, 255, 255)";
                doublePower.style.opacity = "1";
                doublePower.style.filter = "";
                $(cooldown3).html("");
            }
            
        }, 1000);
    }
});

para.addEventListener("click", function() {
    clicker.parentNode.removeChild(clicker);
    start.appendChild(clicker);
    $("#clickerShadow").css("display", "none");
    //event.target.removeChild(dragged);
    //$("#coin").empty();
    if (clicker.parentNode == start) {
        console.log("clicker inside zone");
        $("#clickerShadow").css("display", "none");
    }
    //$("#clicker").html(zone.html());
    window.clearInterval(autoClicks); //lub// //errorMultipy = true;
    para.remove();
    for (let i = 0; i < dump.length; i++) {
        $(dump[i]).removeClass('active');
        $(clicker).css('background', 'url("img/clicker.png")');
        window.clearInterval(autoClicks);
    }

    for (let j = 0; j < lvlAll.length; j++) {
        $(lvlAll[j]).css('color', '');
        window.clearInterval(autoClicks);
    }
});

document.getElementById('coin').addEventListener('click', createShapeClickHandler('circle', 'img/coinRain.png'));
document.getElementById('banknote').addEventListener('click', createShapeClickHandler('banknote', 'img/banknote.jpg'));
document.getElementById('goldBar').addEventListener('click', createShapeClickHandler('goldBar', 'img/goldbar.png'));
document.getElementById('bitCoin').addEventListener('click', createShapeClickHandler('circle', 'img/bitcoin.webp'));

for (let i = 0; i < lvlUps.length; i++) {
    lvlUps[i].addEventListener("click", function() { lvlUpgrade(i) });
}

for (let i = 0; i < lvl10Ups.length; i++) {
    lvl10Ups[i].addEventListener("click", function() { lvl10Upgrade(i) });
}

for (let i = 0; i < achievements.length; i++) {
    window.addEventListener("load", function() { AchievementDisplay(i); });
}

for (let i = 0; i < bonus.length; i++) {
    window.addEventListener("load", function() { time(i); });
}

for (let i = 0; i < frames.length; i++) {
    window.addEventListener("load", function() { unblockFrames(i); });
}

for (let i = 0; i < coins.length; i++) {
    coins[i].addEventListener("click", function() { getMoney(i); });
}

for (let i = 0; i < bonus.length; i++) {
    bonus[i].addEventListener("click", function() { getIncome(i); });
}

window.addEventListener("load", function() { roundingZeros(); });
function roundingZeros() {
    numericalUnits();
}

for (let i = 0; i < coins.length; i++) {
    coins[i].addEventListener("mouseover", function() { numericalUnits2(i); });
}

for (let i = 0; i < lvlUps.length; i++) {
    lvlUps[i].addEventListener("mouseover", function() { numericalUnits3(i); });
}

for (let i = 0; i < lvl10Ups.length; i++) {
    lvl10Ups[i].addEventListener("mouseover", function() { numericalUnits4(i); });
}