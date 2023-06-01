<template>
  <div class="navbar">
    <img src="~/static/logo_text.png" alt="Logo SAS" class="logo">
    <sas-button outlined>
      Logout
    </sas-button>
  </div>
</template>

<script>
export default {
  computed: {
    logged () {
      return this.$store.state.user.token
    }
  },
  methods: {
    logoutUser () {
      this.$store.commit('user/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.logout-button {
  background-color: transparent;
  border: 1px solid #FB3B11;
  color: #FB3B11;
}
.logout-button:hover {
  color: white;
  background-color: #FB3B11;
  border: 1px solid #FB3B11;
}
</style>
