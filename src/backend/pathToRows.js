import fs from 'fs';

export const pathsToRows = paths => new Promise((resolve, reject) => {
	try {
		const rows = paths.map(path => fs.readFileSync(path).toString('utf-8'))
			.reduce((fullText, fileText) => `${fullText}\n${fileText}`)
			.split('\n');
		resolve(rows)
	} catch (err) {
		reject(err);
	}
})
