<template>
  <div>
    <login />
    <register v-if="registration" />
  </div>
</template>

<script>
import Login from "../components/Login/index";
import Register from "../components/Register/index";

export default {
  name: "LoginView",
  components: {
    Login,
    Register,
  },
  data() {
    return {
      registration: false,
    };
  },
};
</script>
