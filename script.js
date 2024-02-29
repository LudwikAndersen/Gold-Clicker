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

coin.goldPerClick = 1;
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
document.getElementById('coin').addEventListener('click', createShapeClickHandler('circle', 'img/coinRain.png'));
document.getElementById('banknote').addEventListener('click', createShapeClickHandler('banknote', 'img/banknote.jpg'));
document.getElementById('goldBar').addEventListener('click', createShapeClickHandler('goldBar', 'img/goldbar.png'));
document.getElementById('bitCoin').addEventListener('click', createShapeClickHandler('circle', 'img/bitcoin.webp'));


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

$(ascend).on("click", function(event) {
    //ascendClicked = true;
    ascendCount++;
    //ascendClick = true;
    $(frames).css('display', 'none');
    isFunctionEnabled = false;
    resetGame();
    ascendion();
    if (!isFunctionEnabled) {
        clearAll()
        console.log("funkcja wyłączona");
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
            $(".ascendPoints").html("You have <span style='color:blue'>"+ascendPoints+" ascend points</span> Use them carefully!");
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
            $(".ascendPoints").html("You have <span style='color:blue'>"+ascendPoints+" ascend points</span> Use them carefully!");
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
            $(".ascendPoints").html("You have <span style='color:blue'>"+ascendPoints+" ascend points</span> Use them carefully!");
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
        $(".ascendPoints").html("You have <span style='color:blue'>"+ascendPoints+" ascend points</span> Use them carefully!");
    } else {
        bitCoin.goldPerClick = bitCoin.originalGoldPerClick;
    }
});

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
    $(".board").html("Coins per second: <span>0</span>");
    for (i = 0; i < lvls.length; i++) {
        levels[i] = 1;
        $(lvls[i]).html("lvl 1");
    }
    
    for (let i = 0; i < bonus.length; i++) {
        addBonusIfNeeded(i);
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
        $(".ascendPoints").html("You have "+"<span style='color:blue'>"+ascendPoints+" ascend points"+"</span>"+" Use them carefully!");
        $(".ascendTab").css("display", "block");
    });
    
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
        
        $(".ascendPoints").html("You have "+"<span style='color:blue'>"+ascendPoints+" ascend points"+"</span>"+" Use them carefully!");
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

dragonButton1.addEventListener("click", function() { addAscendLvl(); });

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
let dragonButton2 = document.querySelector(".dragonButton2");
dragonButton2.addEventListener("click", function() { addAscend10Lvl(); });
let closeFlag = false;
let help = document.querySelector(".help");
let divFromHelp = document.querySelector(".divFromHelp");
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

let close = document.querySelector(".close");

