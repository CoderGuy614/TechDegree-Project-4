/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const buttons = document.getElementsByClassName('key')
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', function(){
    game = new Game()
    game.resetGame()
    game.startGame(); 
})
const keys = document.querySelectorAll('.keyrow button')
// Adding event listeners to the letter keys
const addListeners = function(keys){
    for(let i = 0; i < keys.length; i++){
        keys[i].addEventListener('click', function(e){
            game.handleInteraction(e.target.innerHTML)
        })
    }
    document.addEventListener('keyup', function(e){
        game.handleInteraction(e.key)
    })
}

addListeners(keys)
