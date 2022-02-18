<template>
  <div id="taskdashboard" class="row">
    <h1>Dashboard</h1>
    <div class="col-sm-4">
      <task-form></task-form>
    </div>
    <div class="col-sm-8">
      <button type="button" class="btn-add-task btn btn-primary" @click="resetHandlingTask">
          Add Task
      </button>

      <task-list></task-list>
    </div>
  </div>
</template>

<script>
import TaskForm from './TaskForm';
import TaskList from './TaskList';
export default {
  components: {
    TaskList,
    TaskForm
  },
  name: 'TaskDashboard',
  methods: {
    resetHandlingTask() {
      this.$store.dispatch('resetHandlingTask')
    }
  }
};
</script>

<style>
.btn-add-task {
  margin-bottom: 10px;
}
</style>

