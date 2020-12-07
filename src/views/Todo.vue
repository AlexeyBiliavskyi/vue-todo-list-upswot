<template>
    <div class="todo">
        <div>Привет, {{username}}!</div>
        <h4>Список самых важных дел</h4>
        <AddTodoItem 
        @add-todo-item="addTodoItem"
        />
        <hr>
        <TodoList 
        v-bind:todos="todos"
        @remove-todo-item="removeTodoItem"
        @toggle-todo-item="toggleTodoItem"
        @change-todo-item-title="changeUserTodoItemTitle"
        />
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodoItem from '@/components/AddTodoItem.vue'
import { store } from '@/store/store.js'

export default {
    name: 'Todo',
    data() {
        return {
            todos: store.getUserTodoList(this.$route.params.userId),
            username: store.username
        }
    },
    methods: {
        removeTodoItem(id) {
            store.removeUserTodoItem(this.$route.params.userId, id);
            this.todos = store.getUserTodoList(this.$route.params.userId);
        },
        addTodoItem(title) {
            store.addUserTodoItem(this.$route.params.userId, title);
            this.todos = store.getUserTodoList(this.$route.params.userId);
        },
        toggleTodoItem(id) {
            store.toggleUserTodoItemCompleted(this.$route.params.userId, id);
            this.todos = store.getUserTodoList(this.$route.params.userId);
        },
        changeUserTodoItemTitle(id, title) {
            store.changeUserTodoItemTitle(this.$route.params.userId, id, title);
            this.todos = store.getUserTodoList(this.$route.params.userId);
        }
    },
    components: {
        TodoList, AddTodoItem
    }
}
</script>

<style>
    .todo {
        text-align: center;
    }
</style>