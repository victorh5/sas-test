<template>
  <div>
    LOGADO
    {{ $store.state.user.token }}
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  async mounted () {
    await this.loadHouseRules()
  },
  methods: {
    async loadHouseRules () {
      await this.$axios.$get('/house_rules', {
        headers: {
          Authorization: this.$store.state.user.token
        }
      })
    }
  }
}
</script>
