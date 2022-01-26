<template>
  <section class="carousel">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  name: "carousel",
  components: {},
  props: [],
  data() {
    return {
      items: [
        {
          src: "./assets/pexels-pixabay-280453.jpg",
        },
        {
          src: "./assets/pexels-narda-yescas-1566837.jpg",
        },
        {
          src: "./assets/pexels-rodolfo-clix-1596884_2.jpg",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
