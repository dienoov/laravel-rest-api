<template>
  <div>
    <div class="row py-5">
      <div class="col-md-12">
        <h4>Add a new book</h4>
      </div>
    </div>
    <form @submit.prevent="addData()">
      <div class="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          class="form-control"
          v-model="form.title"
          placeholder="Book's Title"
        />
      </div>
      <div class="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          class="form-control"
          v-model="form.description"
          placeholder="Book's Description"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    addData() {
      axios
        .post("/api/book", {
          title: this.form.title,
          description: this.form.description,
        })
        .then((response) => {
          this.$router.push("/");
        });
    },
  },
};
</script>