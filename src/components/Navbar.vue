<template lang="html">
  <v-toolbar color="indigo" dark>
    <router-link to="/">
      <v-toolbar-title>e-commerce</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/cart">
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </router-link>
  </v-toolbar>
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
