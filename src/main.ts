import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import { router } from "./routes";

const app = createApp(App);
setupStore(app);
app.use(router);
app.mount("#app");
