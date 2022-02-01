<template>
  <section class="register">
    <v-container fluid>
      <v-row v-if="!userWasCreated">
        <v-col
          :class="[modal ? 'offset-md-1 col-md-10' : 'offset-md-3 col-md-6']"
        >
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
              v-model="form.phone"
              :rules="rules.phone"
              label="Teléfono"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.address"
              :rules="rules.address"
              color="blue darken-2"
              label="Dirección"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              color="blue darken-2"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-if="createAccount"
              v-model="form.password"
              :rules="rules.password"
              color="blue darken-2"
              label="Contraseña"
              type="password"
              required
            ></v-text-field>

            <v-checkbox
              v-if="createAccount"
              v-model="form.isAdmin"
              label="¿Es administrador?"
            ></v-checkbox>

            <v-row
              align="center"
              justify="space-around"
              class="my-8"
              v-if="createAccount"
            >
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
      <v-row v-if="userWasCreated">
        <v-col class="offset-md-3 col-md-6">
          <v-alert dense text type="success">
            Usuario registrado correctamente!
          </v-alert>
          <router-link to="/login"> Ir al login </router-link>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "register",
  props: ["createAccount", "modal", "form"],
  data() {
    return {
      phoneIsValid: false,
      userWasCreated: false,
      rules: {
        firstname: [
          (val) => (val || "").length > 0 || "Debe ingresar su nombre",
        ],
        lastname: [
          (val) => (val || "").length > 0 || "Debe ingresar su apellido",
        ],
        address: [
          (val) => (val || "").length > 0 || "Debe ingresar su domicilio",
        ],
        email: [
          (v) => !!v || "Debe ingresar un e-mail válido",
          (v) => /.+@.+\..+/.test(v) || "Debe ingresar un e-mail válido",
        ],
        password: [(v) => !!v || "Debe ingresar la contraseña"],
        phone: [
          (val) =>
            (val || "").length > 0 || "Debe ingresar un número de teléfono",
          (v) =>
            /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(
              v
            ) || "Debe ingresar un número de teléfono válido",
        ],
      },
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.firstname &&
        this.form.lastname &&
        this.form.email &&
        (this.form.password || !this.props?.createAccount) &&
        this.form.address &&
        this.form.phone
      );
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },

    validate() {
      return this.$refs.form.validate();
    },

    submit() {
      if (this.createAccount) {
        const baseUrl = process.env.VUE_APP_ROOT_API;

        axios
          .post(`${baseUrl}/Users`, this.form)
          .then(() => {
            this.userWasCreated = true;
            //this.resetForm();
          })
          .catch(function () {});
      }
    },

    goBack() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
