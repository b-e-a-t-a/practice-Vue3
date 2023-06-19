<template>
  <div class="container">
    <div class="buttons">
      <BaseInput
        name="input"
        v-model:firstName="firstName"
        v-model:lastName="lastName"
      />
      <p class="result">{{ firstName }}</p>
      <p class="result">{{ lastName }}</p>
      <BaseButton @click="revertText" text="Revert text" />

      <BaseButton text="Log in" @click="isModalVisible = true" />

      <BaseButton
        text="Click events"
        @click="handleMouseEvent"
        @dblclick="handleMouseEvent"
        @mousedown.left="handleMouseEvent"
        @mouseup.middle="handleMouseEvent"
        @mousemove.once="handleMouseEvent"
        @mouseover="handleMouseEvent"
        @mouseleave="handleMouseEvent"
        @mousewheel="handleMouseEvent"
        @mouseout="handleMouseEvent"
        @contextmenu.prevent="handleMouseEvent"
      />

      <form class="form" @submit.prevent="sendMessage"> <!-- modyfikator zapobiega domyślnej akcji przeładowania strony po wysłaniu -->
        <input
          type="text"
          placeholder="Type something"
          class="input"
          @keypress.space="handleKeyEvent"
          @keydown.shift.s.exact="handleKeyEvent"
          @keyup.alt.s="handleKeyEvent"
        />
        <BaseButton text="Submit"/>
      </form>
      <p v-show="isMessageSent">Message has been sent</p>

      <div class="outer" @click="handleMouseEvent">
        <div class="inner" @click.stop="handleMouseEvent"></div> <!-- modyfikator zapobiega propagacji zdarzeń -->
      </div>

      <ul>
        <li v-for="(event, index) in mouseEventsArray" :key="index">{{ event }}</li>
      </ul>

      <ul>
        <li v-for="({key, type}, index) in keyEventsArray" :key="index">{{ key }} {{ type }}</li>
      </ul>
    </div>

    <teleport to="#modal">
      <BaseModal v-show="isModalVisible" @close-modal="closeModal"/>
    </teleport>
    <BaseFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "../components/BaseButton.vue";
import BaseFooter from "../components/BaseFooter.vue";
import BaseModal from "../components/BaseModal.vue";
import BaseInput from "../components/BaseInput.vue";

const isModalVisible = ref(false);
const mouseEventsArray = ref([]);
const keyEventsArray = ref([]);
const isMessageSent = ref(false);

 function closeModal() {
  isModalVisible.value = false;
}

 function handleMouseEvent({type}) {
  mouseEventsArray.value = [...mouseEventsArray.value, type]
}

 function handleKeyEvent({key, type}) {
  keyEventsArray.value = [...keyEventsArray.value, {key, type}]
}

 function sendMessage() {
  isMessageSent.value = true;
}

const firstName = ref("");
const lastName = ref("");
function revertText() {
  firstName.value = firstName.value
    .split('')
    .reverse()
    .join('');
  lastName.value = lastName.value
    .split('')
    .reverse()
    .join('');
}
</script>

<style lang="sass" scoped>
.container
  // width: 100vw
  // height: 100vh
  display: flex
  justify-content: center
  align-items: center
  margin-top: 20px
  .buttons
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding: 10px
  .input
    margin: 10px
  .outer
    width: 100px
    height: 100px
    display: flex
    justify-content: center
    align-items: center
    background-color: #42b883
    margin-top: 10px
  .inner
    width: 50px
    height: 50px
    background-color: #35495e
  .form
    display: flex
    justify-content: center
    align-items: center
  .result
    margin: 30px auto
</style>