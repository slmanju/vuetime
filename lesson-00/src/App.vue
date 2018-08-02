<template>
  <div id="app">
    <div>
      <h3>Todo List</h3>
      <todo v-on:save-todo="save"></todo>
      <todo-list v-bind:todos="todos" v-on:delete-todo="deleteTodo"></todo-list>
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
        lastId: 1,
        todos: [{
          id: 1,
          title: 'Todo A',
          description: 'Remember to complete todo a'
        }]
      }
    },
    methods: {
      save(todo) {
        this.lastId = todo.id = this.lastId + 1;
        this.todos.push(todo);
      },
      deleteTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
      }
    }
  }
</script>

<style>
  
</style>
