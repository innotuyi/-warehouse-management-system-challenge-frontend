import Vue from 'vue'

import App from './App.vue'

import router from './router'


import DataTable from "@andresouzaabreu/vue-data-table";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";


Vue.component("data-table", DataTable);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
