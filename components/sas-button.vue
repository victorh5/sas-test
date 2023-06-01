<template>
  <div>
    <b-button
      class="normal"
      :class="[{'outlined': outlined}]"
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
    }
  }
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
</style>
