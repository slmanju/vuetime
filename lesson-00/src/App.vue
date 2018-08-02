<template>
  <div id="app">
    <div>
      <h3>Todo List</h3>
      <todo/>
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
  import Todo from './components/Todo.vue'
  import TodoList from './components/TodoList.vue'
  
  export default {
    name: 'App',
    components: {
      Todo,
      TodoList
    }
  }
</script>

<style>
  
</style>
