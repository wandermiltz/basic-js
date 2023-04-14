const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

	let resArr = [];
	const arr = str.split('');
	let count = 1;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] != arr[i + 1]) {
			if (count == 1) {
				resArr.push(arr[i]);
			} else if (count > 1) {
				resArr.push(`${count}${arr[i]}`);
				count = 1;
			}
		} else if (arr[i] == arr[i + 1]) {
			count += 1;
		}
	}
	return resArr.join('')
}


module.exports = {
	encodeLine
};
