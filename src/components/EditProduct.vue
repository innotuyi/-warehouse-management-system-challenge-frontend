<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Update Product</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="product.name"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="product.description"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="product.price"
                  />
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { token } from "./token.js";


export default {
  name: "UpdateCategory",

  data() {
    return {
      product: {
        name: "",
        description: "",
        price: "",
        _method: "patch",
      },
    };
  },
  mounted() {
    this.showCategory();
  },
  methods: {
    async showCategory() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/product/${this.$route.params.id}`,
            {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }

        );
        const { name, description, price } = response.data;

        this.product.name = name;

        this.product.description = description;

        this.product.price = price;
      } catch (error) {
        console.log(error)
      }
    },
    async update() {
      try {
        await axios.put(
          `http://127.0.0.1:8000/api/products/update/${this.$route.params.id}`,
            {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },

          this.product
        );
        this.$router.push({ name: "productList" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
