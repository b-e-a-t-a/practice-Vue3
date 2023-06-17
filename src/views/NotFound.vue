<template>
  <section class="notFound">
    <h2 class="notFound__header">OOOOPS!</h2>
    <p>This page does not exist. Try something else</p>
  </section>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style lang="sass" scoped>
.notFound
  background: #000
  color: #fff
  text-align: center
  margin: 20px auto
  min-height: 50vh
  min-width: 40vw
  padding: 20px
  &__header
    color: #fcd711
</style>