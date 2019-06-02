<template lang="pug">
  section.hero.is-success
      .hero-head
        header.navbar
          .container
            .navbar-left
              router-link.navbar-item(to="/")
                strong 📻 Platzi Music
            .navbar-end.nav-menu
              .nav-item.dropdown.is-hoverable.lang
                  span(
                    aria-haspopup='true',
                    aria-controls='dropdown-menu',)
                  | {{ lang | first-upper}}
                  #dropdown-menu.dropdown-menu(role='menu')
                    .dropdown-content
                      a.dropdown-item(
                        :class="{ 'is-active': lang == 'en' }"
                        @click="selectLang('en')"
                      ) {{ $t('header.english') }}
                      a.dropdown-item(
                        :class="{ 'is-active': lang == 'es' }"
                        @click="selectLang('es')"
                      ) {{ $t('header.spanish') }}
              router-link.navbar-item(to="/") {{ $t('header.search')}}
              router-link.navbar-item(to="/about") {{ $t('header.about')}}

      .hero-body
        .container.has-text-centered
          h1.title Platzi Music
          h2.subtitle {{ $t('header.title')}} Vue-nísimas
          pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: {
    PmPlayer
  },

  data () {
    return {
      activeDropdown: false
    }
  },

  computed: {
    lang () {
      return this.$i18n.locale
    }
  },

  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~bulma/bulma.sass';

  .dropdown:hover{
    background-color: #20bc56;
  }

  .dropdown-content {
    border-radius: 0px;
  }

  a.dropdown-item.is-active {
    background-color: $primary;
  }

  .lang {
    padding: 15px 10px;
  }
</style>
