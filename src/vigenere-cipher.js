const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

	constructor(isMachineDirect = true) {
		this.isMachineDirect = isMachineDirect;
		this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		this.vigenereTable = this.createVigenereTable();
	}

	createVigenereTable() {
		const alphabet = this.alphabet
		const vigenereTable = [];

		// На основе латинского алфавита создаем таблицу Виженера,
		// где каждая строка начинается с последовательной буквы алфавита,
		// а каждый столбец смещен на одну букву:

		for (let i = 0; i < alphabet.length; i++) {
			const tableRow = [];

			for (let j = 0; j < alphabet.length; j++) {
				const charIndex = (j + i) % alphabet.length;
				tableRow.push(alphabet.charAt(charIndex));
			}
			vigenereTable.push(tableRow);
		}
		return vigenereTable;
	}

	encrypt(message, key) {

		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}
		const alphabet = this.alphabet
		const vigenereTable = this.vigenereTable
		message = message.toUpperCase();
		key = key.toUpperCase();
		let result = '';
		let keyIndex = 0;

		// записываем ключ циклически до тех пор, пока его длина
		// не будет соответствовать длине исходного текста:

		while (key.length < message.length) {
			key += key;
		}

		for (let i = 0; i < message.length; i++) {

			const messageChar = message[i]; // символ исходного текста
			const keyChar = key[keyIndex]; // символ ключевого слова
			// Находим в таблице строку, соответствующую символу ключевого слова:
			const rowNumber = alphabet.indexOf(keyChar);
			// Находим в таблице столбец, соответствующую символу исходного текста:
			const columnNumber = alphabet.indexOf(messageChar);

			if (alphabet.includes(messageChar) && (messageChar !== ' ')) {
				// Cимвол зашифрованного текста находится на пересечении найденных строки и столбца в таблице:
				result += vigenereTable[rowNumber][columnNumber];
				keyIndex++;
			} else {
				result += messageChar;
			}
		}
		if (!this.isMachineDirect) {
			return result.split('').reverse().join('');
		}
		return result;
	}

	decrypt(string, key) {
		if (!string || !key) {
			throw new Error('Incorrect arguments!');
		}
		const alphabet = this.alphabet
		const vigenereTable = this.vigenereTable
		string = string.toUpperCase();
		key = key.toUpperCase();
		let result = '';
		let keyIndex = 0;

		while (key.length < string.length) {
			key += key;
		}
		for (let i = 0; i < string.length; i++) {

			const stringChar = string[i]; // символ исходного текста
			const keyChar = key[keyIndex]; // символ ключевого слова

			// Находим в таблице строку, соответствующую символу ключевого слова
			const row = vigenereTable[alphabet.indexOf(keyChar)]
			// В данной строке находим символ зашифрованного текста
			// Столбец, в котором находится данный символ, соответствует символу исходного текста:
			const columnNumber = row.indexOf(stringChar);

			if (alphabet.includes(stringChar) && (stringChar !== ' ')) {
				result += alphabet[columnNumber];
				keyIndex++;
			} else {
				result += stringChar;
			}
		}

		if (!this.isMachineDirect) {
			return result.split('').reverse().join('');
		}
		return result;
	}
}

module.exports = {
	VigenereCipheringMachine
};
