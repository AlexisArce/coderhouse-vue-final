export default {
  name: "cart",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    total() {
      let total = 0;
      this.cart?.products?.forEach((item) => {
        const product = this.products.find((p) => p.id == item.productId);
        item.title = product.title;
        item.price = product.price;

        total += item.quantity * item.price;
      });

      return total;
    },
    cart() {
      return this.$store.state.cart;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {},
  methods: {},
};
