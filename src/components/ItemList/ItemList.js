import Navbar from "../Navbar.vue";
import Spinner from "../Spinner.vue";

export default {
  name: "item-list",
  components: { Navbar, Spinner },
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
  mounted() {},
  methods: {
    viewItemDetails: function (item) {
      this.$router.push({ name: "ItemDetails", params: { id: item.id } });
    },
  },
};
