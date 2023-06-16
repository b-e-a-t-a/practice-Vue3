<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      default: "Click"
    }
  }
}
</script>

<style lang="sass" scoped>
.button
  background-color: #00bd7e
  color: #fff
  border: 3px solid #00bd7e
  border-radius: 10px
  font-size: 24px
  padding: 10px 20px
  cursor: pointer
  outline: none
  display: flex
  justify-content: center
  align-items: center
  transition: background-color 0.1s ease-in, color 0.1s ease-in, border-color 0.1s ease-in
  margin: 5px
  &:hover
    color: #00bd7e
    background-color: transparent
</style>