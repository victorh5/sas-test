<template>
  <div>
    <b-card
      style="max-width: 35rem;"
      class="mb-2 mx-auto mt-4"
    >
      <b-card-title>
        <div class="title">
          <span>Login Page</span>
          <img src="~/static/logo.png" alt="Pin Logo" class="pin-logo">
        </div>
      </b-card-title>
      <b-card-text>
        <b-form @submit="onSubmit">
          <sas-input
            v-model="form.email"
            label="Email"
          />

          <sas-input
            v-model="form.password"
            label="Password"
            type="password"
          />

          <b-button variant="primary" type="submit" class="mt-3">
            Login
          </b-button>
        </b-form>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
  },
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.$store.commit('user/login', this.form)
      this.$router.push('/house-rules')
    }
  }
}
</script>

<style>
.title {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title .pin-logo {
  height: 100%;
}
</style>
