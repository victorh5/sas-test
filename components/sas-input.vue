<template>
  <div class="input">
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      v-model="model"
      :type="type"
      :name="name"
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: undefined
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    name () {
      return this.label.toLowerCase()
    },
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('input', event)
    }
  }
}
</script>

<style>
.input {
  display: grid;
}
.input input {
  padding: 0.50rem;
  border-radius: 0.25rem;
  border: 1px solid black;
}
</style>
