import Vuex from "vuex";
import {
  getField,
  updateField
} from 'vuex-map-fields';

const store = () => new Vuex.Store({
  state: {
    hint: {
      show: false
    }
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  },
  actions: {
    login({ commit }) {
      this.$axios.get('/account/oauth').then(({ data }) => {
        window.location.href = (data.oauth_url);
      });
    }
  }
});

export default store;
