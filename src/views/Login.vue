<template>
    <div class="login-wrapper">
        <form @submit.prevent="auth">
            <div>
                <label for="login">Login</label>
                <input v-model="login" id="login" type="text" placeholder="Enter login...">
            </div>
            <div>
                <label for="password">Password</label>
                <input v-model="password" id="password" type="password" placeholder="Enter password...">
            </div>
            <div>
                <button type="submit">Sign In</button>
            </div>
        </form>
    </div>
</template>

<script>
import { store } from '@/store/store.js';

export default {
  name: 'Login',
  data() {
      return {
          login: '',
          password: ''
      }
  },
  methods: {
      auth() {
          store.auth(this.login, this.password);
      }
  }
}
</script>

<style>

.login-wrapper{
    text-align: center;
}

</style>