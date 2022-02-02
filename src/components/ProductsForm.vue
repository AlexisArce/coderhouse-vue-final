<template>
  <section class="products-form">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="editedItem.title"
            label="Nombre"
            :rules="[rules.required, rules.counter]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="editedItem.description"
            label="Descripción"
            :rules="[rules.required, rules.counter]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="editedItem.price"
            label="Precio"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="8" md="8">
          <v-text-field
            v-model="editedItem.image"
            label="URL de la imagen"
            :rules="[rules.required, rules.counter]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <v-checkbox
            v-model="editedItem.isVeggie"
            label="¿Es vegetariana?"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-form>
  </section>
</template>

<script>
export default {
  name: "products-form",
  components: {},
  props: ["editedItem"],
  data() {
    return {
      rules: {
        required: (value) => !!value || "Campo requerido.",
        counter: (value) => value.length <= 150 || "Máximo 150 caracteres",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "El e-mail ingresado no es válido.";
        },
        onlyLetters: (value) => {
          const pattern = /^[a-zA-Z\s]*$/;
          return pattern.test(value) || "El valor ingresado no es válido.";
        },
      },
      valid: true,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped></style>
