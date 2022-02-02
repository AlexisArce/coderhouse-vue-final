<template>
  <section class="orders">
    <Navbar />

    <OrdersTable v-if="isAdmin" />

    <div v-else class="m-5">
      <p>No cuenta con los permisos para ver esta página :(</p>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar";
import OrdersTable from "../components/OrdersTable";

export default {
  name: "Orders",
  components: { Navbar, OrdersTable },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
};
</script>

<style lang="scss" scoped></style>
