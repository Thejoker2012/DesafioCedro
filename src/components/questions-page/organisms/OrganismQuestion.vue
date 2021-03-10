<template>
  <molecule-form
    :props="{ title, labelVoltar: 'Voltar', labelSalvar: 'Salvar' }"
    @submit="save"
    @click="voltar"
  >
    <div>
      <!-- <fieldset>
        <div
          v-for="(question, index) in loadQuestions"
          :key="index"
          class="flex flex-col items-center"
        >
          <div class="w-full flex justify-center">
            <atom-h-4 class="w-10/12" :label="question.description" />
          </div>
          <div class="flex flex-rows justify-center ">
            <div v-for="(option, index) in question.options" :key="index">
              <div class="w-72 text-left px-4 py-6">
                <molecule-check-box-input
                  :label="option.label"
                  :value="option.value"
                />
              </div>
            </div>
          </div>
        </div>
      </fieldset> -->

      <fieldset>
        <div class="flex flex-col items-center">
          <div class="w-full flex justify-center">
            <atom-h-4 class="w-10/12" :label="loadQuestions[0].description" />
          </div>
          <div class="flex flex-rows justify-center ">
            <div
              class="w-72 text-left px-4 py-6"
              v-for="(iten, index) in loadOptionQuestao1"
              :key="index"
            >
              <molecule-check-box-input
                :label="iten.label"
                :value="iten.value"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div class="flex flex-col items-center">
          <div class="w-full flex justify-center">
            <atom-h-4 class="w-10/12" :label="loadQuestions[1].description" />
          </div>
          <div class="flex flex-rows justify-center ">
            <div
              class="w-72 text-left px-4 py-6"
              v-for="(iten, index) in loadOptionQuestao2"
              :key="index"
            >
              <molecule-check-box-input
                :label="iten.label"
                :value="iten.value"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div class="flex flex-col items-center">
          <div class="w-full flex justify-center">
            <atom-h-4 class="w-10/12" :label="loadQuestions[2].description" />
          </div>
          <div class="flex flex-rows justify-center ">
            <div
              class="w-72 text-left px-4 py-6"
              v-for="(iten, index) in loadOptionQuestao3"
              :key="index"
            >
              <molecule-check-box-input
                :label="iten.label"
                :value="iten.value"
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>

    <div class="w-full flex justify-center pb-4">
      <atom-h-4
        class="w-10/12"
        label="4 - Qual sua familiaridade com tipos de investimentos abaixos? Leve em
      consideração os valores aplicados nos ultimos 2 anos."
      />
    </div>
    <h4></h4>
    <div class="flex flex-rows">
      <div class="flex flex-col w-9/12">
        <molecule-select-input :props="rendaFixa" />
        <molecule-select-input :props="acoesAvista" />
      </div>
      <div class="flex flex-col w-9/12">
        <molecule-select-input :props="fluxoInvestimentos" />
        <molecule-select-input :props="aluguelAcoes" />
      </div>
    </div>
  </molecule-form>
</template>

<script>
import MoleculeForm from "../molecules/MoleculeForm.vue";
import MoleculeCheckBoxInput from "../molecules/MoleculeCheckBoxInput";
import MoleculeSelectInput from "../molecules/MoleculeSelectInput";
import AtomH4 from "../atoms/AtomH4";

import { mapGetters } from "vuex";
export default {
  name: "OrganismaQuestionForm",
  components: {
    MoleculeForm,
    MoleculeCheckBoxInput,
    MoleculeSelectInput,
    AtomH4
  },
  computed: {
    ...mapGetters({
      title: "questions/getFormTitle",
      questions: "questions/getQuestions",
      options1: "questions/getOpcaoQuestao1",
      options2: "questions/getOpcaoQuestao2",
      options3: "questions/getOpcaoQuestao3",
      acoesAvista: "questions/getAcoesAVista",
      aluguelAcoes: "questions/getaluguelAcoes",
      fluxoInvestimentos: "questions/getFluxoInvestimentos",
      rendaFixa: "questions/getRendaFixa"
    }),

    loadQuestions() {
      const novo = this.questions.map(res => {
        return res;
      });
      console.log(novo);
      return novo;
    },
    loadOptionQuestao1() {
      const novo = this.options1.map(res => {
        return res;
      });
      console.log(novo);
      return novo;
    },
    loadOptionQuestao2() {
      const novo = this.options2.map(res => {
        return res;
      });
      console.log(novo);
      return novo;
    },
    loadOptionQuestao3() {
      const novo = this.options3.map(res => {
        return res;
      });
      console.log(novo);
      return novo;
    }
  },
  methods: {
    save() {
      this.$router.push({ name: "Sucess" });
    },
    voltar() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped></style>
