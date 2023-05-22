<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Order now</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="create">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>ID</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="product.product_id"
                  />
                </div>
              </div>

              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Available quantity</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="available.available_quantity"
                    disabled
                  />
                </div>
              </div>

              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Quantiy</label>
                  <input
                    type="number"
                    min="1"
                    class="form-control"
                    v-model="product.quantity"
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
  name: "create-order",
  data() {
    return {
      product: {
        product_id: this.$route.params.id,
        customer_id: 1,
        quantity: ""
      },

      available: {
        available_quantity: this.$route.params.quantity
      }
    };
  },
  methods: {
    async create() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/order/create",
          
          this.product
        );
        console.log(response)

        this.$router.push({ name: "order" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
