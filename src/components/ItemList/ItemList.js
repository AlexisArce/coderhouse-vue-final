import axios from "axios";
import Navbar from "../Navbar.vue";
import Spinner from "../Spinner.vue";

export default {
  name: "item-list",
  components: { Navbar, Spinner },
  props: [],
  data: () => ({
    products: [],
    loading: true,
  }),

  computed: {
    hasItems: () => {
      return this.products?.length > 0;
    },
  },
  mounted() {
    axios("https://61ba455648df2f0017e5aa20.mockapi.io/Products").then(
      (res) => {
        this.products = res.data;
        this.loading = false;
      }
    );
  },
  methods: {
    viewItemDetails: function (item) {
      this.$router.push({ name: "ItemDetails", params: { id: item.id } });
    },
  },
};
