import router from '@/router'
import users from '@/store/fakeData/users.js'
import todos from '@/store/fakeData/todos.js'

class Store {
    get username() {
        return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).username : '';
    }

    get isAuthorized() {
        return sessionStorage.getItem('isAuthorized') === 'true';
    }

    getUserTodoList(userId) {
        if (!localStorage.getItem(userId)) {
            localStorage.setItem(userId, JSON.stringify(todos));
        }
        return JSON.parse(localStorage.getItem(userId))
    }

    addUserTodoItem(userId, title) {
        const userTodoList = this.getUserTodoList(userId);
        if (userTodoList) {
            userTodoList.push({
                id: Date.now(),
                title: title,
                completed: false
            });
            this.saveUserTodoList(userId, userTodoList);
        }
    }

    toggleUserTodoItemCompleted(userId, itemId) {
        const userTodoList = this.getUserTodoList(userId);
        const todoItemIndex = userTodoList ? userTodoList.findIndex(item => item.id === itemId) : null;
        if (todoItemIndex > -1) {
            userTodoList[todoItemIndex] = {
                ...userTodoList[todoItemIndex],
                completed: !userTodoList[todoItemIndex].completed
            }
            this.saveUserTodoList(userId, userTodoList);
        }
    }

    changeUserTodoItemTitle(userId, itemId, title) {
        const userTodoList = this.getUserTodoList(userId);
        const todoItemIndex = userTodoList ? userTodoList.findIndex(item => item.id === itemId) : null;
        if (todoItemIndex > -1) {
            userTodoList[todoItemIndex] = {
                ...userTodoList[todoItemIndex],
                title: title
            }
            this.saveUserTodoList(userId, userTodoList);
        }
    }

    removeUserTodoItem(userId, itemId) {
        const userTodoList = this.getUserTodoList(userId);
        if (userTodoList) {
            this.saveUserTodoList(userId, userTodoList.filter(t => t.id !== itemId));
        }
    }

    saveUserTodoList(userId, todoList) {
        localStorage.setItem(userId, JSON.stringify(todoList));
    }

    auth(login, password) {
        const user = users ? users.find(user => user.username === login && user.password === password) : null;
        if (user) {
            sessionStorage.setItem('isAuthorized', true);
            sessionStorage.setItem('user', JSON.stringify(user));
            router.push({ name: 'Todo', params: { userId: user.id } });
        } else {
            sessionStorage.setItem('isAuthorized', false);
            sessionStorage.removeItem('user');
        }
    }
}

export const store = new Store();