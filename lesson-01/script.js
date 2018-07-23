// New VueJS instance
new Vue({
    el: '#notebook',
    // Some data
    data() {
        return {
            content: 'This is a note.'
        }
    },
    // methods
    methods: {
        saveNote() {
            console.log('saving note:', this.content)
            localStorage.setItem('content', this.content)
        },
    },
    // Computed properties
    computed: {
        notePreview() {
            // Markdown rendered to HTML
            return marked(this.content);
        },
    },
    // Change watchers
    watch: {
        // Watching 'content' data property
        content: {
            handler: 'saveNote',
        },
    },
    // This will be called when the instance is ready
    created() {
        // Set the content to the stored value or to a default string if nothing was saved
        this.content = localStorage.getItem('content') || 'You can write in **markdown** ';
    },
});

console.log('restored note:', localStorage.getItem('content'));