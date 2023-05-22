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
        await axios.post('http://127.0.0.1:8000/api/logout');
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
