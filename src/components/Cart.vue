<template>
  <section class="cart">
    <v-container fluid>
      <v-row>
        <v-col class="offset-md-2 col-md-8">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Producto</th>
                  <th class="text-right">Precio unitario</th>
                  <th class="text-left">Cantidad</th>
                  <th class="text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart.products" :key="item.id">
                  <td class="text-left">{{ item.title }}</td>
                  <td class="text-right">{{ item.price }}</td>
                  <td class="text-left">{{ item.quantity }}</td>
                  <td class="text-right">{{ item.quantity * item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row justify="space-around" class="m-4">
        <v-col class="offset-md-8 col-md-2">
          <strong>Total: $ {{ total }}</strong>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="offset-md-6 col-md-2">
          <router-link to="/"> Seguir comprando </router-link>
        </v-col>
        <v-col class="col-md-2">
          <router-link to="/checkout"> Pagar </router-link>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
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
</script>

<style lang="scss" scoped></style>
