<template>
    <div id="todo-list">
        <ul>
            <li v-for="todo in todos">{{ todo }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [ 'todos' ]
    }
</script>

<style>
    
</style>

