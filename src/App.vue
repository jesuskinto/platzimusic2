<template lang="pug">
  #app
    pm-header
    section.section
      nav.navbar
        .field.has-addons
          .control.is-expanded
            input.input(
              type="text"
              placeholder="Buscar canciones"
              v-model="searchQuery")
          .control
            button.button.is-info(@click="buscar") Buscar
          .control
            button.button.is-danger &times;
      p
        small Encontrados: {{ cantidad }}
      .container.results
        .columns
          .column(v-for="c in canciones")
            | {{ c.name }} - {{ c.artists[0].name }}
    pm-footer
</template>

<script>
import trackService from './services/traks'
import PmHeader from './components/layout/Header.vue'
import PmFooter from './components/layout/Footer.vue'

export default {
  name: 'app',
  components: {
    PmHeader,
    PmFooter
  },
  data () {
    return {
      canciones: [],
      searchQuery: ''
    }
  },
  methods: {
    buscar () {
      if (!this.searchQuery) { return }

      trackService.search(this.searchQuery)
        .then(res => {
          this.canciones = res.tracks.items
        })
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
  .results {
    margin-top: 30px;
  }
}
</style>
