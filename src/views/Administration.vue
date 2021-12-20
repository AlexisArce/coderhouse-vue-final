<template>
  <section class="administration">
    <div>Administration View</div>
    <ProductsCRUD />
  </section>
</template>

<script>
import ProductsCRUD from "../components/ProductsCRUD/index";

export default {
  name: "Administration",
  components: { ProductsCRUD },
};
</script>

<style lang="scss" scoped></style>
