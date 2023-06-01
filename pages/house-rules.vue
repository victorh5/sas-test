<template>
  <div>
    <b-table
      striped
      :items="houseRules.entities"
      :fields="tableFields"
      :per-page="houseRules?.pagination?.per_page"
      fixed
      outlined
      :busy="isBusy"
    >
      <template #table-busy>
        <div class="text-center my-2">
          <b-spinner class="align-middle" />
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(actions)="data">
        <b-button @click="handleEdit(data.item.id)">
          Edit
        </b-button>
        <b-button @click="handleRemove(data.item.id)">
          Remove
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="houseRules?.pagination?.total"
      :per-page="houseRules?.pagination?.per_page"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    tableFields: [
      { key: 'id', sortable: true },
      { key: 'name', sortable: true },
      { key: 'active', sortable: true, formatter: value => value === 1 ? 'Ativo' : 'Inativo' },
      { key: 'actions' }
    ],
    houseRules: {},
    currentPage: 1,
    isBusy: false
  }),
  watch: {
    currentPage () {
      this.loadHouseRules()
    }
  },
  async mounted () {
    await this.loadHouseRules()
  },
  methods: {
    async loadHouseRules () {
      this.isBusy = true
      const { data } = await this.$axios.$get('/house_rules', {
        params: {
          page: this.currentPage
        },
        headers: {
          Authorization: this.$store.state.user.token
        }
      })
      this.houseRules = data
      this.isBusy = false
    }
  }
}
</script>
