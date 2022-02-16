<template>
  <div id="demoForm">
    <h1>Add Film</h1>

    <div class="form-item">
      <label class="form-label">Title: </label>
      <input type="text" v-model.trim="newFilm.title" />
    </div>

    <div class="form-item">
      <label class="form-label">Description: </label>
      <textarea v-model.trim="newFilm.description"></textarea>
    </div>

    <div class="form-item">
      <label class="form-label">Category: </label>
      <input type="checkbox" value="Sci-pi" v-model="newFilm.category" />
      <label for="com-chien-toi">Sci-pi</label>
      <input type="checkbox" value="Horror" v-model="newFilm.category" />
      <label for="com-chien-toi">Horror</label>
    </div>

    <div class="form-item">
      <label class="form-label">Status: </label>
      <input type="radio" value="1" v-model="newFilm.status" />
      <label for="cac-mon-rau">Available</label>
      <input type="radio" value="0" v-model="newFilm.status" />
      <label for="cac-mon-rau">Unavailable</label>
    </div>

    <div class="form-item">
      <label class="form-label">Flatform: </label>
      <select v-model="newFilm.flatform">
        <option disabled value="">-- Select --</option>
        <option>Cinema</option>
        <option>Netflix</option>
        <option>Diseyplus</option>
        <option>HBO Max</option>
      </select>
    </div>

    <div class="form-item">
      <label class="form-label">Over Age: </label>
      <input type="number" v-model.number="newFilm.age" />
    </div>

    <button @click="addFilm(newFilm)">Save</button>

    <h1>List Film</h1>
    <p v-for="(film, index) in listFilm">{{ film.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'demoForm',
  data: function() {
    return {
      listFilm: [],
      newFilm: {
        title: '',
        description: '',
        category: [],
        status: 0,
        flatform: '',
        age: 18
      }
    };
  },

  methods: {
    addFilm(film) {
      this.listFilm.push(film);
      this.newFilm = {
        title: '',
        description: '',
        category: [],
        status: 0,
        flatform: '',
        age: 18
      };
    }
  }
};
</script>

<style scoped>
#demoForm {
  text-align: left;
  width: 50%;
  margin: 0 auto;
}

.form-item {
  margin-bottom: 10px;
}

.form-label {
  display: inline-block;
  width: 200px;
}
</style>
