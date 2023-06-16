<template>
  <div class="container">
    <BaseButton text="Log in" @click="isModalVisible = true" />
    <teleport to="#modal">
      <BaseModal v-show="isModalVisible" @close-modal="closeModal"/>
    </teleport>
    <BaseFooter />
  </div>
</template>

<script>
import { ref } from "vue";
import BaseButton from "../components/BaseButton.vue";
import BaseFooter from "../components/BaseFooter.vue";
import BaseModal from "../components/BaseModal.vue";

export default {
  name: "FormView",
  components: { BaseButton, BaseFooter, BaseModal },
  setup() {
    const isModalVisible = ref(false);

    function closeModal() {
      isModalVisible.value = false;
    }
    return { isModalVisible, closeModal };
  }
}
</script>

<style lang="sass" scoped>
.container
  // width: 100vw
  // height: 100vh
  display: flex
  justify-content: center
  align-items: center
  margin: 20px 10px
</style>