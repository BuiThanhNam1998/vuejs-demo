import * as helper from '../helper/helper';
import * as constants from '../config/constants';

export default {
  saveTask(state, task) {
    if (!task.id) {
      task.id = helper.generateId();
      task.status = false;
      state.listTasks.push(task);
      state.handlingTask = {
        id: '',
        title: '',
        description: '',
        status: false,
      }
    } else {
      let index = helper.findIndexById(state.listTasks, task.id);
      state.listTasks.splice(index, 1, task);
    }
    localStorage.setItem(
      constants.LOCAL_STORAGE_KEY,
      JSON.stringify(state.listTasks)
    );
  },
  editTask(state, task) {
    state.handlingTask = task;
  },
  deteteTask(state, id) {
    let index = helper.findIndexById(state.listTasks, id);
    state.listTasks.splice(index, 1);
    localStorage.setItem(
      constants.LOCAL_STORAGE_KEY,
      JSON.stringify(state.listTasks)
    );
  },
  changeStatus(state, id) {
    let index = helper.findIndexById(state.listTasks, id);
    let replaceTask = {...state.listTasks[index], status: !state.listTasks[index].status};
    state.listTasks.splice(index, 1, replaceTask);
    localStorage.setItem(
      constants.LOCAL_STORAGE_KEY,
      JSON.stringify(state.listTasks)
    );
  },
  resetHandlingTask(state) {
    state.handlingTask = {
      id: '',
      title: '',
      description: '',
      status: false,
    }
  }
};
