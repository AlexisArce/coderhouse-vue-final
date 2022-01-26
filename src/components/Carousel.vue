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
          src: "./assets/pexels-rodolfo-clix-1596884_2.jpg",
        },
        {
          src: "https://doc-14-78-docs.googleusercontent.com/docs/securesc/9bd47prjkd6cfdfo5l8n9jv3n3589bqd/5k3mtr17305slabppm2fdmh0gtn3glsg/1643165550000/14902857521568462677/16942732804764863682/1Ybof4vfRr_rDsfH8Sz1KOXjDTg1aBF_P?authuser=0",
        },
        {
          src: "https://doc-0o-7c-docs.googleusercontent.com/docs/securesc/9bd47prjkd6cfdfo5l8n9jv3n3589bqd/htfhudarvc9vq6b8rm7516ipvi2a955u/1643165550000/13232096779087323403/16942732804764863682/1af8LqN2KM7RPXhpy52_qTuBKTsrwjxCq?authuser=0",
        },
        {
          src: "./assets/pexels-narda-yescas-1566837.jpg",
        },
        {
          src: "./assets/pexels-pixabay-280453.jpg",
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
