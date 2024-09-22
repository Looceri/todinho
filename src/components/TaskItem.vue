<template>
  <li class="task-list-item">
    <label class="task-list-item-label">
      <input type="checkbox">
      <span>{{ task.name }}</span>
    </label>
    <span @click="deleteTask" class="delete-btn" title="Delete Task">{{ task.del }}</span>
  </li>
</template>

<script>
import { useTasksStore } from '../stores/tasksStore';

export default {
  props: ['task'],
  methods: {
    deleteTask() {
      const tasksStore = useTasksStore();
      const taskIndex = tasksStore.tasks.findIndex(t => t.id === this.task.id);
      tasksStore.deleteTask(taskIndex);
    }
  }
};
</script>

<style scoped>
.task-list-item {
  background-color: #31795c;
  border-radius: 4px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 8px;
}

.task-list-item input {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check' stroke='%23fff'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0;
  transition: 0.2s;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.task-list-item input:hover {
  border-color: var(--checkbox-color);
  box-shadow: 0 0 0 3px var(--checkbox-shadow);
}

.task-list-item input:checked {
  background-size: 10px;
  border: 1px solid var(--checkbox-color);
  background-color: var(--checkbox-color);
}

.task-list-item input:checked + span {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through rgba(255, 255, 255, 0.8);
}

.task-list-item-label {
  display: flex;
  align-items: flex-start;
  color: #fff;
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
}

.delete-btn {
  margin-left: auto;
  display: block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trash-2'%3E%3Cpolyline points='3 6 5 6 21 6'/%3E%3Cpath d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/%3E%3Cline x1='10' y1='11' x2='10' y2='17'/%3E%3Cline x1='14' y1='11' x2='14' y2='17'/%3E%3C/svg%3E");
  background-size: 16px;
  background-position: center;
  cursor: pointer;
}
.delete-btn:hover{
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23181818' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trash-2'%3E%3Cpolyline points='3 6 5 6 21 6'/%3E%3Cpath d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/%3E%3Cline x1='10' y1='11' x2='10' y2='17'/%3E%3Cline x1='14' y1='11' x2='14' y2='17'/%3E%3C/svg%3E");
}
</style>
