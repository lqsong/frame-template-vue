/**
 * @description: 全局 store
 * @author LiQingSong
 */
import { defineStore } from "pinia";
import { theme } from "@/config/settings";
import { TTheme } from "@/@types/config.settings";

// state ts类型
export interface IGlobalState {
	// 模板主题
	theme: TTheme;
}

export const useGlobalStore = defineStore("useGlobalStore", {
	state: (): IGlobalState => {
		return {
			theme: theme,
		};
	},
	getters: {},
	actions: {},
});
