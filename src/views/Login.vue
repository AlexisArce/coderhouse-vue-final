<template>
  <div>
    <login />
    <register v-if="registration" />
  </div>
</template>

<script>
import Login from "../components/Login";
import Register from "../components/Register";

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
