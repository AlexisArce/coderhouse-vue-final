<template>
  <section class="home">
    <navbar />
    <v-container fluid>
      <v-row justify="space-around">
        <v-col>
          <carousel />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col> <app-title /></v-col>
      </v-row>
      <item-list />
    </v-container>
  </section>
</template>

<script>
import ItemList from "../components/ItemList";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import AppTitle from "../components/AppTitle";

export default {
  name: "Home",

  components: {
    ItemList,
    Navbar,
    Carousel,
    AppTitle,
  },
};
</script>
