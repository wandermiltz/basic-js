const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

	let sampleAge

	if ((typeof sampleActivity) !== 'string' || !sampleActivity) {
		return false
	}

	const k = Math.LN2 / HALF_LIFE_PERIOD;
	const sampleActivityNum = Number(sampleActivity)

	if (!isNaN(sampleActivityNum) && sampleActivityNum > 0) {
		sampleAge = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / k);
		if (!isNaN(sampleAge) && sampleAge > 0) {
			return sampleAge
		} else {
			return false
		}
	} else {
		return false
	}
}
module.exports = {
	dateSample
};
