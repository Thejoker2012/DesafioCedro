const questions = {
  namespaced: true,
  state: () => ({
    title: "PERFIL DO INVESTIDOR - QUESTIONÁRIO",
    questions: [
      {
        id: 1,
        description:
          "1 - Qual o seu comportamento em relação aos seus investimentos?"
      },
      {
        id: 2,
        description:
          "2 - Por quanto tempo você deseja manter seus investimentos?"
      },
      {
        id: 3,
        description:
          "3 - Quantos % desses investimentos você pode precisar em um ano?"
      }
    ],
    opcoesQuestao1: [
      {
        label: "Preservar meu dinheiro sem correr riscos ",
        value: 1
      },
      {
        label: "Ganhar mais dinheiro assumindo riscos moderados",
        value: 2
      },
      {
        label: "Ganhar mais dinheiro assumindo riscos agressivos",
        value: 3
      }
    ],
    opcoesQuestao2: [
      {
        label: "Até um ano",
        value: 1
      },
      {
        label: "De 1 a 3 Anos",
        value: 2
      },
      {
        label: "De 3 a 10 Anos",
        value: 3
      }
    ],
    opcoesQuestao3: [
      {
        label: "Acima de 75%",
        value: 1
      },
      {
        label: "De 26% a 74%",
        value: 2
      },
      {
        label: "Até 25%",
        value: 3
      }
    ],
    rendaFixa: {
      title: "TÍTULOS DE RENDA FIXA OU TESOURO DIRETO",
      options: [
        {
          text: "Nunca operei",
          value: 1
        },
        {
          text: "Opero pouco e não tenho familiaridade",
          value: 2
        },
        {
          text: "Opero eventualmente e conheço os riscos associados",
          value: 3
        },
        {
          text: "Opero frequentemente e conheço os riscos associados",
          value: 4
        }
      ]
    },
    fluxoInvestimento: {
      title: "FLUXO DE INVESTIMENTOS",
      options: [
        {
          text: "Nunca operei",
          value: 1
        },
        {
          text: "Opero pouco e não tenho familiaridade",
          value: 2
        },
        {
          text: "Opero eventualmente e conheço os riscos associados",
          value: 3
        },
        {
          text: "Opero frequentemente e conheço os riscos associados",
          value: 4
        }
      ]
    },
    acoesAvista: {
      title: "ACÕES A VISTA",
      options: [
        {
          text: "Nunca operei",
          value: 1
        },
        {
          text: "Opero pouco e não tenho familiaridade",
          value: 2
        },
        {
          text: "Opero eventualmente e conheço os riscos associados",
          value: 3
        },
        {
          text: "Opero frequentemente e conheço os riscos associados",
          value: 4
        }
      ]
    },
    aluguelAcoes: {
      title: "ALUGUEL DE AÇÕES, TERMOS, OPÇOES E FUTUROS",
      options: [
        {
          text: "Nunca operei",
          value: 1
        },
        {
          text: "Opero pouco e não tenho familiaridade",
          value: 2
        },
        {
          text: "Opero eventualmente e conheço os riscos associados",
          value: 3
        },
        {
          text: "Opero frequentemente e conheço os riscos associados",
          value: 4
        }
      ]
    },
    submitForm: {
      valid: false,
      questao1: {
        idQuestao: null,
        idResposta: null
      },
      questao2: {
        idQuestao: null,
        idResposta: null
      },
      questao3: {
        idQuestao: null,
        idResposta: null
      },
      questao4: {
        idQuestao: null,
        idResposta1: null,
        idResposta2: null,
        idResposta3: null,
        idResposta4: null
      }
    }
  }),
  getters: {
    getFormTitle(state) {
      return state.title;
    },
    getQuestions(state) {
      return state.questions;
    },
    getOpcaoQuestao1(state) {
      return state.opcoesQuestao1;
    },
    getOpcaoQuestao2(state) {
      return state.opcoesQuestao2;
    },
    getOpcaoQuestao3(state) {
      return state.opcoesQuestao3;
    },
    getRendaFixa(state) {
      return state.rendaFixa;
    },
    getFluxoInvestimentos(state) {
      return state.fluxoInvestimento;
    },
    getAcoesAVista(state) {
      return state.acoesAvista;
    },
    getaluguelAcoes(state) {
      return state.aluguelAcoes;
    }
  },
  mutations: {},
  actions: {}
};

export default questions;
