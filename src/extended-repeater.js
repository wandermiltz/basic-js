const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 * 		'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

	let repeatTimes = options.repeatTimes;
	let separator = options.separator;
	let addition = options.addition;
	let additionRepeatTimes = options.additionRepeatTimes;
	let additionSeparator = options.additionSeparator;

	let string = String(str);

	console.log(string)
	let arrToRepeat = [];
	let resArrOfArrays = [];

	arrToRepeat.push(string);

	if (addition || (addition === false) || (addition === null)) {

		let strAddition = String(addition)

		if (additionRepeatTimes) {
			for (let i = 0; i < additionRepeatTimes; i++) {
				arrToRepeat.push(strAddition);

				if (additionSeparator && i < (additionRepeatTimes - 1)) {
					arrToRepeat.push(additionSeparator);

				} else if (i < (additionRepeatTimes - 1)) {
					arrToRepeat.push('|');
				}
			}
		} else {
			arrToRepeat.push(strAddition);
		}
	}

	if (repeatTimes) {
		for (let i = 0; i < repeatTimes; i++) {
			resArrOfArrays.push(arrToRepeat);
		}
	} else {
		resArrOfArrays.push(arrToRepeat);
	}

	let resArrOfStrings = [];

	resArrOfArrays.forEach(innerArr => {

		let innerStr = '';

		if (innerArr.length > 0) {
			innerStr = innerArr.join('');
		} else {
			innerStr = innerArr[0];
		}
		resArrOfStrings.push(innerStr);
	})

	let resStr = '';

	if (separator) {
		resStr = resArrOfStrings.join(`${separator}`);
	} else {
		resStr = resArrOfStrings.join('+');
	}

	return resStr;
}

module.exports = {
	repeater
};
