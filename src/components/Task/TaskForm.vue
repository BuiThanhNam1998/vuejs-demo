<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        v-model="handlingTask.title"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        v-model="handlingTask.description"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="saveTask">Submit</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      handlingTask: this.$store.state.handlingTask,
    };
  },
  name: 'TaskForm',
  methods: {
    saveTask() {
      this.$store.dispatch('saveTask', this.handlingTask);
    }
  }
};
</script>

