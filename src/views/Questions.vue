<template>
  <div class="h-full flex flex-col justify-center align-middle">
    <div class="flex-col">
      <template-questions />
    </div>
  </div>
</template>

<script>
import TemplateQuestions from "@/components/questions-page/templates/TemplateQuestions";
export default {
  name: "Questions",
  components: {
    TemplateQuestions
  },
  computed: {}
};
</script>
