<template lang="html">
  <section class="spinner">
    <img src="../assets/pizza_loading.gif" />
    <h4>{{ message }}</h4>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'spinner',
    props: ['message'],
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
.spinner {
}
</style>
