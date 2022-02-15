<template>
  <div id="demo">
    <h1>{{ message }}</h1>
    <h1>{{ upperMessage }}</h1>
    <h1>{{ addPrefixMessage() }}</h1>
    <button @click="updateMessage(' Updated!')">Update message</button>
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
    },

    updateMessage(param) {
      this.message +=  param;
    }
  },

  beforeCreate() {
    console.log('Before create');
    // this.message is underfined
    console.log('Message: ', this.message);
  },

  created() {
    console.log('Created');
    // this.message is underfined
    console.log('Message: ', this.message);
  },

  beforeMount() {
    console.log('Before mount');
    // this.el is underfined
    console.log(this.$el);
  },

  mounted () {
    console.log('Mounted')
    console.log(this.$el.id)
  },

  beforeUpdate () {
    console.log('Before update');
    // this.message is underfined
    console.log('Message: ', this.message);
  },

  updated() {
    console.log('Update');
    // this.message is underfined
    console.log('Message: ', this.message);
  }
};
</script>
