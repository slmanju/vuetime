// New VueJS instance
new Vue({
    el: '#notebook',
    // Some data
    data() {
        return {
            content: 'This is a note.',
        }
    }
});

const html = marked('**Bold** *Italic* [link] (http: //vuejs.org/)');
console.log(html);