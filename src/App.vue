<template lang="pug">
  #app
    m-header
    .columns.is-mobile.is-gapless
      navbar.column.is-narrow
      section.column
        .wrapper
          h2 Ahora en cine
          pelicula(
            :pelicula="pelicula",
            :key="pelicula.id",
            v-for="pelicula in peliculas")
        .wrapper
          h2 Aclamadas por la critica
          pelicula(
            :pelicula="pelicula",
            :key="pelicula.id",
            v-for="pelicula in peliculas")
        .wrapper
          h2 No te debes perder
          pelicula(
            :pelicula="pelicula",
            :key="pelicula.id",
            v-for="pelicula in peliculas")
</template>

<script>
import MHeader from './components/header'
import Navbar from './components/navbar'
import Pelicula from './components/pelicula'

export default {
  name: 'app',
  components: {
    MHeader,
    Navbar,
    Pelicula
  },
  data () {
    return {
      peliculas: [
        {
          id: 1,
          titulo: 'The Secret Life of Pets',
          contenido: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
          id: 2,
          titulo: 'The Secret Life of Pets',
          contenido: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
          id: 3,
          titulo: 'The Secret Life of Pets',
          contenido: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
#app {
  margin: 0 auto;
  width: 1024px;
  background: white;

  .wrapper {
    padding: 28px 0 0 28px;

    h2 {
      margin-bottom: 15px;
    }
  }
}

</style>
