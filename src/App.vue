<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <form @submit.prevent="submit">
      <BaseInput label="First name" name="firstName" :value="form.firstName" @input="updateForm('firstName', $event)" />
      <BaseInput label="Last name" name="lastName" :value="form.lastName" @input="updateForm('lastName', $event)" />
      <BaseInput label="Nickname" name="nickname" :value="form.nickname" @input="updateForm('nickname', $event)" />
      <BaseInput label="Age" name="age" type="number" :value="form.age" @input="updateForm('age', $event)" />

      <BaseSelect label="Shirt size" name="shirtSize" :options="shirts" :value="form.shirtSize" @input="updateForm('shirtSize', $event)" />
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
        { label: 'Taco', value: 'taco' },
        { label: '🥑', value: '🥑' }
      ],
      shirts: [
        { label: 'S', value: 'small' },
        { label: 'M', value: 'medium' },
        { label: 'L', value: 'large' },
        { label: 'H', value: 'hulk' },
        { label: 'AM', value: 'antman' }
      ],
      form: {
        firstName: '',
        lastName: '',
        nickname: '',
        age: '',
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
  },
  created () {
    const form = localStorage.getItem('form')
    if (form) {
      this.form = JSON.parse(form)
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
