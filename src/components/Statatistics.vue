<template>
  <div class="row">
    <div class="col-12 mb-2 text-end m-2">
      <div class="main-content">
        <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
          <div class="container-fluid">
            <h2 class="mb-5 text-white">Stats Card</h2>
            <div class="header-body">
              <div class="row">
                <div class="col-xl-3 col-lg-6">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">
                            Quantity
                          </h5>
                          <span class="h2 font-weight-bold mb-0">924</span>
                        </div>
                        <div class="col-auto">
                          <div
                            class="icon icon-shape bg-yellow text-white rounded-circle shadow"
                          >
                            <i class="fas fa-users"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonReport from "./ButtonReport.vue";
export default {
  name: "StatisticsView",

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
        const response = await axios.get("http://127.0.0.1:8000/api/products");

        this.parameters.data = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
