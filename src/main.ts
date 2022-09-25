import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

loadFonts();
library.add(fas);

createApp(App)
  .use(router)
  .use(vuetify)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
