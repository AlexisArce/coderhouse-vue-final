<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-col class="text-center" cols="12" sm="6">
        <h1>Pedidos</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <section v-if="!orders.length" class="text-center my-10" align="center">
          <p>No hay pedidos realizados :(</p>
        </section>

        <v-simple-table v-if="orders.length">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th class="text-left">Fecha</th>
                <th class="text-left">Cliente</th>
                <th class="text-left">Teléfono</th>
                <th class="text-left">Dirección</th>
                <th class="text-center">Estado</th>
                <th class="text-right">Total $</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td class="text-center">
                  {{ order.id }}
                </td>
                <td class="text-left">
                  {{
                    new Date(order.createdAt).toLocaleDateString("es-es", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  }}
                </td>
                <td class="text-left">
                  {{ order.buyer.firstname }} {{ order.buyer.lastname }}
                </td>
                <td class="text-left">
                  {{ order.buyer.phone }}
                </td>
                <td class="text-left">{{ order.buyer.address }}</td>
                <td class="text-center">{{ "entregado" }}</td>
                <td class="text-right">{{ order.totalAmount }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-if="loading" class="text-center">
        <Spinner class="m-5" message="" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Spinner from "./Spinner";

export default {
  components: { Spinner },
  props: [],
  data() {
    return {
      orders: [],
      loading: false,
    };
  },
  computed: {},
  mounted: async function () {
    const baseUrl = process.env.VUE_APP_ROOT_API;
    this.loading = true;
    const result = await axios(`${baseUrl}/Orders`);
    this.orders = result.data;
    this.loading = false;
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
