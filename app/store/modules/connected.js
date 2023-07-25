const state = {
  auth: false,
};

const mutations = {
  switch(state) {
    state.auth = !state.auth;
  },
};

const actions = {
  switch: ({ commit }) => commit('switch'),
};

export default {
  state,
  mutations,
  actions,
};
