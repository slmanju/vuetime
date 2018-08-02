<template>
    <div id="todo" class="box">
        <div>
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" />
        </div>
        <div>
            <label for="description">Description</label>
            <input type="text" id="description" v-model="description" />
        </div>
        <div>
            <button @click="save">Add</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                description: ''
            }
        },
        methods: {
            save() {
                console.log(this.title, this.description);
                this.title = '';
                this.description = '';
            }
        }
    }
</script>

<style>
    
</style>
