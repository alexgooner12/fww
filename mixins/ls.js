export default {
    computed: {
        loadFromLocalStorage() {
            if (localStorage.getItem('fields')) return JSON.parse(localStorage.getItem('fields'));
        }
    }
}
