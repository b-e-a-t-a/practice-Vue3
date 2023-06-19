<template>
  <div class="tasks">
    <div>
      <TaskCreator @created="onTodoCreated($event)"/>
      <TaskList :todos="todos" @changed="onTodoChanged($event)" @deleted="onTodoDeleted($event)" />
      <div class="mx-auto mt-4">
        <NotepadField />
      </div>
    </div>
  </div>
</template>

<script>
import TaskCreator from '../components/TaskCreator.vue';
import TaskList from '../components/TaskList.vue';
import NotepadField from '../components/NotepadField.vue';
import {useTodos} from "../composables/useTodos";
import {useLocalStorage} from "../composables/useLocalStorage";

export default {
  name: "TasksViewComposedAPI",
  components: {TaskCreator, TaskList, NotepadField},
  setup() { //pkt wyjściowy w kontekscie danego komponentu, gdzie rejestrujemy wszystkie funkcje /composables, hooki/
    const {
      todos,
      onTodoCreated,
      onTodoDeleted,
      onTodoChanged
    } = useTodos()

    // funkcja która przyjmuje dowolną reaktywną zmienną i ją obserwuje
    // "todos" - klucz pod którym zapisywane lub odczytywane są z localStorage
    // todos - reaktywna lista todosów
    useLocalStorage("todos", todos)

    //zwracamy funkcje, properties które powinny być dostępne w widoku
    return {
      todos,
      onTodoCreated,
      onTodoDeleted,
      onTodoChanged
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