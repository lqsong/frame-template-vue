import { ComputedRef, onMounted, watch } from "vue";
import { RouteRecordRaw } from "vue-router";
import { siteTitle } from "@/config/settings";

/**
 * @description:设置 html Title  composables
 * @param routeItem 当前路由item
 * @author LiQingSong
 */
export const useTitle = (routeItem: ComputedRef<RouteRecordRaw>): void => {
	const setTitle = (title: string): void => {
		document.title = `${title} - ${siteTitle}`;
	};

	watch(routeItem, () => {
		setTitle(routeItem.value?.meta?.title || "");
	});

	onMounted(() => {
		setTitle(routeItem.value?.meta?.title || "");
	});
};
