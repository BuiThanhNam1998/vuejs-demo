<template>
  <div id="taskList">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <task-item
          v-for="(task, index) in listTasks"
          v-bind:task="task"
          :key="task.id"
        ></task-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import TaskItem from './TaskItem';
import { mapState } from 'vuex'
export default {
  data: function() {
    return {
      listTasks: this.$store.state.listTasks
    };
  },
  components: {
    TaskItem
  },
  name: 'TaskList'
};
</script>
