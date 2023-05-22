<template>
  <main>
    <HeaderView />
    <StatisticsView />
  </main>
</template>

<script>
import HeaderView from "./Header.vue";
import StatisticsView from "./Statatistics.vue";
export default {
  name: "DashboardView",
  components: {
    HeaderView,
    StatisticsView,
  },
};
</script>

<style>
@import "../assets/css/style.css";
</style>
