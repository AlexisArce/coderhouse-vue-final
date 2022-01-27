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
      <router-link to="/cart">
        <v-btn icon class="mx-2">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/login">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
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
    }
}
</script>

<style scoped lang="scss">
.v-application a {
  text-decoration: none;
}
</style>
