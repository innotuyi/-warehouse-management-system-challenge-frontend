<template>
  <div class="row bg-dark">
    <div class="col-md-7 offset-md-3">
      <nav class="navbar navbar-expand-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/statistics/dashboard"
              
                >Dashboard <span class="sr-only">(current)</span></router-link
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Product
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link
                  exact-active-class="active"
                  to="/category/add"
                  class="dropdown-item"
                  href="#"
                  v-if="shouldShowAddProductLink"
                  >Add Product</router-link
                >
                <router-link to="/product" class="dropdown-item" href="#"
                  >List Product</router-link
                >
              </div>
            </li>

            <li class="nav-item dropdown"  v-if="shouldShowAddProductLink">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Stock
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link to="/stock" class="dropdown-item"
                  >Available stock</router-link
                >
              </div>
            </li>

            <li class="nav-item dropdown" >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Orders
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link to="/order" class="dropdown-item"
                  >Available orders</router-link
                >
              </div>
            </li>

            <li class="nav-item dropdown"  v-if="shouldShowAddProductLink">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Reports
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link class="dropdown-item" to="/reports"
                  >All reports</router-link
                >
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <button class="dropdown-item btn btn-light" @click="logout">
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HeaderView",
  methods: {
    async logout() {
      try {
        await axios.post("http://127.0.0.1:8000/api/logout");
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    shouldShowAddProductLink() {
      const role = localStorage.getItem("role");
      return role !== "customer";
    }
  }

  
};
</script>
