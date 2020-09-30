<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h4>User</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      axios.get("/api/auth/user").then((response) => {
        console.log(response);
      });
    },
  },
};
</script>