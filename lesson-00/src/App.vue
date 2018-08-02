<template>
  <div id="app">
    <div>
      <h3>Todo List</h3>
      <todo v-on:save-todo="save"></todo>
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
        lastId: 3,
        todos: [{
            id: 1,
            title: 'Todo A',
            description: 'Remember to complete todo a'
          },
          {
            id: 2,
            title: 'Todo A',
            description: 'Remember to complete todo b'
          },
          {
            id: 3,
            title: 'Todo A',
            description: 'Remember to complete todo c'
          }
        ]
      }
    },
    methods: {
      save(todo) {
        this.lastId = todo.id = this.lastId + 1;
        this.todos.push(todo);
      }
    }
  }
</script>

<style>
  
</style>
