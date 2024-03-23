let startGame = document.querySelector(".start");
let continueSavedGame = document.querySelector(".continue");

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