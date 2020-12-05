<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Добавить</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const newTodoItem = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }
                this.$emit('add-todo-item', newTodoItem);
                this.title = '';
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        text-align: center;
        justify-content: center;
    }
    input {
        width: 450px
    }
</style>