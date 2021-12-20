<template>
  <section class="home">
    <navbar />
    <v-container fluid>
      <v-row justify="space-around">
        <v-col>
          <v-img
            src="../assets/pexels-rodolfo-clix-1596884.jpg"
            aspect-ratio="1.7"
          ></v-img>
        </v-col>
      </v-row>
      <item-list />
    </v-container>
  </section>
</template>

<script>
import ItemList from "../components/ItemList/index";
import Navbar from "../components/Navbar";

export default {
  name: "Home",

  components: {
    ItemList,
    Navbar,
  },
};
</script>
