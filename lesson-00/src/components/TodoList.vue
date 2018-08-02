<template>
    <div id="todo-list">
        <div v-for="todo in todos" v-bind:key="todo.id" class="box">
            <div>{{ todo.title }}</div>
            <div>{{ todo.description }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['todos']
    }
</script>

<style scoped>

</style>

