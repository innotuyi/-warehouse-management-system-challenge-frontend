import Vue from "vue";

import App from "./App.vue";

import axios from "axios";

import router from "./router";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.defaults.headers.post["Content-Type"] = "application/json";

import DataTable from "@andresouzaabreu/vue-data-table";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";

Vue.component("data-table", DataTable);

import VueProgressBar from "vue-progressbar";

import 'vuejs-noty/dist/vuejs-noty.css'


import VueNoty from "vuejs-noty";

Vue.use(VueNoty);

const options = {
  color: "#449161",
  failedColor: "red",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

Vue.use(VueProgressBar, options);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
