/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
let matches;
 class Phrase {
     constructor(phrase){
         this.phrase = phrase.toLowerCase()
     }
     // This function creates a new li and appends it to the dom for each character in the phrase
     addPhraseToDisplay(){
        const splitPhrase = this.phrase.split('')
        const phraseUl = document.querySelector('#phrase ul');
        splitPhrase.forEach( char => {
        
            const newLi = document.createElement('li');
            newLi.innerHTML = char
            phraseUl.append(newLi);
            newLi.classList.add('hide')

            if( char === ' ') {
                newLi.classList.add('space');
            } else {
                newLi.classList.add('letter');
                newLi.classList.add(char)
            }
        });
     };
//  This function returns true if the letter is contained in the phrase
     checkLetter(phrase, letter){
        for(let i = 0; i < phrase.length; i++){
            if(phrase[i].indexOf(letter) !== -1){
                return true;
            } 
        }
        return false;
     }
// This function changes the css class of the matched letters
     showMatchedLetter(letter){
         matches = document.querySelectorAll('.'+ letter)
         matches.forEach(function(match){
            match.classList.remove('hide');
            match.classList.add('show')
         })
     }
     

 }
