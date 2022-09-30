import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI, { Table, TableColumn } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import router from "@/router";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Table, TableColumn);
Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
