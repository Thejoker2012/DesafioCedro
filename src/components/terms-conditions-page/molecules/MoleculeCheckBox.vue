<template>
  <div class="flex items-start">
    <atom-check-box :value="value" @input="input" :label="props.labelCheck" />
    <atom-label :label="props.labelCheck" />
  </div>
</template>

<script>
import AtomLabel from "../atoms/AtomLabel";
import AtomCheckBox from "../atoms/AtomCheckBox";
export default {
  name: "TermsMoleculeInput",
  props: ["props", "value"],
  components: {
    AtomLabel,
    AtomCheckBox
  },
  methods: {
    input(e) {
      this.$emit("input", e);
    }
  }
};
</script>

<style scoped></style>
