<template lang="html">
  <section class="app-title">
    <img src="../assets/kentucky_pizza/tit_nuestras-pizzas.svg" />
  </section>
</template>

<script lang="js">

  export default  {
    name: 'app-title',
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
.app-title img {
  position: relative;
  display: block;
  width: 500px;
  margin: auto;
}

@media (max-width: 540px) {
  .app-title img {
    width: 250px;
  }
}
</style>
