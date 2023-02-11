import { createApp } from "vue";

// 全局样式
import "@/assets/css/global.scss";
// App
import App from "@/App.vue";
// vue router
import router from "@/config/router";
// pinia store
import store from "@/config/store";
// Register icon sprite
import "virtual:svg-icons-register";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
