<template lang="pug">
  #app
    .wrapper
      img(src="./assets/platzi.png")
      h1 Registro estación Platzi
      form(@submit.prevent="submit")
        label(for='nombre') Nombre
        input#nombre(v-model="nombre")
        label(for='apellido') Apellido
        input#apellido(v-model="apellido")
        label(for='cargo') Cargo
        input#cargo(v-model="cargo")
        button(type="submit") ENVIAR
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      nombre: 'Platzerito',
      apellido: 'Cool de la Web',
      cargo: 'FullStack JS'
    }
  },
  methods: {
    submit () {
      alert('enviando...!')
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
#app {
  width: 320px;
  height: 409px;
  background: $blanco;
  margin: 100px auto;
  border-radius: 2px;
  border: solid 3px $gris;
  .wrapper{
    padding: 20px 28px;

    h1 {
      color: $azul;
      font-size: 25px;
      font-weight: bold;
    }

    label, input {
      display: block;
      width: 100%;
    }

    label {
      color: $naranja;
      font-size: 10px;
    }

    input {
      border: none;
      font-size: 16px;
      border-bottom: 1px solid $naranja;
      margin-bottom: 15px;
      padding: 5px 0px;
    }

    button {
      background: $azul;
      color: $blanco;
      font-size: 12px;
      padding: 8.5px 38px;
      border-radius: 3px;
      border: none;
      float: right;
      font-weight: bold;
      box-shadow: 2px 2px 8px $gris;
    }
  }
}

</style>
