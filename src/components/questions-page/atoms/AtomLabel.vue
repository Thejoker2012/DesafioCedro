<template>
  <label :for="label" class="block text-sm font-medium text-gray-700">{{
    label
  }}</label>
</template>

<script>
export default {
  name: "AtomLabel",
  props: ["label"]
};
</script>

<style scoped></style>
