<template>
  <tr>
    <td>{{ task.title }}</td>
    <td>{{ task.description }}</td>
    <td>
      <span class="label-status badge" :class="task.status ? 'bg-success' : 'bg-danger'"
        @click="changeStatus"
      >
        {{ task.status ? 'Active' : 'Disabled' }}
      </span>
    </td>
    <td>
      <button type="button" class="btn btn-primary" @click="editTask">
        Edit
      </button>
      <button type="button" class="btn btn-danger" @click="deleteTask">
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task'],
  methods: {
    editTask() {
      this.$store.dispatch('editTask', {...this.task});
    },
    deleteTask() {
      this.$store.dispatch('deleteTask', this.task.id);
    },
    changeStatus() {
      this.$store.dispatch('changeStatus', this.task.id);
    }
  }
};
</script>

<style scoped>
.label-status {
  cursor: pointer
}
</style>
