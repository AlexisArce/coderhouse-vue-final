<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),

  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchCart");
  },
};
</script>
