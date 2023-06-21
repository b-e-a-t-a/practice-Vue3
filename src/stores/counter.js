import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(10)

  const doubleCount = computed(() => count.value * 2)

  const oddOrEven = computed(() => {
    if ( count.value % 2 === 0) return 'even'
    return 'odd'
  })

  function increaseCount() {
    count.value++
  }
  function decreaseCount() {
    count.value--
  }


  return { count, doubleCount, oddOrEven, increaseCount, decreaseCount }
})
