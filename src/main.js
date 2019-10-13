import Vue from "vue";

import vuelidate from "vuelidate";
import Toasted from "vue-toasted";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppDropdown from "./components/shared/AppDropdown";
import AppHero from "./components/shared/AppHero";
import AppSpinner from "./components/shared/AppSpinner";

import AppSocket from "./plugins/socket";
import filters from "./filters";

// import customPlugin from "@/plugins/customPlugin";

Vue.config.productionTip = false;

Vue.component("AppHero", AppHero);
Vue.component("AppDropdown", AppDropdown);
Vue.component("AppSpinner", AppSpinner);

Vue.use(vuelidate);
Vue.use(Toasted);

const connection = process.env.VUE_APP_URI;
Vue.use(AppSocket, { connection });

filters();

new Vue({
  router,
  store,
  vuelidate,

  render: h => h(App)
}).$mount("#app");
