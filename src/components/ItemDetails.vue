<template>
  <section class="item-details">
    <navbar />
    <v-container fluid v-if="product" class="mt-4">
      <v-row>
        <v-col offset-md="1" md="6" sm="12" cols="12">
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
        <v-col md="4" sm="12" cols="12">
          <p class="text-h4 text-center">
            {{ product.title }}
          </p>
          <p class="text-center">{{ product.description }}</p>
          <p class="text-center">
            {{ product.rating }}
            <el-rate
              v-model="product.rating"
              disabled
              show-score
              text-color="#ff9900"
              score-template=""
            >
            </el-rate>
          </p>
          <el-tag v-if="product.isVeggie" type="success">Veggie</el-tag>
          <el-tag v-if="product.rating === 5" effect="dark" type="info"
            >La elegida por el pueblo</el-tag
          >
          <i v-if="product.rating === 5" class="el-icon-medal-1"></i>
          <p class="text-right">
            <v-chip class="ma-2" x-large dark> $ {{ product.price }} </v-chip>
          </p>
          <p class="text-center">
            <el-input-number
              v-model="quantity"
              :min="1"
              :max="10"
            ></el-input-number>
          </p>
          <router-link v-if="goToCart" to="/cart">
            <v-btn depressed color="error" block>Ir al carrito</v-btn>
          </router-link>
          <v-btn
            v-if="!goToCart"
            depressed
            color="error"
            @click="addProductToCart(product)"
            block
            >Agregar al carrito</v-btn
          >
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
      quantity: 1,
      goToCart: false,
    };
  },
  computed: {},
  mounted() {
    axios(
      `https://61ba455648df2f0017e5aa20.mockapi.io/Products/${this.$route.params.id}`
    ).then((res) => {
      this.product = res.data;
      this.scrollToTop();
    });
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", {
        ...product,
        quantity: this.quantity,
      });
      this.goToCart = true;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-icon-medal-1 {
  font-size: 1.5em !important;
}

.v-application a {
  text-decoration: none !important;
}

@media (max-width: 600px) {
  .item-details img {
    width: 540px;
  }
}
</style>
