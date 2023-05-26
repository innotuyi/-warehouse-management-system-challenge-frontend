<template>
  <main>
    <StatisticsView />
  </main>
</template>

<script>
import StatisticsView from "./Statatistics.vue";
export default {
  name: "DashboardView",
  components: {
    StatisticsView,
  },
};
</script>

<style>
@import "../assets/css/style.css";
</style>
