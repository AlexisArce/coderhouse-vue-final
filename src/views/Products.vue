<template>
  <section class="products">
    <Navbar />

    <ProductsCRUD v-if="isAdmin" />

    <div v-else class="m-5">
      <p>No cuenta con los permisos para ver esta página :(</p>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar";
import ProductsCRUD from "../components/ProductsCRUD";

export default {
  name: "Products",
  components: { ProductsCRUD, Navbar },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
};
</script>

<style lang="scss" scoped></style>
