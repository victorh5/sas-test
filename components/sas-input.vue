<template>
  <div>
    <label for="inline-form-input-name">{{ label }}</label>
    <b-form-input
      :id="id"
      :value="modelValue"
      :type="type"
      class="mb-2 mr-sm-2 mb-sm-0"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ''
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
    id () {
      return this.label.toLowerCase()
    }
  },
  methods: {
    updateValue (event) {
      this.$emit('update:modelValue', event)
    }
  }
}
</script>
