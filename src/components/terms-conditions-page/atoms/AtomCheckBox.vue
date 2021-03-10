<template>
  <input
    :id="label"
    :name="label"
    type="checkbox"
    v-model="check"
    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
  />
</template>

<script>
export default {
  name: "AtomCheckBox",
  props: ["label", "value"],
  data() {
    return {
      check: false
    };
  },
  watch: {
    check(value) {
      this.checkValue(value);
    }
  },
  updated() {
    if (!this.check) {
      this.check = false;
    }
  },
  methods: {
    checkValue(e) {
      this.$emit("input", e);
    }
  }
};
</script>

<style scoped></style>
