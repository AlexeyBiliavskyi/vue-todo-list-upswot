<template>
    <div class="todo-list">
        <ul>
            <TodoItem 
            v-for="(item, i) in todos" :key="item.id" 
            v-bind:todo="item" 
            v-bind:index="i"
            v-on:remove-todo-item="removeTodoItem"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
    props: ['todos'],
    components: {
        TodoItem
    },
    methods: {
        removeTodoItem(id) {
            this.$emit('remove-todo-item', id)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: center;
    }
</style>