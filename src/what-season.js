const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

	if (!date) {
		return 'Unable to determine the time of year!'
	}

	if (Object.prototype.toString.call(date) !== '[object Date]' || date.hasOwnProperty('toString')) {
		throw new Error('Invalid date!')
	}

	let month = date.getMonth()

	if (month < 2 || month == 11) {
		return 'winter'
	}
	if (month > 7) {
		return 'autumn'
	}
	if (month > 4) {
		return 'summer'
	}
	if (month > 1) {
		return 'spring'
	}
}
module.exports = {
	getSeason
};
