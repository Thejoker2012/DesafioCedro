<template>
  <form ref="formQuestion" @submit.prevent="submit">
    <slot />
  </form>
</template>

<script>
export default {
  name: "AtomForm",
  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>

<style scoped></style>
