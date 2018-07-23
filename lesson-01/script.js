// New VueJS instance
new Vue({
    el: '#notebook',
    // Some data
    data() {
        return {
            content: 'This is a note.'
        }
    },
    // Computed properties
    computed: {
        notePreview() {
            // Markdown rendered to HTML
            return marked(this.content);
        },
    },
});

const html = marked('**Bold** *Italic* [link] (http: //vuejs.org/)');
console.log(html);