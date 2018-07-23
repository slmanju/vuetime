// New VueJS instance
new Vue({
    el: '#notebook',
    // Some data
    data() {
        return {
            content: 'This is a note.',
            notes: [],
            // Id of the selected note
            selectedId: null
        }
    },
    // methods
    methods: {
        saveNote() {
            console.log('saving note:', this.content)
            localStorage.setItem('content', this.content)
        },
        // Add a note with some default content and select it
        addNote() {
            const time = Date.now();
            // Default new note
            const note = {
                    id: String(time),
                    title: 'New note ' + (this.notes.length + 1),
                    content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
                    created: time,
                    favorite: false,
                }
                // Add to the list
            this.notes.push(note);
        },
        selectNote(note) {
            this.selectedId = note.id
        },
    },
    // Computed properties
    computed: {
        notePreview() {
            // Markdown rendered to HTML
            return marked(this.content);
        },
        addButtonTitle() {
            return this.notes.length + ' note(s) already';
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