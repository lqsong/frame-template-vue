<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string; tips: string }>();

const count = ref(0);
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
	</div>

	<p class="read-the-docs">{{ tips }}</p>
</template>

<style scoped>
.read-the-docs {
	color: #888888;
}
h1 {
	font-size: 2em;
	line-height: 1.1;
}
button {
	padding: 0.6em 1.2em;
	font-family: inherit;
	font-size: 1em;
	font-weight: 500;
	cursor: pointer;
	border: 1px solid transparent;
	border-radius: 8px;
	transition: border-color 0.25s;
}
button:hover {
	border-color: #409eff;
}
button:focus,
button:focus-visible {
	outline: 4px auto -webkit-focus-ring-color;
}
.card {
	padding: 2em;
}
</style>
