import { createApp } from "vue";

import store from "./providers/store";
import App from "./App.vue";
import "./index.css";

const initializeApp = createApp(App).use(store);

export default initializeApp;
