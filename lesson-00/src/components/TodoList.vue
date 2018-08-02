<template>
    <div id="todo-list">
        <div v-for="todo in todos" v-bind:key="todo.id" class="todo">
            <div class="title">{{ todo.title }}</div>
            <div class="description">{{ todo.description }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['todos']
    }
</script>

<style <style scoped>
    .todo {
        margin: 10px;
        padding: 10px;
        border: 1px solid #BFBFBF;
        border-radius: 5px;
        background-color: white;
    }

    .title {
        color: rgb(18, 137, 206);
    }

    .description {
        color: rgb(71, 136, 10);
    }
</style>

