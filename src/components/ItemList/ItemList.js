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
    axios(
      "https://api.spoonacular.com/food/products/search?query=pizza&number=100&apiKey=c522fe791ad04c9686397879ccbf58ff"
    ).then((res) => {
      this.products = res.data.products;
      this.loading = false;
    });
  },
  methods: {
    viewItemDetails: function (item) {
      this.$router.push({ name: "ItemDetails", params: { id: item.id } });
    },
  },
};
