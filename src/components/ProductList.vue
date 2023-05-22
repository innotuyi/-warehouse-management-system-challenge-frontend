<template>
  <div class="row">
    <div class="col-12 mb-2 text-end m-2">
      <router-link :to="{ name: 'AddProduct' }" class="btn btn-primary"
        >Add Product</router-link
      >
    </div>
    <!-- <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>products</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                    <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody v-if="products.length > 0">
                <tr v-for="(product, key) in products" :key="key">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.description }}</td>
                  <td>{{ product.price }}</td>
                   <td>{{ product.quantity }}</td>

                  <td>
                    <router-link
                      :to="{
                        name: 'productEdit',
                        params: { id: product.id, quantity: product.quantity}
                       
                      }"
                      class="btn btn-success"
                      >Edit</router-link
                    >

                     <router-link
                      :to="{
                        name: 'createOrder',
                        params: { id: product.id }
                      }"
                      class="btn btn-success"
                      >Order</router-link
                    >

                     <router-link
                      :to="{
                        name: 'AddStock',
                        params: { 
                          id: product.id 
                          
                          }
                      }"
                      class="btn btn-success"

                      >Add in stock</router-link
                    >
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="4" align="center">No products Found.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> -->

    <data-table v-bind="parameters" />
  </div>
</template>

<script>

import axios from "axios";
import ButtonReport from "./ButtonReport.vue";

export default {
  name: "ProductList",

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
