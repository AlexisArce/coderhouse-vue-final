<template>
  <section class="cart">
    <v-container fluid>
      <v-row>
        <v-col>
          <el-page-header @back="goBack" content=""> </el-page-header>
        </v-col>
      </v-row>
      <v-row justify="space-around" v-if="!orderWasGenerated">
        <v-col class="text-center" cols="12" sm="6">
          <h1>Carrito</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="offset-md-2 col-md-8">
          <section
            v-if="!totalItems && !orderWasGenerated"
            class="text-center my-10"
            align="center"
          >
            <p>
              El carrito está vacío :(
              <router-link to="/">
                <el-button class="mx-3" type="primary">Comprar</el-button>
              </router-link>
            </p>
          </section>
          <v-simple-table v-if="totalItems && !orderWasGenerated">
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
                  <td class="text-left">
                    <el-link
                      :underline="false"
                      @click="viewItemDetails(item)"
                      >{{ item.title }}</el-link
                    >
                  </td>
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
                      title="¿Desea eliminar el producto?"
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
      <v-row v-if="totalItems && !loading">
        <v-col class="offset-md-8 col-md-3">
          <v-btn block color="primary" @click="generateOrder">
            Generar orden
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="totalItems && !loading">
        <v-col class="offset-md-8 col-md-1">
          <v-btn block color="danger" @click="clearCart"> Vaciar </v-btn>
        </v-col>
        <v-col class="col-md-2">
          <router-link to="/">
            <v-btn block color="success"> Seguir comprando </v-btn>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="loading" class="text-center">
          <Spinner class="m-5" message="" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <GeneratedOrder
            v-if="orderWasGenerated"
            :order="order"
          ></GeneratedOrder>
        </v-col>
      </v-row>
    </v-container>

    <el-dialog
      title="Generar orden"
      :visible.sync="centerDialogVisible"
      width="80%"
      center
    >
      <Register
        :createAccount="false"
        :modal="true"
        :form="order.buyer"
        ref="userForm"
      />

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancelar</el-button>
        <el-button type="primary" @click="sendOrder">Confirm</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import axios from "axios";
import Spinner from "./Spinner";
import GeneratedOrder from "./GeneratedOrder";
import Register from "./Register";

export default {
  name: "cart",
  components: { Spinner, GeneratedOrder, Register },
  props: [],
  data() {
    const defaultForm = Object.freeze({
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      email: "",
      password: "",
    });

    return {
      loading: false,
      orderWasGenerated: false,
      centerDialogVisible: false,
      order: {
        buyer: Object.assign({}, defaultForm),
      },
      e1: 1,
    };
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
    viewItemDetails(item) {
      this.$router.push({ name: "ItemDetails", params: { id: item.id } });
    },
    removeProduct(item) {
      this.$store.dispatch("removeProductFromCart", item.id);
    },
    clearCart() {
      this.$store.dispatch("clearCart");
    },
    generateOrder() {
      if (this.$store.getters.isAuthenticated) {
        this.order.buyer = this.$store.getters.authenticatedUser;
        this.sendOrder();
      } else {
        this.centerDialogVisible = true;
      }
    },
    loadOrderData() {
      this.order = { ...this.order, ...this.cart };
      this.order.totalAmount = this.totalAmount;
      this.order.totalItems = this.totalItems;
    },
    sendOrder() {
      if (this.centerDialogVisible && !this.$refs.userForm.formIsValid) {
        this.$refs.userForm.validate();
        return;
      }

      if (this.centerDialogVisible && this.$refs.userForm.formIsValid) {
        this.centerDialogVisible = false;
      }

      const baseUrl = process.env.VUE_APP_ROOT_API;
      this.loading = true;
      this.loadOrderData();

      axios
        .post(`${baseUrl}/Orders`, this.order)
        .then((data) => {
          const { id } = data.data;
          this.order.id = id;

          this.clearCart();
          this.orderWasGenerated = true;
          this.$alert(
            `La orden de compra #${id} fue generada correctamente!`,
            "Orden de compra enviada",
            {
              confirmButtonText: "OK",
              type: "success",
              center: true,
            }
          );
        })
        .finally(() => {
          this.loading = false;
        });
    },
    goBack() {
      this.$router.push({ name: "Home" });
    },
  },
};
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
