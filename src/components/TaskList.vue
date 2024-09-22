<template>
  <ul class="task-list">
    <task-item v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TaskItem from './TaskItem.vue';
import { useTasksStore } from '../stores/tasksStore';

export default {
  components: {
    TaskItem
  },
  computed: {
    tasks() {
      const tasksStore = useTasksStore();
      return tasksStore.tasks;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

.task-list {
  /* Add any specific styles for the task list container */
}
</style>
