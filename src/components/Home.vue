<template>
	<v-container fluid>
		<v-form>
			<v-file-input
				label="Selecione as Legendas" prepend-icon="mdi-message-text" append-outer-icon="mdi-send"
				multiple chips v-model="files" @click:append-outer="processSubtitle()" />
		</v-form>
		<div class="pills">
			<Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"/>
		</div>
	</v-container>
</template>

<script>
import { ipcRenderer } from 'electron';

import Pill from "@/components/Pill";

export default {
	name: 'Home',
	components: {
		Pill
	},
	data: function () {
		return {
			files: [],
			groupedWords: []
		}
	},
	methods: {
		processSubtitle() {
			ipcRenderer.send('process-subtitles', this.files);
			ipcRenderer.on('process-subtitles',  async (event, res) => this.groupedWords = await res);
		}
	}
}
</script>

<style>
	.pills {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
