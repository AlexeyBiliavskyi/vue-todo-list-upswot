import router from '@/router'

class Store {
    get username() {
        return sessionStorage.getItem('username');
    }

    get isAuthorized() {
        return sessionStorage.getItem('isAuthorized');
    }

    auth(login, password) {
        if (login === 'admin' && password === '12345') {
            sessionStorage.setItem('isAuthorized', true);
            sessionStorage.setItem('username', login);
            router.push({ name: 'Todo' });
        } else {
            sessionStorage.setItem('isAuthorized', false);
            sessionStorage.removeItem('username');
        }
    }
}

export const store = new Store();