close.addEventListener("click", function() {
    divFromHelp.style.display = "none";
    console.log(divFromHelp.style.display);
});
/*
help.ondblclick = function() {
    if (closeFlag == true) {
        divFromHelp.style.display = "none";
        console.log(divFromHelp.style.display);
    }
    
    closeFlag = false;
}
*/
function getIncome(nr) {
    isFunctionEnabled = true;
    console.log(isFunctionEnabled)
    if (isFunctionEnabled) {
        console.log(isFunctionEnabled)
        console.log("funkcja włączona")
        if (bonus[nr] && score >= bonus[nr].price) {
            incomeTimeout = setTimeout(() => {
                    score = score - bonus[nr].price;
                    numericalUnits();
            }, 100);
                
            incomeInterval = setInterval(() => {
                score = score + bonus[nr].income;
                numericalUnits();
            }, "1000");
    
            infoInterval = setInterval(() => {
                $(infoGoldGain).html("");
            }, "5000");
    
            boardIncome = boardIncome + bonus[nr].income;
            $(board).html('Coins per second: '+'<span>'+boardIncome+'</span>');
    
            $(infoGoldGain).html('<span style="color:rgb(189, 29, 15);">'+'-'+bonus[nr].price+'</span>');
        } else {return;}
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
        if (achievements[nr].style.opacity > 0) {
            achievements[nr].style.opacity -= .1;
        }
    }, "50");

    instance = setInterval((i) => {
        if (achievements[nr].style.opacity <= 0) {
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

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() { clickButton(i)});
}

const para = document.createElement("div");
const start = document.getElementById("zone");
const dropzones = document.querySelectorAll(".dropzone");
let flag2 = false;
let flag3 = false;
let autoClicks;
let lvlUpsInterval;
clicker.draggable="true";
clicker.addEventListener('dragstart', dragStart);
clicker.addEventListener('dragend', dragEnd);
let errorMultipy = true;

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

const awards = document.getElementById("awards");
const gold = document.getElementById("gold");
const left = document.getElementById("left");
const coinsDivs = document.getElementsByClassName("coins");

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

skill1.style.opacity = opacity;
skill1.addEventListener("click", function() {
    if (skill1.style.opacity == "1") {
        cooldown1.value = "100";
        skill1.style.opacity = "0.2";
        $(cooldown1).html("100");
        score = score + 100;
        numericalUnits();
        let cooldown100 = setInterval(() => {
            cooldown1.value--;
            $(cooldown1).html(cooldown1.value);
            $(tip1).html("<span style='color:rgb(255, 255, 0);'>Fortune</span> - gives <span style='color:green'>100$</span>"+"<br/><br/>"+"Cooldown: "+"<span style='color:rgb(77, 76, 76);'>"+cooldown1.value+"s"+"</span>");
            if (cooldown1.value == 0) {
                $(tip1).html("<span style='color:rgb(255, 255, 0);'>Fortune</span> - gives <span style='color:green'>100$</span>"+"<br/><br/>"+"Cooldown: "+"<span style='color:rgb(77, 76, 76);'>100s</span>");
                clearInterval(cooldown100);
                skill1.style.opacity = "1";
                $(cooldown1).html("");
            }
        }, 1000);
    }
});
let cooldown100;

const x2 = document.querySelector(".x2");
skill2.style.backgroundColor = "rgb(255, 255, 255)";
skill2.addEventListener("click", function() {
    if (skill2.style.backgroundColor == "rgb(255, 255, 255)") {
        cooldown2.value = "100";
        skill2.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
        x2.style.opacity = "0.2";
        $(cooldown2).html("100");
        score = score * 2;
        numericalUnits();
        cooldown100 = setInterval(() => {
            cooldown2.value--;
            $(cooldown2).html(cooldown2.value);
            $(tip2).html("<span style='color:rgb(255, 255, 0);'>Double wealth</span> - x2 your wealth."+"<br/><br/>"+"Cooldown: "+"<span style='color:rgb(77, 76, 76);'>"+cooldown2.value+"s"+"</span>");
            if (cooldown2.value == 0) {
                $(tip2).html("<span style='color:rgb(255, 255, 0);'>Double wealth</span> - x2 your wealth."+"<br/><br/>"+"Cooldown: "+"<span style='color:rgb(77, 76, 76);'>100s</span>");
                clearInterval(cooldown100);
                skill2.style.backgroundColor = "rgb(255, 255, 255)";
                x2.style.opacity = "1";
                $(cooldown2).html("");
            }
        }, 1000);
        return;
    }
});

skill3.style.backgroundColor = "rgb(255, 255, 255)";

const doublePower = document.getElementById("doublePower");
let cooldown3v2;
let cooldown100v2;
skill3.addEventListener("click", function() {
    if (skill3.style.backgroundColor == "rgb(255, 255, 255)") {
        cooldown3.value = "100";
        cooldown3v2 = "6";
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
        
        cooldown100v2 = setInterval(() => {
            cooldown3v2--;
            $(tip3).html("<span style='color:rgb(255, 255, 0);'>Double power</span> - x2 coins per click for 60 seconds."+"<br/><br/>"+"Cooldown: "+"<span style='color:rgb(77, 76, 76);'>"+cooldown3.value+"s"+"</span>"+"<br/><br/>"+"Time remaining: "+"<span style='color:rgb(77, 76, 76);'>"+cooldown3v2+"s"+"</span>");
            
            if (cooldown3v2 <= 0) {
                for (let i = 0; i < coins.length; i++) {
                    coins[i].powerBurst = coins[i].powerBurst / 2;
                    coins[i].goldPerClick = coins[i].goldPerClick / 2;
                    skill3.style.webkitBoxShadow = "none";
                    skill3.style.mozBoxShadow = "none";
                    skill3.style.boxShadow = "none";
                    doublePower.style.opacity = "0.2";
                }
                    clearInterval(cooldown100v2);
            }
        }, 1000);
        
        let cooldown100 = setInterval(() => {
            if (cooldown3v2 == 0) {
                $(tip3).html("<span style='color:rgb(255, 255, 0);'>Double power</span> - x2 coins per click for 60 seconds."+"<br/><br/>"+"Cooldown: "+"<span style='color:rgb(77, 76, 76);'>"+cooldown3.value+"s"+"</span>"+"<br/><br/>"+"Duration: "+"<span style='color:rgb(77, 76, 76);'>60s</span>");
                skill3.style.backgroundColor = "rgb(255, 255, 255, 0.1)";
            }
            
            cooldown3.value--;
            $(cooldown3).html(cooldown3.value);
            if (cooldown3.value == 0) {
                $(tip3).html("<span style='color:rgb(255, 255, 0);'>Double power</span> - x2 coins per click for 60 seconds."+"<br/><br/>"+"Cooldown: "+"<span style='color:rgb(77, 76, 76);'>100s</span>"+"<br/><br/>"+"Duration: "+"<span style='color:rgb(77, 76, 76);'>60s</span>");
                clearInterval(cooldown100);
                skill3.style.backgroundColor = "rgb(255, 255, 255)";
                doublePower.style.opacity = "1";
                $(cooldown3).html("");
            }
            
        }, 1000);
    }
});

let cooldowns = [cooldown1 ,cooldown2 ,cooldown3];
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
    } else if (score >= 1000000000000000 && score < new BigNumber('100000000000000001').minus('1').toFixed()) { 
        $(".score").html((score / 1000000000000000).toFixed(3)+"T");
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