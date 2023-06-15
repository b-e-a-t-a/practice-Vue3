<template>
  <p class="name">{{ sootherName.name }}</p>
</template>

<script>
export default {
  name: "SootherNameItem",
  props: {
    sootherName: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="sass" scoped>
.name
  color: #fff
</style>