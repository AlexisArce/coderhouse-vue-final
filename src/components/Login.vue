<template>
  <section class="login">
    <v-container fluid>
      <v-row>
        <v-col class="offset-md-3 col-md-6">
          <v-form ref="form" v-model="valid" lazy-validation>
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

            <v-btn
              :disabled="!valid"
              color="blue-grey"
              class="my-10 white--text"
              @click="validate"
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
export default {
  name: "login",
  components: {},
  props: ["showRegisterButton"],
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "Debe ingresar un e-mail válido",
      (v) => /.+@.+\..+/.test(v) || "Debe ingresar un e-mail válido",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Debe ingresar la contraseña"],
  }),

  methods: {
    validate() {
      let isValid = this.$refs.form.validate();
      if (isValid) this.$router.push({ name: "Home" });
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

  computed: {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
