<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import Permission from "@/components/Permission/index.vue";
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
	<div class="member-layout">
		<Permission :roles="routeItem?.meta?.roles">
			<router-view />
		</Permission>
		<div class="member-layout-footer">
			<div class="nav-item"><router-link to="/">首页</router-link></div>
			<div class="nav-item"><router-link to="/member/index">我的</router-link></div>
			<div class="nav-item"><router-link to="/user/login">登录</router-link></div>
			<div class="nav-item"><SwitchThemeModel /></div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.member-layout {
	position: relative;
	&::after {
		position: relative;
		display: block;
		width: 100%;
		height: 40px;
		content: "";
	}
	.member-layout-footer {
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 10;
		display: flex;
		height: 40px;
		background-color: var(--ft-bg-color);
		border-top: 1px solid var(--ft-divider-color);
		.nav-item {
			box-sizing: border-box;
			display: flex;
			flex: 1;
			align-items: center;
			justify-content: center;
			border-left: 1px solid var(--ft-divider-color);
			&:first-child {
				border: 0;
			}
		}
	}
}
</style>
