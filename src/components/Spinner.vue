<template lang="html">
  <section class="spinner">
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
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
