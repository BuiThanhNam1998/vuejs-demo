<template>
  <div id="demo">
    <h1>{{ message }}</h1>
    <h1>{{ upperMessage }}</h1>
    <h1>{{ addPrefixMessage() }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data: function() {
    return {
      message: 'Demo VueJS'
    };
  },

  computed: {
    upperMessage() {
      return this.message.toUpperCase();
    }
  },

  methods: {
    addPrefixMessage() {
      return 'Title: ' + this.message;
    }
  }
};
</script>
