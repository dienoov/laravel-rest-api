<template>
  <div>
    <div class="row py-5">
      <div class="col-md-12">
        <h4>Sign In</h4>
      </div>
    </div>
    <form @submit.prevent="signIn()">
      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          v-model="form.email"
          placeholder="Email"
          required
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          v-model="form.password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      let email = this.form.email;
      let password = this.form.password;
      this.$store
        .dispatch("signin", { email, password })
        .then(() => this.$router.push("/"));
    },
  },
};
</script>