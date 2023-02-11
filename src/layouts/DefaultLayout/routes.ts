import { RouteRecordRaw } from "vue-router";

const DefaultLayoutRoutes: RouteRecordRaw[] = [
	{
		meta: {
			title: "首页",
		},
		path: "/",
		component: () => import("@/pages/home/index.vue"),
	},
	{
		path: "/test",
		component: () => import("@/pages/test/index.vue"),
	},
];

export default DefaultLayoutRoutes;
