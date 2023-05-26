import {ref} from "vue";

export function useTodos() {

  // korzystamy z funkcji ref: czyli funkcji tworzącej wrapper nad prostymi wartościami; wzbogaca je o reaktywność;
  // to co było w properties 'data' tu jest jako zmienna reaktywna, obserwowalna, która reprezentuje nasz stan
  let todos = ref([])

  // 'methods' z options api są zdefiniowane jako funkcje

  const onTodoCreated = (todo) => {
    //unwrapping do wartości ukrytej pod spodem ref
    todos.value = [...todos.value, todo]
  }

  const onTodoDeleted = (id) => {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  const onTodoChanged = (id) => {
    const index = todos.value.findIndex(t => t.id === id)
    const item = todos.value[index]

    todos.value = [
      ...todos.value.slice(0, index),
      {
        ...item,
        completed: !item.completed
      },
      ...todos.value.slice(index + 1)
    ]
  }

  //zwracamy funkcje, properties które powinny byc publicznie dostępne dla danego komponentu
  return {
    todos,
    onTodoCreated,
    onTodoDeleted,
    onTodoChanged
  }
}