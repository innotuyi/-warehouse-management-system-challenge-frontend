<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 mt-4">
      <div class="card-header">
        <h4 class="text-center">Register</h4>
      </div>
      <form @submit.prevent="create">
        <div class="row">
          <div class="col-12 mb-2">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="payload.name"
              />
              <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>
          </div>
          <div class="col-12 mb-2">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="payload.email"
              />
              <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>
          </div>

          <div class="col-12 mb-2">
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="payload.password"
              />
              <span v-if="errors.password" class="error">{{
                errors.password
              }}</span>
            </div>
          </div>
          <div class="col-12 mb-2">
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                v-model="payload.confirmPassword"
              />
              <span v-if="errors.confirmPassword" class="error">{{
                errors.confirmPassword
              }}</span>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-block btn-primary">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "add-category",
  data() {
    return {
      payload: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {},
    };
  },
  methods: {
    async create() {
      this.errors = {};

      if (!this.payload.name) {
        this.errors.name = "Name is required";
      }

      if (!this.payload.email) {
        this.errors.email = "Email is required";
      }

      if (!this.payload.password) {
        this.errors.password = "Password is required";
      }

      if (!this.payload.confirmPassword) {
        this.errors.confirmPassword = "Confirm Password is required";
      } else if (this.payload.confirmPassword !== this.payload.password) {
        this.errors.confirmPassword = "Passwords do not match";
      }
      if (Object.keys(this.errors).length === 0) {
         try {
        await axios.post("http://127.0.0.1:8000/api/register", this.payload);
        this.$router.push({ name: "sta" });
      } catch (error) {
        console.log(error);
      }
      }

     
    },
  },
};
</script>


<style scoped>
.error {
    color: brown;
}
</style>
