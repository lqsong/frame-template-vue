import { RouteRecordRaw } from "vue-router";

const MemberLayoutRoutes: RouteRecordRaw[] = [
	{
		path: "/member",
		redirect: "/member/index",
		children: [
			{
				meta: {
					title: "用户中心",
				},
				path: "index",
				component: () => import("@/pages/member/index/index.vue"),
			},
			{
				path: "info",
				component: () => import("@/pages/member/info/index.vue"),
			},
		],
	},
];

export default MemberLayoutRoutes;
