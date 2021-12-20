<template>
  <section class="home">
    <navbar />
    <v-container fluid>
      <v-row justify="space-around">
        <v-col>
          <carousel />
        </v-col>
      </v-row>
      <item-list />
    </v-container>
  </section>
</template>

<script>
import ItemList from "../components/ItemList/index";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel/index";

export default {
  name: "Home",

  components: {
    ItemList,
    Navbar,
    Carousel,
  },
};
</script>
