import axios from "axios";
import Navbar from "../Navbar.vue";

export default {
  name: "item-details",
  components: { Navbar },
  props: [],
  data() {
    return {
      product: null,
    };
  },
  computed: {},
  mounted() {
    axios(
      `https://api.spoonacular.com/food/products/${this.$route.params.id}?apiKey=c522fe791ad04c9686397879ccbf58ff`
    ).then((res) => {
      this.product = res.data;
    });
  },
  methods: {},
};
