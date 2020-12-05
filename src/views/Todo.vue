<template>
    <div class="todo">
        <h4>Список самых важных дел</h4>
        <AddTodoItem 
        @add-todo-item="addTodoItem"
        />
        <hr>
        <TodoList 
        v-bind:todos="todos"
        @remove-todo-item="removeTodoItem"
        />
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodoItem from '@/components/AddTodoItem.vue'
export default {
    name: 'Todo',
    data() {
        return {
            todos: []
        }
    },
    mounted() {
        fetch('https://my-json-server.typicode.com/AlexeyBiliavskyi/vue-todo-list-upswot/todos?_limit=3')
            .then(response => response.json())
            .then(json => this.todos = json)
    },
    methods: {
        removeTodoItem(id) {
            this.todos = this.todos.filter(t => t.id !== id)
        },
        addTodoItem(todo) {
            this.todos.push(todo);
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