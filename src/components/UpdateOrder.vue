<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Update Order</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>ID</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="id"
                    disabled
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Status</label>
                  <select
                    type="select "
                    class="form-control"
                    v-model="product.status"
                  >
                  <option>Packed</option>

                  </select>
                  

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
import axios from 'axios'
import {headers} from '../helpers/apiConfig'

export default {
  name: "update-category",
  data() {
    return {
        id: this.$route.params.id,
      product: {     
        status:"",
        _method: "patch"
      }
    };
  },
  mounted() {
    this.showCategory();
  },
  methods: {
    async showCategory() { 
      try {
        await axios.get(
          `/api/product/${this.$route.params.id}`
        );


      } catch (error) {
        console.log(error)
      }
    },
    async update() {
      try {
        await axios.put(
          `/api/order/update/${this.$route.params.id}`, {headers}, this.product);

        this.$router.push({ name: "order" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
