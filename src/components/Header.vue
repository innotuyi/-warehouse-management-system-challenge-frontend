<template>
  <div class="row bg-dark">
    <div class="col-md-7 offset-md-3">
      <nav class="navbar navbar-expand-lg bg-dark">
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
              <a class="nav-link" href="#"
                >Dashboard <span class="sr-only">(current)</span></a
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
                  v-if="shouldShowAddProduct"
                  >Add Product</router-link
                >
                <router-link to="/product" class="dropdown-item" href="#"
                  >List Product</router-link
                >
              </div>
            </li>

            <li class="nav-item dropdown" v-if="shouldShowStock">
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

            <li class="nav-item dropdown">
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

            <li class="nav-item dropdown" v-if="shouldShowReports">
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
                <router-link class="dropdown-item" to=""
                  >Inventory Report</router-link
                >
                <router-link class="dropdown-item" to=""
                  >Sales Report</router-link
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

    shouldShowAddProduct() {
      const role = localStorage.getItem("role");
      return role === "admin";
    },
    shouldShowStock() {
      const role = localStorage.getItem("role");
      return role === "admin";
    },
    shouldShowReports() {
      const role = localStorage.getItem("role");
      return role === "admin";
    },
  },
};
</script>
