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
        <v-btn icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
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

      }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style scoped lang="scss">
.navbar {
}
</style>
