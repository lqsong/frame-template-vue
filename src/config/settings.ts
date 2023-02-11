/**
 * @description: 站点配置
 * @author LiQingSong
 */
import {
	TAjaxHeadersTokenKey,
	TAjaxResponseNoVerifyUrl,
	TSiteTitle,
	TSiteTokenKey,
	TTheme,
	TThemeStorageKey,
} from "@/@types/config.settings.d";

/**
 * @description: 站点名称
 */
export const siteTitle: TSiteTitle = "Frame-Template-Vue";

/**
 * @description: 站点本地存储Token 的 Key值
 */
export const siteTokenKey: TSiteTokenKey = "frame-template-vue-token";

/**
 * @description: Ajax请求头发送Token 的 Key值
 */
export const ajaxHeadersTokenKey: TAjaxHeadersTokenKey = "x-token";

/**
 * @description: Ajax返回值不参加统一报错的api地址
 */
export const ajaxResponseNoVerifyUrl: TAjaxResponseNoVerifyUrl = ["/user/login", "/user/info"];

/**
 * @description: Layout 模板主题
 */
export const theme: TTheme = "dark";

/**
 * @description: Layout 模板主题本地存储(localStorage)的key名称
 */
export const themeStorageKey: TThemeStorageKey = "frame-template-vue-theme";
