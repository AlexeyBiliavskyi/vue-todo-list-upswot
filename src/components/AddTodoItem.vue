<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button class="add-todo-item__btn" type="submit">Добавить</button>
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
                this.$emit('add-todo-item', this.title);
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
    .add-todo-item__btn {
        background-color:greenyellow;
        color: indigo;
    }
</style>