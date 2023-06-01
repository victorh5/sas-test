<template>
  <div>
    <b-modal :visible="visible" title="Remove HouseRule">
      <div class="modal-text">
        <span>Do you want to remove this HouseRule?</span>
      </div>
      <template #modal-footer>
        <b-button variant="danger" @click="handleCancel">
          No
        </b-button>
        <b-button @click="handleRemove">
          Yes
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
    removeId: {
      type: Number,
      default: undefined
    }
  },
  emits: ['close'],
  data: () => ({}),
  methods: {
    async handleRemove () {
      try {
        await this.$axios.$delete(`/house_rules/${this.removeId}`, {
          headers: {
            Authorization: this.$store.state.user.token
          }
        })
        this.$bvToast.toast('HouseRule deleted successfully!', {
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
    },
    handleCancel () {
      this.$emit('close')
    }
  }
}
</script>
