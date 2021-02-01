// const { ipcMain } = require('electron');
import { ipcMain } from 'electron';

ipcMain.on('process-subtitles', (event, paths) => {
	console.log('paths ->', paths);

	event.reply('process-subtitles', [
		{name: 'i', amount: 1234},
		{name: 'you', amount: 900},
		{name: 'he', amount: 853},
		{name: 'she', amount: 853},
		{name: 'our', amount: 133},
		{name: 'house', amount: 33},
	]);

})
