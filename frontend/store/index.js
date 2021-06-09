import Vuex from "vuex";
import {
  getField,
  updateField
} from 'vuex-map-fields';

const store = () => new Vuex.Store({
  state: {

  },
  getters: {
    getField
  },
  mutations: {
    updateField
  },
  actions: {

  }
});

export default store;
