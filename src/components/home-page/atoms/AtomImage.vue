<template>
  <div class="flex justify-center">
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: "AtomImage",
  props: ["image"]
};
</script>

<style scoped></style>
