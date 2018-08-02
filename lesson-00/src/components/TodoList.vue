<template>
    <div id="todo-list">
        <div v-for="todo in todos" v-bind:key="todo.id" class="box">
            <div>{{ todo.title }}</div>
            <div>{{ todo.description }}</div>
            <div>
                <button @click="deleteTodo(todo)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['todos'],
        methods: {
            deleteTodo(todo) {
                this.$emit('delete-todo', todo);
            }
        }
    }
</script>

<style scoped>

</style>
