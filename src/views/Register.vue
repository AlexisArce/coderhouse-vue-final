<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <el-page-header @back="goBack" content="Registro"> </el-page-header>
        <register :createAccount="true" :modal="false" :form="user" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Register from "../components/Register";

export default {
  name: "RegisterView",
  components: {
    Register,
  },
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
      user: Object.assign({}, defaultForm),
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
