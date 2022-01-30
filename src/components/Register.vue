<template>
  <section class="register">
    <v-container fluid>
      <v-row>
        <v-col>
          <el-page-header @back="goBack" content="Registro"> </el-page-header>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="offset-md-3 col-md-6">
          <v-form ref="form" @submit.prevent="submit">
            <v-text-field
              v-model="form.firstname"
              :rules="rules.firstname"
              color="purple darken-2"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.lastname"
              :rules="rules.lastname"
              color="blue darken-2"
              label="Apellido"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.password"
              :rules="rules.password"
              label="Contraseña"
              type="password"
              required
            ></v-text-field>

            <v-row align="center" justify="space-around" class="my-8">
              <v-btn text @click="goBack" plain> Cancelar </v-btn>
              <v-btn
                :disabled="!formIsValid"
                text
                color="primary"
                plain
                type="submit"
              >
                Registrar
              </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "register",
  data() {
    const defaultForm = Object.freeze({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        firstname: [
          (val) => (val || "").length > 0 || "Debe ingresar su nombre",
        ],
        lastname: [
          (val) => (val || "").length > 0 || "Debe ingresar su apellido",
        ],
        email: [
          (v) => !!v || "Debe ingresar un e-mail válido",
          (v) => /.+@.+\..+/.test(v) || "Debe ingresar un e-mail válido",
        ],
        password: [(v) => !!v || "Debe ingresar la contraseña"],
      },
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.firstname &&
        this.form.lastname &&
        this.form.email &&
        this.form.password
      );
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },

    submit() {
      axios
        .post("https://61ba455648df2f0017e5aa20.mockapi.io/Users", this.form)
        .then(() => {
          this.resetForm();
        })
        .catch(function () {});
    },

    goBack() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
