/**
 * generate a random integer between 0 and 100
 */
exports.random = function(){
    return Math.trunc(Math.random() * 99) + 1;
}

/**
 * decide if userInput is > or <  or = to x
 * @param {Number} x 
 * @param {Number} userInput 
 * @returns {String} return '-' if userInput < x; '+' if userInput > x; '=' if userInput = x
 */
exports.decide = function(x, userInput){
    if (userInput > x){
        return '+';
    }
    if (userInput < x){
        return '-';
    }
    return '=';
}