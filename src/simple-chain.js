const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

	arrToChain: [],

	getLength() {
		this.arrToChain.length;
	},
	addLink(value = `(  )`) {
		this.arrToChain.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		if (!this.arrToChain[position - 1]) {
			this.arrToChain = [];
			throw new Error("You can't remove incorrect link!");
		} else {
			this.arrToChain.splice((position - 1), 1);
			return this;
		}
	},
	reverseChain() {
		this.arrToChain.reverse();
		return this;
	},
	finishChain() {
		let finishedChain = this.arrToChain.join('~~');
		this.arrToChain = [];
		return finishedChain;
	}
};

module.exports = {
	chainMaker
};
