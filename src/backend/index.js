import { ipcMain } from 'electron';

import {pathsToRows} from "./pathToRows";
import {prepareData} from "./prepareData";
import {groupWords} from "./groupWords";

ipcMain.on('process-subtitles', (event, paths) => {

	pathsToRows(paths)
		.then(rows => prepareData(rows))
		.then(words => groupWords(words))
		.then(groupedWords => event.reply('process-subtitles', groupedWords))
		.catch(err => console.log('Error ->', err));

})
