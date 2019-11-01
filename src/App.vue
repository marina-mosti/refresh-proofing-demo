<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <form @submit.prevent="submit">
      <BaseInput label="Email" name="email" :value="form.email" @input="updateForm('email', $event)" />
      <BaseInput label="Password" name="password" type="password" :value="form.password" @input="updateForm('password', $event)" />
      <BaseSelect label="Favorite noms" name="noms" :options="noms" :value="form.noms" @input="updateForm('noms', $event)" />
      <button type="submit">SEND!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      noms: [
        { label: 'Apple', value: 'apple' },
        { label: 'Bannana', value: 'bannana' },
        { label: 'Taco', value: 'taco' }
      ],
      form: {
        email: '',
        password: '',
        noms: ''
      }
    }
  },
  methods: {
    submit () {
      console.log('Sent')
    },
    updateForm (param, value) {
      this.form[param] = value
      localStorage.setItem('form', JSON.stringify(this.form))
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 400px;
  margin: 60px auto;
}
</style>
