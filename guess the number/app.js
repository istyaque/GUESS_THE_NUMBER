const check = document.querySelector('.check');
const number = Math.trunc(Math.random()* 20)  + 1
document.querySelector('.score');
let score = 20;
const body = document.querySelector('body');

// eventListner

check.addEventListener('click', function () {
 const guess = Number(document.querySelector('.guess').value);
 
 if(!guess){
  document.querySelector('.message').textContent = 'No Number';
 }
 else if(guess === number){
    document.querySelector('.message').textContent = 'Correct Number';
    body.classList.add('change');
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = score;
 }
 else if(guess > number){
     
    if(score > 0){
        document.querySelector('.message').textContent = 'Too High !';
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'Chance Over';
    }
    
    
 }
 else if(guess < number){

    if (score > 0 ){
        document.querySelector('.message').textContent = 'Too Low !';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'Chance Over';
    }
    
  
 }
});

// Reset of game --->

const again = document.querySelector('.again');

again.addEventListener('click', function(){
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 0;
  number = Math.trunc(Math.random()* 20)  + 1
  document.querySelector('.guess').value = '';
  document.body.classList.add('agn');
  
})