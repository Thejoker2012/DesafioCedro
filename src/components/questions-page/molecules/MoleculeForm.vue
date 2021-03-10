<template>
  <atom-form @submit="submit">
    <atom-h4 class="text-red-900" :label="props.title" />
    <slot />
    <div class="flex flex-row-reverse p-2">
      <atom-buttom
        class="ml-2 bg-yellow-500 hover:bg-yellow-400 rounded text-white font-bold"
        :label="props.labelSalvar"
      />
      <atom-buttom
        @click="voltar"
        class="hover:bg-gray-100"
        :label="props.labelVoltar"
      />
    </div>
  </atom-form>
</template>

<script>
import AtomForm from "../atoms/AtomForm";
import AtomH4 from "../atoms/AtomH4";
import AtomButtom from "../atoms/AtomButtom";
export default {
  name: "MoleculeForm",
  props: ["props"],
  components: {
    AtomForm,
    AtomH4,
    AtomButtom
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
    voltar() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped></style>
