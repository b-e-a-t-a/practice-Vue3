<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="I need to..."
      v-model="newTask"
    />
    <button>Add</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()
const newTask = ref('')
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 10000)
    })
    newTask.value = ''
  }
}

</script>

<style lang="sass" scoped>
  form
    max-width: 400px
    margin: 0 auto
    display: grid
    grid-template-columns: 3fr 1fr
    gap: 10px
    button
      background: #ffd859
      border: 0
      padding: 10px
      font-family: "Poppins"
      border-radius: 6px
      cursor: pointer
      font-size: 1em
    input
      border: 0
      padding: 10px
      border-radius: 6px
      color: #555
      font-size: 1em
</style>