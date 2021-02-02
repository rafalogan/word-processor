export const prepareData = rows => new Promise((resolve, reject) => {
	try {
		const words = rows.filter(filterValidRow)
			.map(removePunctuations)
			.map(removeTags)
			.reduce(mergeRows)
			.split(' ')
			.map(toLower)
			.filter(filterValidRow);

		resolve(words);
	} catch (err) {
		reject(err);
	}
})

const filterValidRow = row => {
	const notNumber = !Number(row.trim());
	const notEmpty = !!row.trim();
	const notInterval = !row.includes('-->')

	return notNumber && notEmpty && notInterval;
}

const removePunctuations = row => row.replace(/[,?!/./-]/g, '').replace('"', '');
const removeTags = row => row.replace(/(<[^>]+)>/gi, '').trim();
const mergeRows = (fullText, row) => `${fullText} ${row}`;
const toLower = word => word.toLowerCase();
