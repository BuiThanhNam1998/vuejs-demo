<template>
  <div class="post">
    <div class="post-content">
      <h2>{{ post.title }}</h2>
      <p :style="{ fontSize: size + 'px' }">{{ post.description }}</p>
    </div>
    <div class="post-action">
      <button class="change-size" @click="$emit('change-size', sizeChange)">+</button>
      <button class="change-size" @click="$emit('change-size', -sizeChange)">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      sizeChange: 1,
    }
  },
  name: 'Post',
  props: ['post', 'size'],
};
</script>

<style scoped>
.post {
  margin-bottom: 50px;
}

button.change-size {
  width: 25px;
  cursor: pointer;
}
</style>
