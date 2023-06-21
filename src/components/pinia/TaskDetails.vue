<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i>
      <i
        class="material-icons"
        @click="taskStore.toggleFav(task.id)"
        :class="{active: task.isFav}"
      >favorite</i>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/taskStore'

defineProps({
  task: {
    type: Object,
    required: true
  }
})

const taskStore = useTaskStore()
</script>

<style lang="sass" scoped>
.task
  padding: 6px 20px
  background: #fff
  margin-top: 20px
  border-radius: 4px
  box-shadow: 2px 4px 6px rgba(0,0,0,0.05)
  display: flex
  justify-content: space-between
  align-items: center
  h3, .icons
    display: inline-block
  .icons
    text-align: right
  i
    font-size: 1.4em
    margin-left: 6px
    cursor: pointer
    color: #bbb
    &.active
      color: #ff005d
</style>