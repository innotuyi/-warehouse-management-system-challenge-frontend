<template>
 <H2>Logout</H2>
</template>

<script>
import axios from 'axios';

export default {
     name: "LogoutView",
  methods: {
    async logout() {
      try {
        await axios.post('/api/logout');
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style>
</style>
