import Spinner from "../Spinner.vue";

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
