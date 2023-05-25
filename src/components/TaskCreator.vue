<template>
  <div class="bg-success-subtle shadow p-4">
    <form @submit.prevent="onCreate()">
      <h2 class="mb-4">Add new task</h2>
      <div class="d-flex flex-row mb-3 justify-content-start align-items-center">
        <input
          type="text"
          autocomplete="off"
          id="todo"
          class="form-control form-control-lg p-2"
          placeholder="...new task"
          aria-label="new task"
          v-model="newTodo"
        >
        <div class="p-2">
          <button type="button" class="btn btn-success btn-lg" @click="onCreate()">
            Add
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskCreator",
  emits: ["created"],
  data() {
    return {
      newTodo: ""
    }
  },
  methods: {
    onCreate() {
      if (this.newTodo === "") {
        return;
      }
      this.$emit('created', {
        id: new Date().getTime(),
        todo: this.newTodo,
        completed: false
      });
      this.newTodo = "";
    }
  }
}
</script>

<style scoped>
</style>