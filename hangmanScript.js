let keyboard = document.querySelectorAll('button');
let answer = document.querySelectorAll('p');
let score = document.getElementById('iterate');
const topContainer = document.getElementById('container')
const correctGuesses = document.getElementById('correct');
const guessAmount = document.getElementById('guesses');
const remaingLetters = document.getElementById('remaining');
let guessedLetter = document.getElementsByClassName('hidden-letters');
let wrongCount = document.getElementById('wrong-count');
let icon = document.getElementById('icon');
let currentPost = icon.offsetTop;
let notification = document.getElementById('notication');

let allWords = ["LAKERS", 'CODING', 'PROBLEM', 'CRAZY', 'ANGRY'];
let wordPick = allWords[Math.floor(Math.random() * allWords.length)];
let wrongLetters = [];
let correctLetters = [];

function updateWrongCount(){
    wrongCount.textContent = wrongLetters.length;
    if(wrongLetters.length == 5){
      notication.textContent = "You Lost 😕"
      notification.style.display = 'block';
      for(let i=0; i < guessedLetter.length; i++){
      setTimeout(()=>{
         guessedLetter[i].style.fontSize = '40px';
       },1000)
      }
      playAgain();
    }
}

function moveIcon(){
    currentPost += 100;
    console.log(currentPost);
}


let wordDisplay = wordPick.split('');
remaingLetters.textContent ='Number of Letters in word' + " " + wordDisplay.length;                ///left off. Need to create function that guessAmount text content(maybe each click is a guess? Also once
wrongCount.textContent = wrongLetters.length;                                                                 ///hit 5 guesses display gameover and display whole word). Maybe make function that updates the remaing letters on the board

                                                      ///Maybe make function that updates the remaing letters on the board(probably make a wrong letter array and display the length)


wordDisplay.forEach(item => {
  let div = document.createElement('div');
  div.textContent = item;                        ///not in use
  div.classList.add('hidden-letters');
  correctGuesses.append(div);
});


function correctLetterPressed(letter){
    for(let i = 0; i < guessedLetter.length; i++){
      if(guessedLetter[i].textContent == letter){
         guessedLetter[i].style.fontSize= '40px';
      }
    };
    if(correctLetters.length == wordDisplay.length){
        notification.textContent = "You Won! 😃"
        notification.style.display = 'block';          ///works. Make a notication box pop up.
            playAgain();
    }
}

function playAgain(){
  setTimeout(()=>{
  let play = document.createElement('button');
    play.textContent = "Refresh page to play again"
    container.append(play);
    play.classList.add('play-again');
  },2500)
}

function checkLetter(letter){
      let content = letter.textContent;
       if(wordDisplay.includes(content)){
         if(!correctLetters.includes(content)){
          correctLetters.push(content);
          correctLetterPressed(content);
          }
        }
        else if(!wordDisplay.includes(content)){
          if(!wrongLetters.includes(content)){
            wrongLetters.push(content);
            updateWrongCount();
            moveIcon();
            }
          }
        }



keyboard.forEach(letter=>{
  addEventListener('keydown',(e)=>{
        let keyCode = e.keyCode
    if(keyCode <=90 || keyCode >= 65){
      if(letter.value == keyCode){
        letter.style.backgroundColor = 'red';
         console.log(letter.style.backgroundColor)
          checkLetter(letter);
      }
        }
    });
});
