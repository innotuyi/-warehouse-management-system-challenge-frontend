<template>
  <div id="app">
    <router-view />
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$Progress.finish()
  },
  created () {
    this.$Progress.start()
  }
}
</script> 
