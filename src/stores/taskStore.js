import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    // tasks: [
    //   {id: 1, title: "make a project", isFav: false},
    //   {id: 2, title: "learn pinia", isFav: true}
    // ]
    tasks: [],
    isLoading: false
  }),
  getters: {
    favs() {
      const favoriteTasks = this.tasks.filter(task => task.isFav)
      return favoriteTasks
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    async getTasks() {
      this.loading = true
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      this.tasks = data
      this.loading = false
    },
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id
      })
    },
    toggleFav(id) {
      const task = this.tasks.find(task => task.id === id)
      task.isFav = !task.isFav
    }
  }
})