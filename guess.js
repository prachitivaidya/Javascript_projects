//NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attempts =0;
let guess;
let running = true;

while(running){

    guess= window.prompt(`Guess the Number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Enter a valid number`);
    }
    else if(guess<minNum || guess> maxNum){
        window.alert(`Enter a vaild number`);
    }
    else{
        attempts++;
        if(guess<answer){
        window.alert( `Too lower`);
        } 
        else if(guess>answer){
            window.alert( `Too higher`);
        }
        else{
            window.alert(`Correct you answered in ${attempts} Attempts`);
            running  = false;
        }
    }
    
}