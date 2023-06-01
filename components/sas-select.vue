<template>
  <div class="select">
    <label :for="name">{{ label }}</label>
    <select :id="name" v-model="model">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
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
    options: {
      type: Array,
      default: () => []
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
  }
}
</script>

<style scoped>
.select {
  display: grid;
}
.select select {
  padding: 0.50rem;
  border-radius: 0.25rem;
  border: 1px solid black;
}
</style>
