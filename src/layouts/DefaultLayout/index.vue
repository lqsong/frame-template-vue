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
	<div class="default-layout">
		<div class="default-layout-header">
			<div class="default-layout-header-box">
				<div class="default-layout-logo">
					<img class="logo" src="../../assets/images/logo.png" />
					<span class="text">Frame-Template-Vue</span>
				</div>
				<div class="default-layout-nav">
					<router-link to="/" class="nav-item">首页</router-link>
					<router-link to="/member" class="nav-item">我的</router-link>
					<router-link to="/user/login" class="nav-item">登录</router-link>
					<router-link to="/test" class="nav-item">测试页</router-link>
					<span class="nav-item">
						<SwitchThemeModel />
					</span>
				</div>
			</div>
		</div>
		<router-view />
	</div>
</template>
<style scoped lang="scss">
.default-layout {
	position: relative;
	&::before {
		position: relative;
		display: block;
		width: 100%;
		height: 50px;
		content: "";
	}
	.default-layout-header {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 10;
		background-color: var(--ft-bg-color);
		border-bottom: 1px solid var(--ft-divider-color);
		.default-layout-header-box {
			position: relative;
			display: flex;
			align-items: center;
			max-width: 1200px;
			height: 50px;
			margin: 0 auto;
			.default-layout-logo {
				display: flex;
				align-items: center;
				width: 145px;
				padding-left: 5px;
				.logo {
					max-height: 20px;
					margin-right: 5px;
				}
				.text {
					font-size: 12px;
					font-weight: 500;
				}
			}
			.default-layout-nav {
				display: flex;
				flex: 1;
				align-items: center;
				justify-content: flex-end;
				.nav-item {
					padding: 0 8px;
					font-size: 12px;
				}
			}
		}
	}
}
</style>
