<template>
  <main>
    <header-view />
    <div class="row m-3 p-2">
      <div class="col-md-4 mb-2">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">SALES REPORT</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item"
                v-for="(product, index) in products"
                :key="index"
              >
                <h5>
                  <span class="text-bold">Product ID</span>:
                  {{ product.product_id }}
                </h5>
                <h5>
                  <span class="text-bold">Total Quantity</span>:{{
                    product.total_quantity
                  }}
                </h5>
                <h5>
                  <span class="text-bold">Total Revenue</span>:
                  {{ product.total_revenue }}
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">REVENUE REPORT</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item"
                v-for="(revenue, index) in revenues"
                :key="index"
              >
                <h5>
                  <span class="text-bold">Total Revenue</span>:
                  {{ revenue.total_revenue }}
                </h5>
                <h5>
                  <span class="text-bold">Average Revenue</span>:{{
                    revenue.average_revenue
                  }}
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-2">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">CUSTOMER REPORT</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item"
                v-for="(customer, index) in customers"
                :key="index"
              >
                <h5>
                  <span class="text-bold">Customer ID</span>:
                  {{ customer.customer_id }}
                </h5>
                <h5>
                  <span class="text-bold">Order Count</span>:{{
                    customer.order_count
                  }}
                </h5>
                <h5>
                  <span class="text-bold">Average order Value</span>:
                  {{ customer.average_order_value }}
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-2">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">INVENTORY REPORT</h5>
          </div>
          <div class="card-body">
            <li
              class="list-group-item"
              v-for="(item, index) in items"
              :key="index"
            >
              <h5>
                <span class="text-bold">Product Name</span>:
                {{ item.product }}
              </h5>
              <h5>
                <span class="text-bold">Quantity</span>:{{ item.quantity }}
              </h5>
            </li>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderView from "./Header.vue";
import { headers } from "../helpers/apiConfig";
import axios from "axios";
export default {
  name: "SalesReportView",
  components: {
    HeaderView,
  },

  data() {
    return {
      products: [],
      revenues: [],
      customers: [],
      items: [],
    };
  },
  mounted() {
    this.getSalesReport();
    this.getRevenueReport();
    this.getCustomerReport();
    this.getInventoryReport();
  },
  methods: {
    async getSalesReport() {
      try {
        const response = await axios.get("/api/sales/report", { headers });
        this.products = response.data;
        console.log("sales report", this.products);
      } catch (error) {
        console.log(error);
      }
    },
    async getRevenueReport() {
      try {
        const response = await axios.get("/api/revenue/report", { headers });
        this.revenues = response.data;
        console.log("Revenue Report", this.revenues);
      } catch (error) {
        console.log(error);
      }
    },
    async getCustomerReport() {
      try {
        const response = await axios.get("/api/customers/report", { headers });
        this.customers = response.data;
        console.log("customer report", this.customers);
      } catch (error) {
        console.log(error);
      }
    },

    async getInventoryReport() {
      try {
        const response = await axios.get("/api/inventory/report", { headers });
        this.items = response.data;
        console.log("inventory report", this.items);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
