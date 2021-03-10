<template>
  <div class="h-full flex flex-col justify-center align-middle">
    <div class="flex-col">
      <template-home-page :props="{ confirmacao, termos }" />
      <template-terms-confirmation />
    </div>
  </div>
</template>

<script>
import TemplateHomePage from "@/components/home-page/templates/TemplateHomePage";
import TemplateTermsConfirmation from "@/components/terms-conditions-page/templates/TemplateTermsConfirmation";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    TemplateHomePage,
    TemplateTermsConfirmation
  },
  computed: {
    ...mapGetters({
      confirmacao: "getInformacoesConfirmadas",
      termos: "getTermosCondicoes"
    })
  }
};
</script>
