<template>
  <div>
    <b-modal :visible="visible" :title="title">
      <div v-if="loading">
        Loading...
      </div>
      <div v-else class="modal-inputs">
        <sas-input
          v-model="houseRule.name"
          label="Name"
        />
        <sas-input
          v-model="houseRule.active"
          label="Status"
        />
      </div>
      <template #modal-footer>
        <b-button variant="danger" @click="handleCancel">
          Cancel
        </b-button>
        <b-button @click="handleSave">
          Save
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'EditModalComponent',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    editId: {
      type: Number,
      default: undefined
    }
  },
  emits: ['close'],
  data: () => ({
    title: 'Register HouseRule',
    houseRule: {
      name: '',
      active: undefined
    },
    loading: false
  }),
  watch: {
    async editId () {
      if (this.editId !== undefined) {
        this.loading = true
        this.title = 'Edit HouseRule'
        const { data } = await this.$axios.$get(`/house_rules/${this.editId}`, {
          headers: {
            Authorization: this.$store.state.user.token
          }
        })
        this.houseRule.name = data.name
        this.houseRule.active = data.active
        this.loading = false
      }
    }
  },
  methods: {
    async handleSave () {
      const aux = {
        house_rules: this.houseRule
      }
      if (this.editId !== undefined) {
        try {
          await this.$axios.$put(`/house_rules/${this.editId}`, aux, {
            headers: {
              Authorization: this.$store.state.user.token
            }
          })
          this.$bvToast.toast('HouseRule updated successfully!', {
            title: 'Success',
            variant: 'success'
          })
          this.$emit('close')
        } catch (err) {
          this.$bvToast.toast(err.response.data, {
            title: 'Error',
            variant: 'danger'
          })
        }
      } else {
        try {
          await this.$axios.$post('/house_rules', aux, {
            headers: {
              Authorization: this.$store.state.user.token
            }
          })
          this.$bvToast.toast('HouseRule created successfully!', {
            title: 'Success',
            variant: 'success'
          })
          this.$emit('close')
        } catch (err) {
          this.$bvToast.toast(err.response.data, {
            title: 'Error',
            variant: 'danger'
          })
        }
      }
    },
    handleCancel () {
      this.houseRule.name = ''
      this.houseRule.active = undefined
      this.$emit('close')
    }
  }
}
</script>

<style>
.modal-inputs {
  display: grid;
  gap: 1rem;
}
</style>
