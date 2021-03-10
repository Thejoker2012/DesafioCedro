<template>
  <div class="sm:w-7/12 w-full px-2">
    <molecule-information-title :props="getMoleculeInformationTitle" />
    <molecule-information :props="getMoleculeInformation" />
    <molecule-confirmation
      :props="getMoleculeConfirmation"
      @confirm="confirm"
      @cancel="cancel"
    />
  </div>
</template>

<script>
import MoleculeInformationTitle from "../molecules/MoleculeInformationTitle";
import MoleculeInformation from "../molecules/MoleculeInformation";
import MoleculeConfirmation from "../molecules/MoleculeConfirmation";

import { mapGetters } from "vuex";

export default {
  name: "HomePageOrganismCardInformation",
  components: {
    MoleculeInformationTitle,
    MoleculeInformation,
    MoleculeConfirmation
  },
  computed: {
    ...mapGetters("homePage", [
      "getMoleculeInformationTitle",
      "getMoleculeInformation",
      "getMoleculeConfirmation"
    ])
  },
  methods: {
    confirm() {
      this.$router.push({ name: "Questions" });
    },
    cancel() {
      this.$store.dispatch("setAbrirModal");
    }
  }
};
</script>

<style scoped></style>
