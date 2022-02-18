export default {
  saveTask({ commit }, task) {
    commit('saveTask', task);
  },
  editTask({ commit }, task) {
    commit('editTask', task);
  },
  deleteTask({ commit }, id) {
    commit('deteteTask', id);
  },
  changeStatus({ commit }, id) {
    commit('changeStatus', id);
  },
  resetHandlingTask({ commit }) {
    commit('resetHandlingTask');
  }
};
