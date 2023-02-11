<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import SwitchThemeModel from "@/components/SwitchThemeModel/index.vue";

import { formatRoutes } from "@/utils/router";
import { useTitle } from "@/composables/useTitle";
import layoutRotes from "./routes";

const route = useRoute();

// 框架所有菜单路由 与 patch key格式的所有菜单路由
const routerPathKeyRouter = ref(formatRoutes(layoutRotes));

// 当前路由 item
const routeItem = computed(() => routerPathKeyRouter.value.pathKeyRouter[route.path]);

// 设置title
useTitle(routeItem);
</script>
<template>
	<div class="user-layout">
		<div class="theme-switch"><SwitchThemeModel /></div>
		<router-view />
	</div>
</template>
<style scoped lang="scss">
.user-layout {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	.theme-switch {
		position: fixed;
		top: 10px;
		right: 10px;
	}
}
</style>
