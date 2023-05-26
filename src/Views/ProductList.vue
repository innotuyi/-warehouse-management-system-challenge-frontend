<template>
  <main>
    <HeaderView />
    <div class="row">
      <div class="col-12 mb-2 text-end m-2">
        <router-link
          v-if="shouldShowAddProductLink"
          :to="{ name: 'AddProduct' }"
          class="btn btn-primary"
        >
          Add Product
        </router-link>
      </div>
      <div class="col-md-8 offset-md-2">
        <data-table v-bind="parameters" />
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import HeaderView from "../components/Header.vue";
import ButtonReport from "../components/ButtonReport.vue";
import { token } from "../components/token";
export default {
  name: "ProductList",
  components: {
    HeaderView,
  },

  data() {
    return {
      parameters: {
        data: [],
        lang: "en",
        actionMode: "single",
        showDownloadButton: false,
        showPagination: false,
        columns: [
          {
            key: "id",
          },
          {
            key: "name",
          },
          {
            key: "description",
          },
          {
            key: "price",
          },

          {
            key: "quantity",
          },
          {
            title: "Actions",
            component: ButtonReport,
          },
        ],
      },
    };
  },
  mounted() {
    this.getCategories();
  },

  methods: {
    async getCategories() {
      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/products",

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.parameters.data = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    shouldShowAddProductLink() {
      const role = localStorage.getItem("role");
      return role !== "customer";
    },
  },
};
</script>
