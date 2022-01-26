<template lang="html">
  <v-card class="pa-2" outlined>
    <v-img
      :src="product.image"
      :lazy-src="product.image"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1),
            rgba(0,0,0,.5)"
      max-height="250"
      max-width="500"
    >
      <v-card-title v-text="product.title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-chip class="ma-2" large dark>$ {{ product.price }} </v-chip>
      <el-tag v-if="product.isVeggie" type="success">Veggie</el-tag>
      <v-spacer></v-spacer>
      <el-tooltip
        class="item"
        effect="dark"
        content="ver detalles"
        placement="left"
      >
        <el-button
          icon="el-icon-search"
          circle
          @click="viewItemDetails(product)"
        ></el-button>
      </el-tooltip>
      <el-button type="danger" @click="addProductToCart(product)"
        >Agregar</el-button
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="js">

  export default  {
    name: 'card',
    props: ["product"],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      viewItemDetails(item) {
        this.$router.push({ name: "ItemDetails", params: { id: item.id } });
      },
      addProductToCart(product) {
        this.$store.dispatch("addProductToCart", product);
      },
    },
    computed: {

    }
}
</script>

<style scoped lang="scss"></style>
