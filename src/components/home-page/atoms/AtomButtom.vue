<template>
  <div>
    <button
      type="button"
      class="inline-flex items-center h-12 w-28 px-4 py-2 border border-pink-border shadow-sm rounded-md text-pink-border bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-border"
      @click="input"
    >
      <span class="text-center text-xs w-full">{{ label }}</span>
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
