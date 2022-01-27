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
      <v-spacer></v-spacer>
      <router-link to="/login">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
      </router-link>
      <router-link to="/cart">
        <el-badge :value="cartProductsCount" :max="10" class="item ms-5">
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
    },
    computed: {
       cartProductsCount(){
        return this.$store.getters.cartProductsCount;
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
</style>
