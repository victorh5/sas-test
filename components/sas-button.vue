<template>
  <div>
    <b-button
      class="normal"
      :class="[{'outlined': outlined, 'secondary': secondary}]"
      :type="type"
      :block="block"
      @click="$emit('callback')"
    >
      <slot />
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  emits: ['callback']
}
</script>

<style scoped>
.normal {
  background-color: #FB3B11;
  border-color: #FB3B11;
}
.outlined {
  background-color: transparent;
  border-color: #FB3B11;
  color: #FB3B11;
}
.secondary {
  background-color: #29A744;
  border-color: #29A744;
}
</style>
