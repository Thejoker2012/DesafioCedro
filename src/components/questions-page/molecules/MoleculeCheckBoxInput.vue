<template>
  <div class="flex flex-rows items-center">
    <atom-check-box :label="label" :value="value" />
    <atom-label class="ml-3" :label="label" />
  </div>
</template>

<script>
import AtomCheckBox from "../atoms/AtomCheckBox";
import AtomLabel from "../atoms/AtomLabel";
export default {
  name: "MoleculeCheckBoxInput",
  props: ["value", "label"],
  components: {
    AtomCheckBox,
    AtomLabel
  }
};
</script>

<style scoped></style>
