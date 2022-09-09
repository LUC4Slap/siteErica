export const state = () => ({
  token_user: "",
});

export const mutations = {
  ADD_RESULT_TOKEN: (state, payload) => {
    state.token_user = payload;
  },
};
