import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    header: {
      english: 'English',
      spanish: 'Spanish',
      search: 'Search',
      about: 'About',
      title: 'Songs that are'
    },
    search: {
      search: 'Search',
      placeholder: 'Search Songs',
      found: 'Found',
      countResults: 'number of results',
      noFound: 'No results found 😟',
      notResults: '¡There are no songs to show 🙁 !'
    },
    footer: {
      title: 'Made with ❤ in Venezuela by'
    },
    notification: {
      wrong: 'Something went wrong!'
    },
    loading: 'Loading'
  },

  es: {
    header: {
      english: 'Ingles',
      spanish: 'Español',
      search: 'Buscar',
      about: 'Nosotros',
      title: 'Canciones que están'
    },
    search: {
      search: 'Buscar',
      placeholder: 'Buscar canciones',
      found: 'Enconstrados',
      countResults: 'Cantidad de resultados',
      noFound: 'No se encontraron resultados 😟',
      notResults: '¡No hay canciones para mostrar 🙁 !'
    },
    footer: {
      title: 'Hecho con ❤ en Venezuela por'
    },
    notification: {
      wrong: 'Algo salio mal!'
    },
    loading: 'Cargando'
  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
