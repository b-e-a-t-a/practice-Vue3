<template>
  <div>
    <div  v-for="todo of todos" :key="todo.id">
      <div class="input-group-text d-flex flex-row justify-content-center align-items-center bg-warning-subtle shadow p-4 mt-4">
        <input type="checkbox" class="form-check-input mt-0 ml-2" :checked="todo.completed" @change="onTodoChange(todo.id)" />
        <p class="form-control mb-0 ms-2 me-2 flex-grow-1 text-wrap text-break">{{ todo.todo }}</p>
        <button type="button" class="btn btn-danger" @click="onTodoDelete(todo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  emits: ["changed", "deleted"],
  props: {
    todos: Array
  },
  methods: {
    onTodoDelete(id) {
      this.$emit("deleted", id)
    },
    onTodoChange(id) {
      this.$emit("changed", id)
    }
  }
};
</script>

<style scoped>
</style>