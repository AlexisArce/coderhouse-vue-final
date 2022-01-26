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
        <v-card class="pa-2" outlined>
          <v-img
            :src="product.image"
            :lazy-src="product.image"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1),
            rgba(0,0,0,.5)"
            max-height="250"
            max-width="500"
          >
            <v-card-title v-text="product.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-chip class="ma-2" large>$ {{ product.price }} </v-chip>
            <v-spacer></v-spacer>
            <v-btn @click="viewItemDetails(product)"> Ver detalle </v-btn>
            <v-btn @click="addProductToCart(product)" icon>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Spinner from "./Spinner.vue";

export default {
  name: "item-list",
  components: { Spinner },
  props: [],
  data: () => ({}),

  computed: {
    hasItems: () => {
      return this.products?.length > 0;
    },
    products() {
      return this.$store.state.products;
    },
    loadingProducts() {
      return this.$store.state.loadingProducts;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    viewItemDetails(item) {
      this.$router.push({ name: "ItemDetails", params: { id: item.id } });
    },
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
};
</script>

<style lang="scss" scoped></style>
