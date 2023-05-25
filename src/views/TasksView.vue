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

export default {
  name: 'TasksView',
  components: {TaskCreator, TaskList},
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    const storedTodos = window.localStorage.getItem('todos')
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos)
    }
  },
  methods: {
    onTodoCreated(todo) {
      this.todos = [...this.todos, todo]
    },
    onTodoDeleted(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    onTodoChanged(id) {
      const index = this.todos.findIndex(t => t.id === id)
      const item = this.todos[index]

      this.todos = [
        ...this.todos.slice(0, index),
        {
          ...item,
          completed: !item.completed
        },
        ...this.todos.slice(index + 1)
      ]
    }
  },
  watch: {
    todos(value) {
      window.localStorage.setItem('todos', JSON.stringify(value))
    }
  }
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
