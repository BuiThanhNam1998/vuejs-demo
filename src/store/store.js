import Vue from 'vue'
import VueX from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import * as constants from '../config/constants'

Vue.use(VueX);
const LOCAL_STORAGE_KEY = 'todo-app';

export default new VueX.Store({
  state: () => ({
    listTasks: JSON.parse(localStorage.getItem(constants.LOCAL_STORAGE_KEY)) || [],
    handlingTask: {
      id: '',
      title: '',
      description: '',
      status: false,
    },
  }),
  mutations: mutations,
  getters: getters,
  actions: actions
});
