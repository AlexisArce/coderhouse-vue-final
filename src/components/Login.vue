<template>
  <section class="login">
    <v-container fluid>
      <v-row>
        <v-col class="offset-md-3 col-md-6">
          <v-form ref="form">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Contraseña"
              type="password"
              required
            ></v-text-field>

            <v-alert
              v-if="userNotFound"
              border="top"
              color="red lighten-2"
              dark
            >
              email o contraseña incorrecta
            </v-alert>

            <v-btn
              :disabled="!isValid"
              color="blue-grey"
              class="my-10 white--text"
              @click="logIn"
              block
            >
              Ingresar
            </v-btn>
            <v-btn
              outlined
              color="indigo"
              v-if="showRegisterButton"
              @click="register"
              block
            >
              Registrar
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  components: {},
  props: ["showRegisterButton"],
  data() {
    return {
      userNotFound: false,
      email: "",
      emailRules: [
        (v) => !!v || "Debe ingresar un e-mail válido",
        (v) => /.+@.+\..+/.test(v) || "Debe ingresar un e-mail válido",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Debe ingresar la contraseña"],
    };
  },

  methods: {
    logIn: async function () {
      const baseUrl = process.env.VUE_APP_ROOT_API;
      const users = await axios(`${baseUrl}/Users`);

      const found = users.data.find(
        (u) => u.email === this.email && u.password === this.password
      );
      if (found) {
        this.$router.push({ name: "Home" });
      } else {
        this.userNotFound = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    register() {
      this.$router.push({ name: "Register" });
    },
  },

  computed: {
    isValid() {
      return this.email && this.password;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
