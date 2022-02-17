<template>
  <div id="taskdashboard" class="row">
    <h1>Dashboard</h1>
    <div class="col-sm-4">
      <task-form></task-form>
    </div>
    <div class="col-sm-8">
      <task-list></task-list>
    </div>
  </div>
</template>

<script>
import TaskForm from './TaskForm';
import TaskList from './TaskList';
export default {
  data: function() {
    return {
      sizeChange: 1
    };
  },
  components: {
    TaskList,
    TaskForm
  },
  name: 'TaskDashboard',
};
</script>

