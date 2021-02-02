export const groupWords = words => new Promise((resolve, reject) => {
	try {
		const groupedWords = words.reduce((object, word) =>{

			if (object[word]) {
				object[word] = object[word] + 1;
			} else {
				object[word] = 1;
			}

			return object
		}, {});

		const groupedWordsArray = Object.keys(groupedWords)
			.map(key => ({ name: key, amount: groupedWords[key]}))
			.sort((wordA, wordB) => wordB.amount - wordA.amount);

		resolve(groupedWordsArray);
	} catch (err) {
		reject(err);
	}
})
