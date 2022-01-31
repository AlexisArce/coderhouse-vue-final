<template>
  <section class="administration">
    <div v-if="isAdmin">
      <p>Administration View</p>
      <ProductsCRUD />
    </div>
    <div v-else class="m-5">
      <p>No cuenta con los permisos para ver esta página :(</p>
    </div>
  </section>
</template>

<script>
import ProductsCRUD from "../components/ProductsCRUD";

export default {
  name: "Administration",
  components: { ProductsCRUD },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
};
</script>

<style lang="scss" scoped></style>
