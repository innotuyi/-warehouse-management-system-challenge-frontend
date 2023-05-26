<template>
  <main>
    <HeaderView />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Available Order</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer Name</th>
                    <th>Product Name</th>
                    <th>Quantity</th>

                    <th>Price</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th  v-if="shouldShowAddProductLink">Actions</th>
                  </tr>
                </thead>
                <tbody v-if="products.length > 0">
                  <tr v-for="(product, key) in products" :key="key">
                    <td>{{ product.order_id }}</td>
                    <td>{{ product.customer_name }}</td>
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.quantity }}</td>

                    <td>{{ product.price }}</td>
                    <td>{{ product.created_at }}</td>
                    <td class="text-danger">{{ product.status }}......</td>

                    <td  v-if="shouldShowAddProductLink">
                      <router-link
                        :to="{
                          name: 'updateOrder',
                          params: { id: product.id },
                        }"
                        class="btn btn-success"
                        
                        >Approve Order/ Cancel</router-link
                      >
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="4" align="center">No order is made.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { token } from "../components/token";
import HeaderView from "../components/Header.vue";
export default {
  name: "OrderList",
  components: {
    HeaderView,
  },

  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.products = response.data;
        console.log("stock available", this.products);
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
