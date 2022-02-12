import Vue from "vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";

Vue.component("Typeform", () => import("@/components/global/Form.vue"));
Vue.component("Typetable", () => import("@/components/global/Table.vue"));
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
