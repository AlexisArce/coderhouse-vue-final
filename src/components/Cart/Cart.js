export default {
  name: "cart",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    total() {
      console.log(this.cart);
      let total = 0;
      this.cart?.products?.forEach((item) => {
        item.quantity = item.quantity || 1;
        total += (item.quantity || 1) * item.price;
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
