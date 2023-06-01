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
        <b-form class="login-form" @submit="onSubmit">
          <sas-input
            v-model="form.email"
            label="Email"
          />

          <sas-input
            v-model="form.password"
            label="Password"
            type="password"
          />

          <b-button type="submit" block class="login-button">
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

<style scoped>
.title {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title .pin-logo {
  height: 100%;
}
.login-form {
  display: grid;
  gap: 0.75rem;
}
.login-button {
  background-color: #FB3B11;
  border: 1px solid #FB3B11;
  margin-top: 0.5rem;
}
</style>
