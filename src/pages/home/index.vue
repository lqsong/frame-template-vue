<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { useI18n } from "@/composables/useI18n";
import locales from "./locales";
import { useGlobalStore } from "@/store/global";
const globalStore = useGlobalStore();
const t = useI18n(locales);
</script>

<template>
	<div class="home">
		<div>
			<a href="http://frame-template-vue.liqingsong.cc" target="_blank">
				<img class="logo" src="../../assets/images/logo.png" />
			</a>
		</div>
		<HelloWorld msg="Frame Template Vue" :tips="t('page.home.tip1', { name: ' Logo ' })" />
		<div>主题：{{ globalStore.theme }}</div>
	</div>
</template>

<style scoped lang="scss">
.home {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	text-align: center;
	.logo {
		height: 8em;
		padding: 0.5em;
		border-radius: 10px;
		will-change: filter;
		&:hover {
			filter: drop-shadow(0 0 2em #409eff);
		}
	}
}
</style>
