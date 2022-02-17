import * as helper from '../helper/helper'
import * as constants from '../config/constants'

export default {
  saveTask(state, task) {
    if (!task.id) {
      task.id = helper.generateId()
      state.listTasks.push(task);
    }
    localStorage.setItem(constants.LOCAL_STORAGE_KEY, JSON.stringify(state.listTasks))
  }
}
