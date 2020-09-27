<template>
  <div>
    <div class="row py-5">
      <div class="col-md-12">
        <h4>Update an existing book</h4>
      </div>
    </div>
    <form @submit.prevent="updateData()">
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
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get("/api/book/" + this.$route.params.id).then((response) => {
        this.form.title = response.data.title;
        this.form.description = response.data.description;
      });
    },
    updateData() {
      axios
        .put("/api/book/" + this.$route.params.id, {
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