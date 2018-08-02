<template>
  <div id="app">
    <div>
      <h3>Todo List</h3>
      <todo/>
      <todo-list v-bind:todos="todos"></todo-list>
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
    },
    data: function() {
      return {
        todos: [
          'Todo A1',
          'Todo B2',
          'Todo C3'
        ]
      }
    }
  }
</script>

<style>
  
</style>
