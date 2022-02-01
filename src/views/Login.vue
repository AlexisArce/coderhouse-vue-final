<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <el-page-header @back="goBack" content="Login"> </el-page-header>
        <login :showRegisterButton="true" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from "../components/Login";

export default {
  name: "LoginView",
  components: {
    Login,
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
