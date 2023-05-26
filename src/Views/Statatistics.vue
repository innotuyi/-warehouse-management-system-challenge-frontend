<template>
  <main>
    <header-view/>
    <div class="row">
    <div class="col-12 mb-2 text-end m-2">
      <div class="main-content">
        <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
          <div class="container-fluid">
            <h2 class="mb-5 text-dark">Overview</h2>
            <div class="header-body">
              <div class="row">
                <div class="col-xl-3 col-lg-6">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">
                            Total product
                          </h5>
                          <span class="h2 font-weight-bold mb-0">{{
                            totalProduct
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">
                            total Orders
                          </h5>
                          <span class="h2 font-weight-bold mb-0">{{
                            totalOrder
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">
                            Stock level
                          </h5>
                          <span class="h2 font-weight-bold mb-0">{{
                            totalStock
                          }}</span>
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
  </main>
</template>

<script>
import HeaderView from "../components/Header.vue";
import {headers} from '../helpers/apiConfig'
import axios from "axios";
export default {
  name: "StatisticsView",
  components: {
    HeaderView,
  },

  data() {
    return {
      totalProduct: 0,
      totalOrder: 0,
      totalStock: 0,
    };
  },
  mounted() {
    this.getTotalProduct();
    this.getTotalOrder();
    this.getTotalStock(); 
  },
  methods: {
    async getTotalProduct() {
      try {
        const response = await axios.get("/api/dashboard/statistics/product",{headers}
        );
        this.totalProduct = response.data;
        console.log("product available", this.totalProduct);
      } catch (error) {
        console.log(error);
      }
    },
    async getTotalOrder() {
      try {
        const response = await axios.get(
          "/api/dashboard/statistics/order",{headers}
        );
        this.totalOrder = response.data;
        console.log("total order", this.totalOrder);
      } catch (error) {
        console.log(error);
      }
    },
    async getTotalStock() {
      try {
        const response = await axios.get("/api/dashboard/statistics/stock", {headers});
        this.totalStock = response.data;
        console.log("totalStock", this.totalProduct);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
