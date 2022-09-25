import { createApp } from "vue";
import { createPinia } from "pinia";

import BalmUI from "balm-ui";
import BalmUIPlus from "balm-ui-plus";

import "balm-ui-css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(BalmUI);
app.use(BalmUIPlus);

app.mount("#app");
