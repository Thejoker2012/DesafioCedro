<template>
  <div class="w-full">
    <button
      type="button"
      class="items-center w-full h-12 bg-orange-400 justify-center rounded-md border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
      @click="inputClick"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "AtomButtom",
  props: {
    inputClick: {
      type: Function
    }
  }
};
</script>

<style scoped></style>
