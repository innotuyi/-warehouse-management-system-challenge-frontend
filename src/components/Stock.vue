<template>
  <div class="row">
    <div class="col-12 mb-2 text-end m-2">
      <router-link :to="{ name: 'AddProduct' }" class="btn btn-primary"
        >stoack</router-link
      >
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Available stock</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product ID</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody v-if="products.length > 0">
                <tr v-for="(product, key) in products" :key="key">
                  <td>{{ product.id }}</td>
                  <td>{{ product.product_id }}</td>
                  <td>{{ product.quantity }}</td>
                  <td>
                    <router-link
                      :to="{
                        name: 'productEdit',
                        params: { id: product.id }
                      }"
                      class="btn btn-success"
                      >update stock</router-link
                    >
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="4" align="center">stock is empty.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {

  name: 'StockList',
  
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/stocks");
        this.products = response.data;
         console.log("stock available",  this.products )

      } catch (error) {
        console.log(error);
      }
    },

    async deleteCategory(id) {
      if (confirm("Are you sure to delete this category ?")) {
        try {
          await axios.delete(
            `http://127.0.0.1:8000/api/category/${id}`
          );
          this.getCategories();
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};
</script>
