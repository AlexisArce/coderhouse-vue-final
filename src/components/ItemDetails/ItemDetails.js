import axios from "axios";
import Navbar from "../Navbar.vue";

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
