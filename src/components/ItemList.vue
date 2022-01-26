<template>
  <section class="item-list">
    <v-row dense>
      <v-col v-if="loadingProducts" class="text-center">
        <Spinner class="m-5" message="" />
      </v-col>
      <v-col
        v-else
        v-for="product in products"
        :key="product.id"
        class="col-md-3"
      >
        <card :product="product"></card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Spinner from "./Spinner";
import Card from "./Card";

export default {
  name: "item-list",
  components: { Spinner, Card },
  props: [],
  data: () => ({}),

  computed: {
    hasItems: () => {
      return this.$store.getters.productsCount > 0;
    },
    products() {
      return this.$store.getters.products;
    },
    loadingProducts() {
      return this.$store.getters.loadingProducts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
