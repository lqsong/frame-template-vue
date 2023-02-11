/**
 * @description: 路由工具
 * @author LiQingSong
 */
import { RouteRecordRaw } from "vue-router";
import { IPathKeyRouter, IRouterPathKeyRouter } from "@/@types/vue-router";
import { merge } from "lodash";
import { isExternal } from "@/utils/is";

/**
 * @description: 根据 routes: RouteRecordRaw[] 重置
 * @param routes 路由配置
 * @param parentPath 上级path
 * @param parentPaths 父级path数组集合
 * @returns IRouterPathKeyRouter
 */
export const formatRoutes = (
	routes: RouteRecordRaw[],
	parentPath = "/",
	parentPaths: string[] = [],
): IRouterPathKeyRouter => {
	const items: RouteRecordRaw[] = [];
	let jsonItems: IPathKeyRouter = {};

	routes.forEach((item) => {
		// 设置路径
		let path = item.path || "";
		if (!isExternal(item.path)) {
			path = item.path.startsWith("/")
				? item.path
				: `${parentPath.endsWith("/") ? parentPath : `${parentPath}/`}${item.path}`;
		}
		item.path = path;

		// 设置 meta
		const meta = item.meta || {};
		// 设置 meta.parentPath
		const pPaths = meta.parentPath && meta.parentPath.length > 0 ? meta.parentPath : parentPaths;
		meta.parentPath = pPaths;
		item.meta = meta;

		// children赋值
		let pkChildren: IPathKeyRouter | undefined;
		if (item.children) {
			const cRoutes = formatRoutes(item.children, path, [...pPaths, path]);
			item.children = cRoutes.router;
			pkChildren = cRoutes.pathKeyRouter;
		}

		// 最终 item 赋值
		items.push(item);
		jsonItems[path] = item;
		if (pkChildren) {
			jsonItems = merge(jsonItems, pkChildren);
		}
	});

	return {
		router: items,
		pathKeyRouter: jsonItems,
	};
};

/**
 * @description: 根据自定义传入验证的权限名 判断当前用户是否有权限
 * @param userRoles  用户的权限
 * @param roles  自定义验证的权限名
 * @returns boolean
 */
export const hasPermissionRoles = (userRoles: string[], roles?: string | string[]): boolean => {
	if (userRoles.length < 1) {
		return false;
	}

	if (userRoles.includes("admin")) {
		return true;
	}

	if (typeof roles === "undefined") {
		return true;
	}

	if (typeof roles === "string") {
		return userRoles.includes(roles);
	}

	if (roles instanceof Array && roles.length === 0) {
		return true;
	}

	if (roles instanceof Array && roles.length > 0) {
		return roles.some((role) => userRoles.includes(role));
	}

	return false;
};
