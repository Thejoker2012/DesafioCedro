import Vue from "vue";
import Vuex from "vuex";

import homePage from "./home-page";
import termsConditions from "./terms-condition-page";
import questions from "./questions-page";
// import termsConditionsGetters from "./terms-condition-page/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    informacoesConfirmadas: {
      aceitar: false
    },
    termosEcondicoes: {
      aceitar: false
    },
    habilitarBotaoConfirmacao: false,
    habilitarModal: false
  },

  getters: {
    getInformacoesConfirmadas(state) {
      return state.informacoesConfirmadas.aceitar;
    },
    getTermosCondicoes(state) {
      return state.termosEcondicoes.aceitar;
    },
    getHabilitarBotaoConfirmacao(state) {
      return state.habilitarBotaoConfirmacao;
    },
    getModal(state) {
      return state.habilitarModal;
    }
  },

  mutations: {
    ACEITAR_CONFIRMACAO(state) {
      state.informacoesConfirmadas.aceitar = false;
    },
    NEGAR_CONFIRMACAO(state) {
      state.informacoesConfirmadas.aceitar = true;
    },
    ACEITAR_TERMOS(state) {
      state.termosEcondicoes.aceitar = !state.termosEcondicoes.aceitar;
      state.habilitarBotaoConfirmacao = !state.habilitarBotaoConfirmacao;
    },
    NEGAR_TERMOS(state) {
      state.termosEcondicoes.aceitar = false;
    },
    ABRIR_MODAL(state) {
      state.habilitarModal = true;
    },
    FECHAR_MODAL(state) {
      state.habilitarModal = false;
    }
  },

  actions: {
    setConfirmacao({ commit }) {
      commit("ACEITAR_CONFIRMACAO");
    },
    setNegacao({ commit }) {
      commit("NEGAR_CONFIRMACAO");
    },
    setAceitarTermos({ commit }) {
      commit("ACEITAR_TERMOS");
    },
    setNegarTermos({ commit }) {
      commit("NEGAR_TERMOS");
    },
    setAbrirModal({ commit }) {
      commit("ABRIR_MODAL");
    },
    setFecharModal({ commit }) {
      commit("FECHAR_MODAL");
    }
  },
  modules: {
    homePage,
    termsConditions,
    questions
  }
});
