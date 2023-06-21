<template>
  <main>
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" />
      <h1>Pinia tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <div class="loading" v-if="loading">Loading tasks...</div>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="(task, index) in tasks" :key="index">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favs left to do</p>
      <div v-for="(task, index) in favs" :key="index">
        <TaskDetails :task="task" />
      </div>
    </div>

    <button @click="taskStore.$reset" class="reset-btn">Reset store</button>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '@/stores/taskStore';
import TaskDetails from '@/components/pinia/TaskDetails.vue';
import TaskForm from '@/components/pinia/TaskForm.vue';

const taskStore = useTaskStore();

// get all of the differenet state properties and getters (not for actions) from a store and creates refs out of those
const { loading, tasks, favs, favCount, totalCount} = storeToRefs(taskStore)

//fetch tasks from json-server localhost
taskStore.getTasks()

const filter = ref('all');
</script>

<style lang="sass" scoped>
main
  background: #f2f2f2
header
  text-align: center
  background: #e7e7e7
  padding-top: 20px
  display: flex
  justify-content: center
  align-items: center
  img
    max-width: 60px
    transform: rotate(-10deg)
  h1
    margin: 0
    font-size: 2em
    padding-top: 25px
    margin-left: 15px
    color: #777
    transform: rotate(-2deg)
.task-list
  max-width: 640px
  margin: 20px auto
.filter
  width: 640px
  margin: 10px auto
  text-align: right
  button
    display: inline-block
    margin-left: 10px
    background: #fff
    border: 2px solid #555
    border-radius: 4px
    padding: 4px 8px
    cursor: pointer
    font-size: 1em
.new-task-form
  background: #e7e7e7
  padding: 20px 0
.loading
  max-width: 640px
  border: 1px solid #ffd859
  background: #ffe9a0
  color: #3a3a3a
  padding: 5px 0
  text-align: center
  margin: 30px auto
.reset-btn
    display: inline-block
    margin-left: 10px
    background: #fff
    border: 2px solid red
    border-radius: 4px
    padding: 4px 8px
    cursor: pointer
    font-size: 1em
    color: red
    margin-bottom: 10px
</style>