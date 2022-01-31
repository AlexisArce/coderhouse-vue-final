<template lang="html">
  <section class="generated-order text-center" align="center">
    <h2 class="my-10">¡Muchas gracias!</h2>
    <h3>
      Su pedido #{{ order.id }} será despachado en 30/45 minutos aproximadamente
    </h3>
    <el-image :src="imageUrl" class="my-10">
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'generated-order',
    props: ['order'],
    mounted () {

    },
    data () {
      return {
        imageUrl: "./assets//delivery.gif"
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss"></style>
