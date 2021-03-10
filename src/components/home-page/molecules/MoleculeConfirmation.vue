<template>
  <div class="pt-12">
    <atom-p :label="props.title" />
    <div class="flex justify-center pt-4">
      <atom-buttom
        @click="confirm"
        class="pr-2"
        :label="props.buttonsLabel.confirm"
      />
      <atom-buttom @click="cancel" :label="props.buttonsLabel.cancel" />
    </div>
  </div>
</template>

<script>
import AtomButtom from "../atoms/AtomButtom";
import AtomP from "../atoms/AtomP";
export default {
  name: "HomePageMoleculeConfirmation",
  props: ["props"],
  components: {
    AtomButtom,
    AtomP
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped></style>
