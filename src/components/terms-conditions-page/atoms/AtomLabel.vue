<template>
  <div class="ml-3 text-sm">
    <label :for="label" class="font-medium text-gray-700">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "AtomLabel",
  props: ["label"]
};
</script>

<style scoped></style>
