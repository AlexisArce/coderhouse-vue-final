<template>
  <section class="cart">
    <v-container fluid>
      <v-row>
        <v-col class="text-center" cols="12" sm="6">
          <h1>Carrito</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="offset-md-2 col-md-8">
          <section v-if="!totalItems">
            <p v-if="!totalItems">
              El carrito está vacío :(
              <router-link to="/">
                <el-button class="mx-3" type="primary">Comprar</el-button>
              </router-link>
            </p>
          </section>
          <v-simple-table v-else>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Producto</th>
                  <th class="text-right">Precio unitario</th>
                  <th class="text-center">Cantidad</th>
                  <th class="text-right">Subtotal</th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart.products" :key="item.id">
                  <td class="text-left">{{ item.title }}</td>
                  <td class="text-right">{{ item.price }}</td>
                  <td class="text-center">
                    <el-input-number
                      size="mini"
                      :min="1"
                      :max="10"
                      v-model="item.quantity"
                    ></el-input-number>
                  </td>
                  <td class="text-right">{{ item.quantity * item.price }}</td>
                  <th class="text-center">
                    <el-popconfirm
                      confirm-button-text="Sí"
                      cancel-button-text="No, gracias"
                      icon="el-icon-info"
                      icon-color="red"
                      title="¿Eliminar el producto?"
                      @confirm="removeProduct(item)"
                    >
                      <el-button
                        type="danger"
                        slot="reference"
                        icon="el-icon-delete"
                        circle
                      ></el-button>
                    </el-popconfirm>
                  </th>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row justify="space-around" class="m-4" v-if="totalItems">
        <v-col class="offset-md-10 col-md-2">
          <strong>Total: $ {{ totalAmount }}</strong>
        </v-col>
      </v-row>
      <v-row v-if="totalItems">
        <v-col class="offset-md-8 col-md-3">
          <router-link to="/checkout">
            <v-btn block color="primary"> Generar orden </v-btn>
          </router-link>
        </v-col>
      </v-row>
      <v-row v-if="totalItems">
        <v-col class="offset-md-8 col-md-1">
          <v-btn block color="danger"> Vaciar </v-btn>
        </v-col>
        <v-col class="col-md-2">
          <router-link to="/">
            <v-btn block color="success"> Seguir comprando </v-btn>
          </router-link>
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
    cart() {
      return this.$store.getters.cart;
    },
    totalAmount() {
      return this.$store.getters.totalAmount;
    },
    totalItems() {
      return this.$store.getters.totalItems;
    },
  },
  mounted() {},
  methods: {
    removeProduct(item) {
      this.$store.dispatch("removeProductFromCart", item.id);
    },
  },
};

//this.$store.dispatch("removeProductFromCart", item.id);
//this.$store.dispatch("clearCart");
</script>

<style lang="scss" scoped>
.el-icon-delete {
  font-size: 1.5em !important;
}
.el-input-number {
  width: 100px !important;
}
.el-icon-wallet,
.el-icon-sell {
  font-size: 3em;
}

.router-link-active {
  text-decoration: none !important;
}
</style>
