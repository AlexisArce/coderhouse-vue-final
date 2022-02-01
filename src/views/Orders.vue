<template>
  <section class="orders">
    <Navbar />
    <v-container fluid v-if="isAdmin">
      <v-row justify="space-around">
        <v-col>
          <p>Ordenes de compra</p>
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

export default {
  name: "Orders",
  components: { Navbar },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
};
</script>

<style lang="scss" scoped></style>
