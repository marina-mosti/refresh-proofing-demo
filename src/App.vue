<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <form @submit.prevent="submit">
      <BaseInput label="First name" name="firstName" />
      <BaseInput label="Last name" name="lastName" />
      <BaseInput label="Nickname" name="nickname" />
      <BaseInput label="Age" name="age" type="number" />
      <BaseInput label="CC Number" name="cc" />

      <BaseSelect label="Shirt size" name="shirtSize" :options="shirts" />
      <BaseSelect label="Favorite noms" name="noms" :options="noms" />
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
