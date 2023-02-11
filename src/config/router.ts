/**
 * @description: 路由配置入口
 * @author LiQingSong
 */
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
NProgress.configure({ showSpinner: false, easing: "ease", speed: 1000 }); // NProgress Configuration

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

/* SecurityLayout */
import SecurityLayout from "@/layouts/SecurityLayout.vue";

/* MemberLayout */
import MemberLayoutRoutes from "@/layouts/MemberLayout/routes";
import MemberLayout from "@/layouts/MemberLayout/index.vue";

/* DefaultLayout */
import DefaultLayoutRoutes from "@/layouts/DefaultLayout/routes";
import DefaultLayout from "@/layouts/DefaultLayout/index.vue";

/* UserLayout */
import UserLayoutRoutes from "@/layouts/UserLayout/routes";
import UserLayout from "@/layouts/UserLayout/index.vue";

/* 请求消除器 */
import { requestCanceler } from "@/utils/request";

// 配置路由
const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: DefaultLayout,
		children: DefaultLayoutRoutes,
	},

	{
		path: "/",
		component: UserLayout,
		children: UserLayoutRoutes,
	},

	{
		path: "/",
		component: SecurityLayout,
		children: [
			{
				path: "/",
				component: MemberLayout,
				children: MemberLayoutRoutes,
			},
		],
	},

	{
		path: "/:pathMatch(.*)*",
		component: () => import("@/pages/404/index.vue"),
	},
];

const router = createRouter({
	scrollBehavior() {
		return { left: 0, top: 0 };
	},
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes,
});

/**
 * @description 路由前置，拦截
 */
router.beforeEach((to, from, next) => {
	// start progress bar
	NProgress.start();

	// 在跳转之前，清除所有ajax请求
	requestCanceler.removeAllPending();

	// 跳转到对应路由
	next();
});

/**
 * @description 路由后置，跳转结束
 */
router.afterEach(() => {
	// finish progress bar
	NProgress.done();
});

export default router;
