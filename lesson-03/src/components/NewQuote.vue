<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <label for="quote">Quote</label>
                <textarea v-model="quote" name="quote" id="quote" cols="30" rows="3" class="form-control"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <button @click.prevent="createNew" class="btn btn-primary">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
            };
        },
        methods: {
            createNew() {
                this.$emit('addQuote', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style>
    
</style>

