<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { setToken } from "@/utils/localToken";
import { IResponseData } from "@/@types/utils.request";
import { LoginParamsType } from "./data";
import { accountLogin } from "./server";

const router = useRouter();

const formData = reactive<LoginParamsType>({
	username: "",
	password: "",
});

const loading = ref(false);
const onSubmit = async () => {
	if (loading.value === true) {
		return;
	}
	if (formData.username === "") {
		alert("请输入用户名");
		return false;
	}
	if (formData.password === "") {
		alert("请输入密码");
		return false;
	}
	try {
		const response: IResponseData<any> = await accountLogin(formData);
		const data = response.data || {};
		setToken(data.token || "");
		alert("登录成功");
		const { redirect, ...query } = router.currentRoute.value.query;
		router.replace({
			path: (redirect as string) || "/",
			query: {
				...query,
			},
		});
	} catch (error: any) {
		console.log(error);
		const message = error.message;
		if (message === "CustomError") {
			const response = error.response || {};
			const data = response.data || {};
			const msg = data.msg || "";
			alert(msg);
		} else {
			alert(message);
		}
	}
};
</script>

<template>
	<div class="user-login">
		<div class="title">登录</div>
		<div class="item">
			<input class="width100" placeholder="用户名：admin or test" v-model="formData.username" />
		</div>
		<div class="item">
			<input class="width100" placeholder="密码：123456" type="password" v-model="formData.password" />
		</div>
		<div class="item">
			<button class="width100" @click="onSubmit" :disabled="loading">提交</button>
		</div>
		<div class="item2">
			<RouterLink to="/">返回首页</RouterLink>
		</div>
	</div>
</template>

<style scoped lang="scss">
.user-login {
	width: 280px;
	padding-bottom: 20px;
	border-radius: 6px;
	box-shadow: 0 0 10px var(--ft-shadow-color-1);
	.title {
		font-size: 16px;
		line-height: 50px;
		text-align: center;
	}
	.item {
		padding: 10px 20px;
		.width100 {
			box-sizing: border-box;
			width: 100%;
		}
	}
	.item2 {
		padding: 0 20px;
		font-size: 12px;
	}
}
</style>
