const assert = require('assert');

function checkIfPalindrome(palindrome) {
	let verif = palindrome.split("").reverse().join("");
      if (palindrome === verif) {
          return true;
      }
      else {
          return false;
      }
}


assert.strictEqual(checkIfPalindrome('bob'), true);
console.log('--- OK ---')
assert.strictEqual(checkIfPalindrome('sonos'), true);
console.log('--- OK ---')
assert.strictEqual(checkIfPalindrome('kayak'), true);
console.log('--- OK ---')
assert.strictEqual(checkIfPalindrome('jessica'), false);
console.log('--- OK ---')
assert.strictEqual(checkIfPalindrome('Wild Code School'), false);
console.log('--- OK ---')
assert.strictEqual(checkIfPalindrome('javascript'), false);
console.log('--- OK ---')

