<template>
  <div class="wrapper">
    <div class="top">
      <h1>House Rules</h1>
      <b-button @click="edit.modal = true">
        Register
      </b-button>
    </div>
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
    <edit-modal :visible="edit.modal" :edit-id="edit.id" @close="editModalClose" />
    <remove-modal :visible="remove.modal" :remove-id="remove.id" @close="removeModalClose" />
  </div>
</template>

<script>
export default {
  name: 'HouseRulesPage',
  data: () => ({
    tableFields: [
      { key: 'id', sortable: true },
      { key: 'name', sortable: true },
      { key: 'active', sortable: true, formatter: value => value === 1 ? 'Ativo' : 'Inativo' },
      { key: 'actions' }
    ],
    houseRules: {},
    currentPage: 1,
    isBusy: false,
    edit: {
      modal: false,
      id: undefined
    },
    remove: {
      modal: false,
      id: undefined
    }
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
    },
    handleEdit (id) {
      this.edit.modal = true
      this.edit.id = id
    },
    editModalClose () {
      this.edit.modal = false
      this.edit.id = undefined
      this.loadHouseRules()
    },
    handleRemove (id) {
      this.remove.modal = true
      this.remove.id = id
    },
    removeModalClose () {
      this.remove.modal = false
      this.remove.id = undefined
      this.loadHouseRules()
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 36px;
}
.wrapper .top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.wrapper .top h1 {
  font-size: 28px;
  font-weight: bold;
}
</style>
