/** Textual markov chain generator */

module.exports = class MarkovMachine {
	/** build markov machine; read in text.*/

	constructor(text) {
		let words = text.split(/[ \r\n]+/);
		this.words = words.filter((c) => c !== '');
		this.makeChains();
	}

	/** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

	makeChains() {
		// TODO:DONE
		let mm = new Map();

		for (let i = 0; i < this.words.length; i += 1) {
			let word = this.words[i];
			let nextWord = this.words[i + 1] || null;

			if (mm.has(word)) mm.get(word).push(nextWord);
			else mm.set(word, [ nextWord ]);
		}
		this.mm = mm;
	}

	/** return random word from arr */

	static word(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	/** return random text from chains */

	makeText(numWords = 100) {
		// pick a random key to begin
		let keys = Array.from(this.chains.keys());
		let key = MarkovMachine.choice(keys);
		let out = [];

		// produce markov chain until reaching termination word
		while (out.length < numWords && key !== null) {
			out.push(key);
			key = MarkovMachine.choice(this.chains.get(key));
		}
		return out.join(' ');
	}
};
