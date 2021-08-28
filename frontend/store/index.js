import Cookies from "js-cookie";
import Vue from 'vue';
import Vuex from "vuex";
import {
  getField,
  updateField
} from 'vuex-map-fields';

import createPersistedState  from 'vuex-persistedstate';

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

const vuexPersistedState = createPersistedState ({
  key: '__store__ls__artty__',
  paths: ['auth','senpai','hoki'],
  fetchBeforeUse: true,
  storage: {
    getItem: (key) => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: (key) => ls.remove(key),
  },
});



const store = () => new Vuex.Store({
  plugins:[vuexPersistedState],
  state: {
    hint: {
      show: false
    },
    senpai: {
      color_code: "",
      color_name: "",
      commit_code: "",
      hints: [],
      id: "",
      kohis: [],
      pairing_code: "",
    },
    auth: {
      profile: {
        "avatar": "",
        "name": "",
        "usertype": 1
      },
      isLoggedIn: false
    }
  },
  getters: {
    getField
  },
  mutations: {
    updateField,
    setAuthState(state, logginState){
      state.auth.isLoggedIn = logginState;
    },
    clear(state){
      state.auth.isLoggedIn = false;
      state.auth.profile = {};
    },
    senpai(state,senpai){
      state.senpai = senpai;
    }
  },
  actions: {
    login(/*{ commit }*/) {
      this.$axios.get('/account/oauth').then(({data}) => {
        window.location.href = (data.oauth_url);
      });
    },
    logout({commit}){
      commit('clear');
      console.log("Sign out success!");
      window.location.href = '/login';
    },
    fetchSenpai({commit}){
      this.$axios.get('/cs21/info',{ withCredentials: true }).then(({data}) => {
        // this.data = data;
        commit('senpai',data);
      });
    },
    async setCommitCode({commit},data){
      return new Promise((resolve, reject) => {
        this.$axios({ method: 'POST', url: '/cs21/setcode', withCredentials: true, data}).then(({data}) => {
          resolve(data);
        }).catch(e => reject(e));
      });
    },
    async setHints({commit},data){
      return new Promise((resolve, reject) => {
        this.$axios({ method: 'POST', url: '/cs21/sethints', withCredentials: true, data}).then(({data}) => {
          resolve(data);
        }).catch(e => reject(e));
      });
    },
  }
});

export default store;
