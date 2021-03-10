<template>
  <div class="flex flex-col items-center px-2 pt-2 ">
    <atom-label :label="props.title" />
    <atom-select :label="props.title" value="" :items="props.options" />
  </div>
</template>

<script>
import AtomLabel from "../atoms/AtomLabel";
import AtomSelect from "../atoms/AtomSelect";
export default {
  name: "MoleculeSelectInput",
  props: ["props"],
  components: {
    AtomLabel,
    AtomSelect
  }
};
</script>

<style scoped></style>
