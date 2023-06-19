<template>
  <article class="item">
    <p class="item__name">{{ sootherName.name }}</p>
  </article>
</template>

<script setup>
defineProps({
  sootherName: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="sass" scoped>
.item
  padding: 15px 0
  border: 1px solid #fcd711
  text-align: center
  color: #fff
  font-weight: 700
  transition: background-color 0.1s ease-in, color 0.1s ease-in
  &:hover
    background-color: #fcd711
    color: #000
  &__name
    margin: 0
</style>