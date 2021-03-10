const homePage = {
  namespaced: true,
  state: () => ({
    moleculeInformationTitle: {
      image: "https://fakeimg.pl/60x80/",
      title: "INFORMAÇÕES RECEBIDAS!"
    },
    moleculeInformation: {
      description: [
        "Em até 48h daremos um retorno sobre a abertura de sua conta.",
        "Para receber nossas recomendações de investimentos e começar a investir, precisamos conhecer seu perfil de investidor.",
        "São apenas 4 perguntas, que irão guiar todas as sua decisões de investimentos."
      ]
    },
    moleculeConfirmation: {
      title: "Gostaria de responder ao Perfil do investidor?",
      buttonsLabel: {
        confirm: "SIM",
        cancel: "NÃO"
      }
    }
  }),
  getters: {
    getMoleculeInformationTitle(state) {
      return state.moleculeInformationTitle;
    },
    getMoleculeInformation(state) {
      return state.moleculeInformation;
    },
    getMoleculeConfirmation(state) {
      return state.moleculeConfirmation;
    }
  },
  mutations: {},
  actions: {}
};

export default homePage;
