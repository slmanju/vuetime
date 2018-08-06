<template>
    <div class="container">
        <app-new-quote @addQuote="addQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data: function () {
            return {
                quotes: [
                    'just a quote to see something',
                    'hello quote'
                ],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        },
        methods: {
            addQuote(newQuote) {
                this.quotes.push(newQuote);
            }
        }
    }
</script>

<style>
</style>
