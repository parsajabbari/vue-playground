import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import Wtf from "@/components/Wtf.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('Hahaha', Wtf)

app.mount("#app");
