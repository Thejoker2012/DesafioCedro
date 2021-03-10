<template>
  <input
    :id="label"
    :name="label"
    type="radio"
    v-model="value"
    @change="checkValue"
    class="focus:ring-yellow-800 h-4 w-4 text-yellow-800 border-gray-300"
  />
</template>

<script>
export default {
  name: "AtomCheckBox",
  props: ["label", "value"],
  methods: {
    checkValue(e) {
      this.$emit("change", e);
    }
  }
};
</script>

<style scoped></style>
