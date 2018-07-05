/**
 * generate a random integer between 0 and 100
 */
const random = function(){
    return Math.trunc(Math.random() * 99) + 1;
}

/**
 * decide if userInput is > or <  or = to x
 * @param {Number} x 
 * @param {Number} userInput 
 * @returns {String} return '-' if userInput < x; '+' if userInput > x; '=' if userInput = x
 */
const decide = function(x, userInput){
    if (userInput > x){
        return '+';
    }
    if (userInput < x){
        return '-';
    }
    return '=';
}

// --------------------------------------------------------
function getUserInput(){
    return document.querySelector('#userInput').value;
}

function checkUserInput(){
    let userInput = parseInt(getUserInput());
    if (!(Number.isInteger(userInput) && userInput < 100 && userInput > 0)){
        alert('LOL');
    } 
}

function print(message){
    alert(message);
}

const X = random();

function plusOuMoins(){
    let userInput = getUserInput();
    let result = decide(X, userInput);
    if (result === '='){
        print('Super tu as gagné !');
    }
    if (result === '-' || result === '+'){
        print('Dommage tu es : ' + result);
    }
}