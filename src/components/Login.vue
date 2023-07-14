<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 mt-4">
      <div v-if="message" class="bg-warning text-center pt-2 pb-2">
        {{ message }}
      </div>

      <div class="card-header">
        <h4 class="text-center">Login</h4>
      </div>
      <div class="jumbotron">
        <form @submit.prevent="login">
          <div class="row">
            <div class="col-12 mb-2">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="payload.email"
                />
                <span v-if="errors.email" class="error">{{
                  errors.email
                }}</span>
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
            <div class="col-12 text-center justify-conter-center">
              <button type="submit" class="btn btn-primary btn-block mb-5">
                Login
              </button>
              <router-link class="text-dark pt-5 mt-5" to="/register"
                >Go to Register</router-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginView",
  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
      errors: {},
      message: "",
      isLoading: "",
    };
  },
  methods: {
    async login() {
      this.errors = {};

      if (!this.payload.email) {
        this.errors.email = "Email is required";
      }

      if (!this.payload.password) {
        this.errors.password = "Password is required";
      }

      if (Object.keys(this.errors).length === 0) {
        try {
          this.isLoading = true;
          const response = await axios.post("/api/login", this.payload);
          this.isLoading = false;

          const token = response.data.token.token;
          const role = response.data.token.role;

          localStorage.setItem("token", token);
          localStorage.setItem("role", role);

          if (role === "admin") {
            this.$router.push({ name: "dashboard" });
          } else if (role === "customer") {
            this.$router.push({ name: "customerDashborad" });
          } else {
            this.$router.push({ name: "login" });
          }
        } catch (error) {
          console.log("LOGIN_ERROR", error.response.data.message)
           this.$noty.warning(error.response.data.message);
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
