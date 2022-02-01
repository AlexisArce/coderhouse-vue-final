<template>
  <section class="products">
    <Navbar />
    <v-container fluid v-if="isAdmin">
      <v-row justify="space-around">
        <v-col>
          <p>Productos</p>
          <ProductsCRUD />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col> <app-title /></v-col>
      </v-row>
    </v-container>
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
