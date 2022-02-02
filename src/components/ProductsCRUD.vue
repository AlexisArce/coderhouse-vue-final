<template>
  <section class="products-crud">
    <v-container fluid>
      <v-row justify="space-around">
        <v-col class="text-center" cols="12" sm="6">
          <h1>Productos</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-data-table
            :headers="headers"
            :items="products"
            :items-per-page="10"
            :loading="loadingProducts"
            :search="search"
            class="elevation-1"
            loading-text="Cargando la información..."
          >
            <template v-slot:item.isVeggie="{ item }">
              <v-chip :color="chipColor(item)" dark>
                {{ chipText(item) }}
              </v-chip>
            </template>

            <template v-slot:top>
              <v-toolbar flat>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Buscar"
                  single-line
                  hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="1000px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Nuevo producto
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <products-form
                          :edited-item="editedItem"
                          ref="productForm"
                        />
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancelar
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Guardar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="600px">
                  <v-card>
                    <v-card-title class="text-h5"
                      >¿Está seguro de eliminar el registro?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">
                        Cancelar
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm(editedItem)"
                      >
                        Sí
                      </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize"> Reset </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProductsForm from "./ProductsForm";

export default {
  name: "products-data-table",
  components: { ProductsForm },
  props: [],
  data() {
    return {
      search: "",
      headers: getHeaders(),
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: defaultItem(),
      defaultItem: defaultItem(),
    };
  },

  created() {},
  mounted() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$store.dispatch("fetchProducts");
    },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.products.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$refs.productForm.resetValidation();
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (!this.$refs.productForm.validate()) return;

      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
        this.products.push(this.editedItem);
      }
      this.close();
    },

    chipColor(item) {
      return item.isVeggie ? "green" : "gray";
    },

    chipText(item) {
      return item.isVeggie ? "Sí" : "No";
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva pizza" : "Editar pizza";
    },
    hasItems: () => {
      return this.$store.getters.totalItems > 0;
    },
    products() {
      return this.$store.getters.products;
    },
    loadingProducts() {
      return this.$store.getters.loadingProducts;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
};

const getHeaders = () => {
  return [
    { text: "#", value: "id", width: 50 },
    {
      text: "Nombre",
      value: "title",
      width: 150,
      align: "start",
    },
    {
      text: "Ingredientes",
      value: "description",
      align: "start",
    },
    {
      text: "Precio",
      value: "price",
      align: "end",
      width: 100,
    },
    {
      text: "Vegetariana",
      value: "isVeggie",
      align: "center",
      width: 120,
    },
    { text: "Valoración", value: "rating", width: 150, align: "center" },
    { text: "Acciones", value: "actions", sortable: false },
  ];
};

const defaultItem = () => {
  return {
    title: "",
    image: "",
    price: 0,
    description: "",
  };
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.5em !important;
}
</style>
