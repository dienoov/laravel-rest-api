<template>
  <div>
    <div class="row py-5">
      <div class="col-md-10">
        <h4>Books</h4>
      </div>
      <div class="col-md-2">
        <router-link class="btn btn-primary btn-block" to="/create">
          + Add
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Titles</th>
              <th scope="col">Descriptions</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books" :key="book.id">
              <td>{{ book.title }}</td>
              <td>{{ book.description }}</td>
              <td>
                <router-link class="btn btn-success" :to="'/detail/' + book.id"
                  >Update</router-link
                >
                <button class="btn btn-danger" v-on:click="deleteData(book.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get("/api/book").then((response) => {
        this.books = response.data;
      });
    },
    deleteData(id) {
      axios.delete("/api/book/" + id).then((response) => {
        this.loadData();
      });
    },
  },
};
</script>