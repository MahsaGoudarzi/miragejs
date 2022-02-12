import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VeeValidate from "vee-validate";
import { makeServer } from "./api/server.js";
import "./plugins/global-component.js";

Vue.use(VeeValidate);
Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  makeServer();
}
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
