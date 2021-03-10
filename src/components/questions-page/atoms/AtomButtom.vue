<template>
  <div>
    <button
      @click="input"
      type="submit"
      class="inline-flex items-center h-10 w-28 px-4 py-2 border border-yellow-700  shadow-sm rounded-md text-gray-700 bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-800"
    >
      <span class="text-center text-xs font-bold w-full">{{ label }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AtomButtom",
  props: ["label"],
  methods: {
    input(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style scoped></style>
