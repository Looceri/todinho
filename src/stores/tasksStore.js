import { defineStore } from 'pinia';

export const useTasksStore = defineStore({
  id: 'tasks',
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(newTask) {
      if (newTask.name !== '') {
          this.tasks.push(newTask)
      }
    },
    deleteTask(taskId) {
      const taskIndex = this.tasks[taskId]
        this.tasks.splice(taskIndex, 1);
    }
  }
});
