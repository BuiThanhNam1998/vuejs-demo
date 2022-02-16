<template>
  <div id="listPost">
    <h1>List Post</h1>
    <post v-for="post in posts"
      v-bind:post="post"
      v-bind:size="size"
      v-on:change-size="changeSize">
    </post>
  </div>
</template>

<script>
import Post from './Post'
export default {
  name: 'ListPost',
  components: {
    Post
  },
  data: function() {
    return {
      size: 16,
      posts: [
      {
        id: 1,
        title: 'Title 1',
        description: 'Description 1'
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'Description 2'
      },
    ]
    };
  },

  methods: {
    changeSize(sizeChange) {
      this.size += sizeChange;
    }
  },
};
</script>
