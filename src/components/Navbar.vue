<template lang="html">
  <v-app-bar color="black" app>
    <v-toolbar color="black" dark fixed>
      <router-link to="/">
        <v-img
          src="../assets/logo_By_Wix_2.jpg"
          max-height="100"
          max-width="200"
          contain
        ></v-img>
      </router-link>

      <router-link
        v-if="isAdmin"
        to="/administration/products"
        class="me-5 ms-10"
      >
        <span class="item-navbar">Productos</span>
      </router-link>

      <router-link v-if="isAdmin" to="/administration/orders" class="me-5">
        <span class="item-navbar">Pedidos</span>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/login" v-if="!isAuthenticated">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
      </router-link>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            medium
            color="white"
            v-if="isAuthenticated"
            v-bind="attrs"
            v-on="on"
            @click="logout"
          >
            mdi-logout
          </v-icon>
        </template>
        <span>Cerrar sesión</span>
      </v-tooltip>

      <router-link v-if="!isAdmin" to="/cart">
        <el-badge :value="cartProductsCount" :max="10" class="item ms-4">
          <i class="el-icon-shopping-cart-2"></i>
        </el-badge>
      </router-link>
    </v-toolbar>
  </v-app-bar>
</template>

<script lang="js">

  export default  {
    name: 'navbar',
    props: [],
    mounted () {

    },
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    },
    methods: {
      logout(){
        this.$store.dispatch("logout");
        this.$router.push({ name: "Home" });
      }
    },
    computed: {
      cartProductsCount(){
        return this.$store.getters.totalItems;
      },
      isAdmin(){
        return this.$store.getters.isAdmin;
      },
      isAuthenticated(){
        return this.$store.getters.isAuthenticated;
      }
    }
}
</script>

<style scoped lang="scss">
.v-application a {
  text-decoration: none;
}
.el-icon-shopping-cart-2 {
  font-size: 28px;
  color: white;
}

.item-navbar {
  color: white;
}
</style>
