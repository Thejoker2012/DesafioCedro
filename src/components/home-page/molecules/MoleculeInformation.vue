<template>
  <div class="flex-col text-amber-text">
    <atom-p
      v-for="(info, index) in props.description"
      :key="index"
      class="pt-4"
      :label="info"
    />
  </div>
</template>

<script>
import AtomP from "../atoms/AtomP";
export default {
  name: "HomePageMoleculeInformation",
  props: ["props"],
  components: {
    AtomP
  }
};
</script>

<style scoped></style>
