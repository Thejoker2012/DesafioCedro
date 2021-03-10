<template>
  <div class="flex-col">
    <atom-image :image="props.image" />
    <atom-h4 class="pt-3 text-amber-title" :label="props.title" />
  </div>
</template>

<script>
import AtomH4 from "../atoms/AtomH4";
import AtomImage from "../atoms/AtomImage";
export default {
  name: "HomePageMoleculeInformationTitle",
  props: ["props"],
  components: {
    AtomH4,
    AtomImage
  }
};
</script>

<style scoped></style>
