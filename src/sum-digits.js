const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let x = String(n);
    let result = 0;
    while (true) {
        result = 0;
        x = String(x)
        for (let i = 0; i < x.length; i = i + 1){
            result = result + Number(x[i]);
        }
        console.log(x)
        x = result;
        if (String(x).length < 2){
            break
        }
    }
  return x;
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
