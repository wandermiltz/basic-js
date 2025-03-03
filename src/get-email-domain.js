const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

	let res = email.slice(email.indexOf('@') + 1);
	if (!res.includes('@')) {
		return res;
	} else {
		return getEmailDomain(res)
	}
}

module.exports = {
	getEmailDomain
};
