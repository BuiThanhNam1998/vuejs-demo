<template>
  <tr>
    <td>{{ task.title }}</td>
    <td>{{ task.description }}</td>
    <td>
      <span class="badge bg-danger">Disabled</span>
    </td>
    <td>
      <button type="button" class="btn btn-primary">
        Edit
      </button>
      <button type="button" class="btn btn-danger">
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task']
};
</script>
