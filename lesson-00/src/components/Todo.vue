<template>
    <div id="todo" class="box">
        <div>
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" />
        </div>
        <div>
            <label for="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
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
                this.$emit('save-todo', {
                    title: this.title,
                    description: this.description
                });
                this.title = '';
                this.description = '';
            }
        }
    }
</script>

<style>
    
</style>
