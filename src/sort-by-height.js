const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

	let resArr = [];
	let notSortEl = -1

	function compareNumbers(a, b) {
		return a - b;
	}
	let sortedArr = arr.filter(el => el != (-1)).sort(compareNumbers);
	let index = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == notSortEl) {
			resArr.push(notSortEl);
		} else {
			resArr.push(sortedArr[index]);
			index += 1;
		}
	}
	return resArr;
}

module.exports = {
	sortByHeight
};
