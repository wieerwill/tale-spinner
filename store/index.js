export const state = () => ({
  gameSettings: {
    playerCount: 0,
    turnCount: 0,
    iterationCount: 0,
  },
  gameStarted: false,
  selectedCategories: [],
});

export const mutations = {
  SET_GAME_SETTINGS(state, settings) {
    state.gameSettings = settings;
  },
  SET_GAME_STARTED(state, value) {
    state.gameStarted = value;
  },
  setSelectedCategories(state, categories) {
    state.selectedCategories = categories;
  },
  resetGame(state) {
    state.gameSettings.playerCount = 0;
    state.gameSettings.turnCount = 0;
    state.gameSettings.iterationCount = 0;
    state.selectedCategories = [];
  },
};

export const actions = {
  initializeGame({ commit }, settings) {
    commit('SET_GAME_SETTINGS', settings);
    commit('SET_GAME_STARTED', true);
  }
};