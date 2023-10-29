export const state = () => ({
  gameSettings: {
    playerCount: 0,
    turnCount: 0,
    iterationCount: 0,
  },
  gameStarted: false,
});

export const mutations = {
  SET_GAME_SETTINGS(state, settings) {
    state.gameSettings = settings;
  },
  SET_GAME_STARTED(state, value) {
    state.gameStarted = value;
  }
};

export const actions = {
  initializeGame({ commit }, settings) {
    commit('SET_GAME_SETTINGS', settings);
    commit('SET_GAME_STARTED', true);
  }
};