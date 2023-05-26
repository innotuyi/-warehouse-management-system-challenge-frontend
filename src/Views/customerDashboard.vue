<template>
  <main>
    <HeaderView />
  </main>
</template>

<script>
import HeaderView from "../components/Header.vue";

export default {
  name: "customerDashboard",
  components: {
    HeaderView,
  },
};
</script>

<style>
@import "../assets/css/style.css";
</style>
