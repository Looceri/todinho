<template>
  <div class="dark:bg-slate-800 text-white app-container">
    <h1 class="app-header">TO DO LIST</h1>
    <add-task />
    <task-list />
  </div>
</template>

<script>

import TaskList from './components/TaskList.vue';
import AddTask from './components/AddTask.vue';


export default {
  components: {
    TaskList,
    AddTask
  }
};
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
