<template>
  <div class="flex justify-center">
    <organism-card-information />
  </div>
</template>

<script>
import OrganismCardInformation from "../organisms/OrganismCardInformation";
export default {
  name: "TemplateHomePage",
  props: ["props"],
  components: {
    OrganismCardInformation
  }
};
</script>

<style></style>
