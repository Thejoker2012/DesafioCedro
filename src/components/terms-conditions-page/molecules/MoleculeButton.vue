<template>
  <div class="mt-3">
    <atom-buttom :input-click="inputClick" :class="disabled">
      <atom-span :label="props.labelButton" />
    </atom-buttom>
  </div>
</template>

<script>
import AtomButtom from "../atoms/AtomButtom";
import AtomSpan from "../atoms/AtomSpan";

export default {
  name: "TermsMoleculeButton",
  props: ["props", "disable"],
  components: {
    AtomButtom,
    AtomSpan
  },
  computed: {
    disabled() {
      return !this.disable ? "opacity-25 pointer-events-none" : "";
    }
  },
  methods: {
    inputClick() {
      this.$emit("confirmar-termo", true);
    }
  }
};
</script>

<style scoped></style>
