<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Add Product</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="create">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>name</label>
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
                    type="number"
                    min="1"
                    class="form-control"
                    v-model="product.price"
                  />
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Save</button>
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

export default {
  name: "add-category",
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: "",
      },
    };
  },
  methods: {
    async create() {
      try {
           const token = localStorage.getItem('token');
        await axios.post(
          "http://127.0.0.1:8000/api/products/add",
          this.product,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        this.$router.push({ name: "productList" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
