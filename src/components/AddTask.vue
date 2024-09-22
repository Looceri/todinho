<template>
  <div class="add-task">
    <input type="text" autocomplete="off" placeholder="Addiciona uma task" v-model="newTask" @keyup.enter="addTask" class="task-input">
    <button @click="addTask" title="Adicionar Task" class="submit-task">
      +
    </button>
  </div>

</template>

<script>
import { useTasksStore } from '../stores/tasksStore';

export default {
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    addTask() {
      const tasksStore = useTasksStore();
      tasksStore.addTask({ id: Date.now(), name: this.newTask });
      this.newTask = '';
    }
  }
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");

.add-task {
  height: 40px;
  font-size: 14px;
  display: flex;
  margin-bottom: 10px;
}

.task-input {
  border-right: none;
  width: 100%;
  padding: 0 4px;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  margin-right: 12px;
  color: #fff;
  box-shadow: none;
  border-radius: 0;
}

.task-input::placeholder {
  color: #fff;
}

.submit-task {
  border: none;
  background-color: #40a77d;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  margin-right: 10px;
  }

.submit-task:hover {
  background-color: #31795c;
}
i{
  font-size: 20px;
  margin-right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
