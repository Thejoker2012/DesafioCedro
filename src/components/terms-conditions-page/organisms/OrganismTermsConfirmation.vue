<template>
  <div class="w-full py-6">
    <molecule-information
      @close="closeModal"
      class="px-4"
      :props="getMoleculeInformation"
    />
    <div class="flex justify-center">
      <div class="flex-col pt-4 w-9/12">
        <molecule-check-box
          @input="checkedValue"
          :value="checked"
          :props="getMoleculeActions"
        />
        <molecule-button
          @confirmar-termo="confirmarTermo"
          :props="getMoleculeActions"
          :disable="checked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MoleculeInformation from "../molecules/MoleculeInformation";
import MoleculeButton from "../molecules/MoleculeButton";
import MoleculeCheckBox from "../molecules/MoleculeCheckBox";

import { mapGetters } from "vuex";

export default {
  name: "TermsOrganismCardInformation",
  components: {
    MoleculeInformation,
    MoleculeButton,
    MoleculeCheckBox
  },
  computed: {
    ...mapGetters("termsConditions", [
      "getMoleculeInformation",
      "getMoleculeActions"
    ]),
    ...mapGetters({
      checked: "getTermosCondicoes"
    })
  },
  methods: {
    checkedValue() {
      this.$store.dispatch("setAceitarTermos");
    },
    confirmarTermo() {
      this.$router.push({ name: "Questions" });
      this.closeModal();
    },
    closeModal() {
      this.$store.dispatch("setFecharModal");
      this.$store.dispatch("setNegarTermos");
    }
  }
};
</script>

<style scoped></style>
