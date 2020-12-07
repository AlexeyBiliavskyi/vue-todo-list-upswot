<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-on:change="$emit('toggle-todo-item', todo.id)">
            <strong>{{index + 1}}</strong>
            <span v-if="!isEdit">{{todo.title}}</span>
            <input v-else type="text" v-model="todo.title">
        </span>
        <div>
            <button v-if="!isEdit" class="edit" v-on:click="isEdit = !isEdit">Edit</button>
            <button v-else class="enter" v-on:click="isEdit = !isEdit; $emit('change-todo-item-title', todo.id, todo.title)">Enter</button>
            <button class="remove" v-on:click="$emit('remove-todo-item', todo.id)">&times;</button>
        </div>
    </li>
</template>

<script>
export default {
    data() {
        return {
            isEdit: false
        }
    },
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
        margin-left: 10px;
    }
    .edit {
        background: darkcyan;
        color: #ffffff;
        border-radius: 50%;
        font-weight: bold;
    }
    .enter {
        background: darkolivegreen;
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