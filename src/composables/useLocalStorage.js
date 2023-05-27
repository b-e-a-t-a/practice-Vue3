import { onBeforeMount, watch } from "vue";

// key - klucz pod którym dane mają być zapisywane i odczytywane z localStorage
// ref - jakaś obserwowana zmienna, na której zmiany chcemy reagować czyli 'this.todos' z options API
export function useLocalStorage(key, ref) {

  onBeforeMount(() => {
    // pobieramy dane z localStorage
    const storedTodos = window.localStorage.getItem(key)
    if (storedTodos) {
      // aktualizujemy refa którego przekazujemy
      ref.value = JSON.parse(storedTodos)
    }
  })

  watch(ref, () => {
    window.localStorage.setItem(key, JSON.stringify(ref.value))
  })

  const clearEntry = (refValue) => {
    ref.value = refValue;
    window.localStorage.setItem(key, refValue)
  }

  return {
    clearEntry
  }
}