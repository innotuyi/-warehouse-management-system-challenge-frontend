<template>
  <main>
    <div class="row bg-dark">
      <div class="col-md-7 offset-md-2 p-4 text-center">
        <h4 class="text-light">WAREHOUSE-MANAGEMENT-SYSTEM</h4>
      </div>
     
    </div>
      <LoginView></LoginView>
      <div class="container-fluid">
    </div>
  </main>
</template>

<script>

import LoginView from "@/components/Login";

export default {
   components: {
    LoginView,
  },
}
</script>

<style>
</style>
