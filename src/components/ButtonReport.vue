<template>
  <div class="row">
    <div class="card mb-2">
      <button class="btn btn-success" @click="edit()">Edit</button>
    </div>
    <div class="card mb-2">
      <button class="btn btn-success" @click="order()">Order</button>
    </div>

    <div class="card mb-2">
      <button class="btn btn-success" @click="stock()">
        Add in stock
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stateBlock: "blocked",
      stateResolved: "resolved",
    };
  },
  methods: {
    edit() {
      const id = this.data.id;

      this.$router.push({
        name: "productEdit",
        params: {
          id: id,
        },
      });
    },

     order() {
      const id = this.data.id;

      this.$router.push({
        name: "createOrder",
        params: {
          id: id,
        },
      });
    },

     stock() {
      const id = this.data.id;
      this.$router.push({
        name: "AddStock",
        params: {
          id: id,
        },
      });
    },
  },
  props: {
    // prop below is REQUIRED:
    data: {
      type: Object,
    },
  },
};
</script>
