<template>
  <section class="item-details">
    <navbar />
    <v-container fluid v-if="product" class="mt-4">
      <v-row>
        <v-col class="offset-md-1 col-md-6">
          <v-img
            :src="product.image"
            max-height="800"
            max-width="700"
            aspect-ratio="1"
            class="grey lighten-2"
            loading="lazy"
          >
          </v-img>
        </v-col>
        <v-col class="col-md-4">
          <p class="text-h4">{{ product.title }}</p>
          <p class="text-right">
            <v-chip class="ma-2" x-large> $ {{ product.price }} </v-chip>
          </p>
          <v-btn color="primary" @click="addProductToCart(product)" block>
            Agregar al carrito
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="offset-md-1 col-md-10">
          <div class="text--primary">{{ product.description }}</div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar";

export default {
  name: "item-details",
  components: { Navbar },
  props: [],
  data() {
    return {
      product: {},
    };
  },
  computed: {},
  mounted() {
    axios(
      `https://61ba455648df2f0017e5aa20.mockapi.io/Products/${this.$route.params.id}`
    ).then((res) => {
      this.product = res.data;
    });
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
};
</script>

<style lang="scss" scoped></style>
