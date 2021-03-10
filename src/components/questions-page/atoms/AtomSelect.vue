<template>
  <select
    :id="label"
    :name="label"
    class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
  >
    <option selected>Selecione...</option>
    <option v-for="(item, index) in items" :key="index">{{ item.text }}</option>
  </select>
</template>

<script>
export default {
  name: "AtomSelect",
  props: ["label", "value", "items"]
};
</script>

<style scoped></style>
