// New VueJS instance
new Vue({
    el: '#notebook',
    // Some data
    data() {
        return {
            notes: JSON.parse(localStorage.getItem('notes')) || [],
            selectedId: localStorage.getItem('selected-id') || null,
        }
    },
    // methods
    methods: {
        saveNote() {
            console.log('saving note:', this.content);
            localStorage.setItem('content', this.content)
        },
        saveNotes() {
            // Don't forget to stringify to JSON before storing
            localStorage.setItem('notes', JSON.stringify(this.notes));
            console.log('Notes saved!', new Date());
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
            };
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
            return this.selectedNote ? marked(this.selectedNote.content) : '';
        },
        addButtonTitle() {
            return this.notes.length + ' note(s) already';
        },
        selectedNote() {
            // We return the matching note with selectedId
            return this.notes.find(note => note.id === this.selectedId);
        },
    },
    // Change watchers
    watch: {
        notes: {
            // The method name
            handler: 'saveNotes',
            // We need this to watch each note's properties inside the array
            deep: true,
        },
        // Let's save the selection too
        selectedId(val) {
            localStorage.setItem('selected-id', val)
        },
    },
    // This will be called when the instance is ready
    created() {
        // Set the content to the stored value or to a default string if nothing was saved
        this.content = localStorage.getItem('content') || 'You can write in **markdown** ';
    },
});