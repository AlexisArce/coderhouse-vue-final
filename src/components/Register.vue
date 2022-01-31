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
              v-model="form.address"
              color="blue darken-2"
              label="Dirección"
              required
            ></v-text-field>

            <!--
            <v-text-field
              v-model="form.phone"
              color="blue darken-2"
              label="Teléfono"
              required
            ></v-text-field>
            -->

            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              color="blue darken-2"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.password"
              :rules="rules.password"
              color="blue darken-2"
              label="Contraseña"
              type="password"
              required
            ></v-text-field>

            <div class="my-2">
              <v-label>Número de teléfono</v-label>
              <MazPhoneNumberInput
                class="my-2"
                required="true"
                default-country-code="AR"
                v-model="form.phone"
                :translations="{
                  countrySelectorLabel: 'Código país',
                  countrySelectorError: '',
                  phoneNumberLabel: 'Número de teléfono',
                  example: 'Ejemplo :',
                }"
                :onlyCountries="['AR']"
                noSearch="true"
                @update="updatePhone"
              />
            </div>
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
import { MazPhoneNumberInput } from "maz-ui";

export default {
  name: "register",
  components: { MazPhoneNumberInput },
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
      phoneIsValid: false,
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
        this.form.password &&
        this.form.address &&
        this.form.phone &&
        this.phoneIsValid
      );
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },

    updatePhone(event) {
      this.phoneIsValid = event.isValid;
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
