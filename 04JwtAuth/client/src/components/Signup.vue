<template>
  <div>
    EMAIL: <input for="email" type="email" placeholder="Please enter your email here" required v-model="email"
      @blur="validateEmail"><br />
    PASSWORD: <input type="password" v-model="password" /> <br />
    <button @click="signup">signup</button>
    {{ error }}
  </div>
</template>
<script>
import axios from 'axios';
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'


export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  setup: () => ({ v$: useVuelidate() }),
  methods: {
    /* eslint-disable no-useless-escape */
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.msg['email'] = 'Please enter a valid email address';
      } else {
        this.msg['email'] = '';
      }
    },
    signup() {
      let newUser = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/auth/register', newUser)
        .then(res => {
          console.log(res);
          this.error = '';
          this.$router.push('/login');
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
    }
  }
}
</script>


