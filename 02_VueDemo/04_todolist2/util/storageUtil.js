const TODOS_KEY = 'todos_key';
export default {
    saveUtil(value) {
        window.localStorage.setItem(TODOS_KEY, JSON.stringify(value));
    },
    readUtil() {
        return JSON.parse(window.localStorage.getItem(TODOS_KEY) || "[]");
    }
}