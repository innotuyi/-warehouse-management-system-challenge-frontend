import Vue from "vue";

import App from "./App.vue";

import axios from "axios";

import router from "./router";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.defaults.headers.post["Content-Type"] = "application/json";

import DataTable from "@andresouzaabreu/vue-data-table";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";

Vue.component("data-table", DataTable);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
