const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

	let arr = n.toString().split('').map(Number);
	let maxNum = 0;

	for (let i = 0; i < arr.length; i++) {
		let subArr = [...arr];
		subArr.splice(i, 1);
		let subNum = parseInt(subArr.join(''))

		if (subNum > maxNum) {
			maxNum = subNum;
		}
	}
	return maxNum
}

module.exports = {
	deleteDigit
};
