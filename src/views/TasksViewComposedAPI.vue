<template>
  <div class="tasks">
    <div>
      <TaskCreator @created="onTodoCreated($event)"/>
      <TaskList :todos="todos" @changed="onTodoChanged($event)" @deleted="onTodoDeleted($event)" />
    </div>
  </div>
</template>

<script>
import TaskCreator from '../components/TaskCreator.vue';
import TaskList from '../components/TaskList.vue';
import {useTodos} from "../composables/useTodos";

export default {
  name: "TasksViewComposedAPI",
  components: {TaskCreator, TaskList},
  setup() { //pkt wyjściowy w kontekscie danego komonentu, gdzie rejestrujemy wszystkie funkcje /composables, hooki/
    const {
      todos,
      onTodoCreated,
      onTodoDeleted,
      onTodoChanged
    } = useTodos()

    //zwracamy funkcje, properties które powinny być dostępne w widoku
    return {
      todos,
      onTodoCreated,
      onTodoDeleted,
      onTodoChanged
    }
  }
  // mounted() {
  //   const storedTodos = window.localStorage.getItem('todos')
  //   if (storedTodos) {
  //     this.todos = JSON.parse(storedTodos)
  //   }
  // },
  // watch: {
  //   todos(value) {
  //     window.localStorage.setItem('todos', JSON.stringify(value))
  //   }
  // }
}
</script>

<style>
@media (min-width: 1024px) {
  .tasks {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>