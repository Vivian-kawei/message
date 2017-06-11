import Vue from 'vue';
import Vuex from 'vuex';
import create from './modules/create';
import selectRange from './modules/select-range';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    create,
    selectRange
  }
});
