<template>
  <div class="flex flex-col items-center">
    <button
      @click="closeModal"
      class="opacity-50 pt-2 px-4 absolute top-0 right-0 "
    >
      X
    </button>
    <atom-h4 class="font-medium text-pink-title" :label="props.title" />
    <atom-p class="pt-3 font-medium text-justify" :label="props.description" />
  </div>
</template>

<script>
import AtomH4 from "../atoms/AtomH4";
import AtomP from "../atoms/AtomP";
export default {
  name: "TermsMoleculeInformation",
  props: ["props"],
  components: {
    AtomH4,
    AtomP
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    }
  }
};
</script>

<style scoped></style>
