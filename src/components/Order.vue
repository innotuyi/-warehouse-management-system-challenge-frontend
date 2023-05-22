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
                    <th>customer ID</th>
                    <th>Product ID</th>
                    <th>Quantity</th>

                    <th>Price</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody v-if="products.length > 0">
                  <tr v-for="(product, key) in products" :key="key">
                    <td>{{ product.id }}</td>
                    <td>{{ product.customer_id }}</td>
                    <td>{{ product.product_id }}</td>
                    <td>{{ product.quantity }}</td>

                    <td>{{ product.price }}</td>
                    <td>{{ product.created_at }}</td>
                    <td class="text-danger">{{ product.status }}......</td>

                    <td>
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
import HeaderView from "./Header.vue";

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
        const response = await axios.get("http://127.0.0.1:8000/api/orders");
        this.products = response.data;
        console.log("stock available", this.products);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteCategory(id) {
      if (confirm("Are you sure to delete this category ?")) {
        try {
          const response = await axios.delete(
            `http://127.0.0.1:8000/api/category/${id}`
          );
          console.log(response);
          this.getCategories();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
