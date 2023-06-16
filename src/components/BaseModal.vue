<template>
  <div class="modal">
    <article class="modal__content">
      <section class="modal__text">
        <h1>Are you sure you want to log in?</h1>
      </section>
      <section class="modal__buttons">
        <BaseButton text="NO" @click="$emit('close-modal')"/>
        <BaseButton text="YES" @click="login"/>
      </section>
    </article>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "BaseModal",
  components: { BaseButton },
  setup() {
    function login() {
      console.log('Log in user somewhere')
    }

    return { login }
  }
}
</script>

<style lang="sass" scoped>
.modal
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  background-color: rgba(0, 0, 0, 0.8)
  // z-index: 2
  &__content
    width: 500px
    height: 500px
    padding: 20px 30px
    background-color: #fff
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    text-align: center
  &__buttons
    width: 100%
    display: flex
    justify-content: space-around
</style>