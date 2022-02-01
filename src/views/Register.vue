<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <el-page-header @back="goBack" content="Registro"> </el-page-header>
        <register />
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
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
