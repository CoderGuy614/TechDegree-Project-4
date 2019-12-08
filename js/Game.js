/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
let prevGuesses =[];
let splitPhraseArray;
let revealedLetters
 class Game {
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }
     /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
createPhrases() {
        let phrases = [];
        phrases[0] = new Phrase('You win some you lose some');
        phrases[1] = new Phrase('It is what it is');
        phrases[2] = new Phrase('Never try never know');
        phrases[3] = new Phrase('United we stand');
        phrases[4] = new Phrase('Time is money');
        return phrases;
        
    }
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {
        const random = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[random];
        }
/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
        document.getElementById('overlay').style.display = "none"
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        splitPhraseArray = this.activePhrase.phrase.split('');
        };
        /**
* Handles the click and keyup events depending on whether they are contained in the phrase
*/
handleInteraction(e) {
            if (prevGuesses.indexOf(e) === -1){
                let clickedLetter = (e)
                let buttons = document.getElementsByClassName('key')
                if(this.activePhrase.checkLetter(splitPhraseArray,clickedLetter)){
                    for(let i = 0; i < buttons.length; i++){
                        if(buttons[i].textContent === clickedLetter){
                            buttons[i].disabled = true;
                            buttons[i].classList.add('chosen')
                        }
                    }
                } else {
                    for(let i = 0; i < buttons.length; i++){
                        if(buttons[i].textContent === clickedLetter){
                            buttons[i].disabled = true;
                            buttons[i].classList.add('wrong')
                            prevGuesses.push(clickedLetter);
                            this.removeLife();
                        }
                    }
                }
                this.activePhrase.showMatchedLetter(clickedLetter)
                if(this.checkForWin()){
                    this.gameOver()
                };
            }
        }
        /**
* Returns true if the all of the letters have been revealed
*/
checkForWin(){
    revealedLetters = document.querySelectorAll('.show')
    let phraseNoSpaces = splitPhraseArray.filter( char => char !== ' ')
    if(revealedLetters.length === phraseNoSpaces.length){
        return true;
    } else {
        return false;
    }
}
// * Removes 1 heart from the available lives
removeLife(){
    let hearts = document.querySelectorAll('.tries img')
        hearts[this.missed].setAttribute('src', 'images/lostHeart.png')
        this.missed +=1;
        if(this.missed === 5){
            this.gameOver()
        }
}
// * Shows the win or loss screen depending on the outcome
gameOver(){
    let overlay = document.getElementById('overlay')
    overlay.style.display = "flex"
    let message = document.getElementById('game-over-message');
    if(this.checkForWin()){
        message.textContent = 'YOU WIN! GOOD JOB!';
        overlay.classList.remove('lose')
        overlay.classList.add('win');
    } else {
        message.textContent = 'SORRY, YOU LOSE! TRY AGAIN!';
        overlay.classList.remove('win');
        overlay.classList.add('lose');
    }
}
// Restores the game state 
resetGame(){
    const hearts = document.querySelectorAll('.tries img')
    hearts.forEach( heart => {heart.setAttribute('src', 'images/liveHeart.png')})
    const lis = document.querySelectorAll('#phrase li')
    lis.forEach( li => li.remove())
    const keys = document.querySelectorAll('.key')
    keys.forEach( key => {key.disabled = false})
    keys.forEach( key => {key.classList.remove('wrong')})
    keys.forEach( key => {key.classList.remove('chosen')})
    prevGuesses = [];
    
}
}
 

