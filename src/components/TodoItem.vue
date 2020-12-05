<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            <strong>{{index + 1}}</strong>
            {{todo.title}}
        </span>
        <button class="remove" v-on:click="$emit('remove-todo-item', todo.id)">&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    }
}
</script>

<style scoped>
    li {
        display: flex;
        justify-content: space-between;
        padding: 10px 5px;
        margin-bottom: 2px;
        border: 1px solid gray;
        max-width: 60%;
        margin: 0 auto;
    }

    .remove {
        background: red;
        color: #ffffff;
        border-radius: 50%;
        font-weight: bold;
    }

    input {
        margin-right: 1rem;
    }

    .done {
        text-decoration: line-through;
    }
</style>