<template lang="pug">
  #app
    section.section
      nav.navbar
        .field.has-addons
          .control.is-expanded
            input.input(
              type="text"
              placeholder="Buscar canciones"
              v-model="nombre")
          .control
            button.button.is-info(@click="buscar") Buscar
          .control
            button.button.is-danger &times;
          .control
            button.button
              span.is-size-7 Encontrado: {{ cantidad }}

      .container.custom
        .columns
          .colum(v-for="c in canciones") {{ c.nombre }},{{ c.artista }}
</template>

<script>

const canciones = [
  { 'nombre': 'De mes en mes', 'artista': 'Ricardo Arjona' },
  { 'nombre': 'Pinguinos en la cama', 'artista': 'Ricardo Arjona' },
  { 'nombre': 'Atrevete', 'artista': 'Calle 13' },
  { 'nombre': 'Nadie como tu', 'artista': 'Calle 13' }
]

export default {
  name: 'app',
  data () {
    return {
      canciones: [],
      nombre: ''
    }
  },
  methods: {
    buscar () {
      this.canciones = canciones
    }
  },
  computed: {
    cantidad () {
      return this.canciones.length
    }
  }
}
</script>

<style lang="scss">
@import 'scss/main.scss';

#app {
  .custom {
    margin-top: 30px;
  }
}
</style>
