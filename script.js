let startGame = document.querySelector(".start");
let continueSavedGame = document.querySelector(".continue");
let container = document.querySelector(".container");
startGame.addEventListener("click", function() {
    window.location = "main.html";
});

continueSavedGame.addEventListener("click", function() {
    let gameDataString = localStorage.getItem('gameData');

    if (gameDataString) {
        localStorage.setItem('redirectFromIndex', true);
        localStorage.setItem('gameData', gameDataString);
        window.location = "main.html";
        
        //alert('Gra została wczytana');
    } else {
        alert('Brak zapisanej gry');
    }
});

window.addEventListener("resize", function() {
    //console.log(window.innerHeight)
    //console.log($(container).css("height")+" height")
    if (window.innerWidth < container.clientWidth) {
        $(container).css("height", "100vh");
        $(container).css("width", "calc(100vw * 9 / 16)");
        console.log("width containera rządzi")
    } if (window.innerWidth > container.clientWidth) {
        $(container).css("width", "100vw");
        $(container).css("height", "calc(100vw * 9 / 16)");
        console.log("width windowa rządzi")
    } if (window.innerHeight < container.clientHeight) {
        $(container).css("height", "100vh");
        $(container).css("width", "calc(100vh * 16 / 9)");
        console.log("height containera rządzi")
    } if (window.innerHeight > container.clientHeight) {
        $(container).css("width", "100vw");
        $(container).css("height", "calc(100vw * 9 / 16)");
        console.log("height windowa rządzi")
    }
});