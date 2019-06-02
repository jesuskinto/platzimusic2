<template lang="pug">
  main
    transition(name="move")
      pm-notificacion(
        :type="typeNotification",
        v-show="showNotification",
      )
        p(slot="body") {{ mesaggeNotification }}
    transition(name="move")
      pm-loading(v-show="isLoading")
    section.section(v-show="!isLoading")
      .container
        .field.has-addons
          .control.is-expanded
            input.input.is-medium(
              type="text"
              :placeholder="$t('search.placeholder')"
              v-model="searchQuery",
              @keyup.enter="search"
            )
          .control
            button.button.is-info.is-medium(@click="search")
              | {{ $t('search.search') }}
          .control
            button.button.is-danger.is-medium(@click="clean") &times;
        p
          small(v-show="cantidad") {{ $t('search.found')}}: {{ cantidad }}
        .container.results
          transition-group(name="move" tag="div" class="columns is-multiline")
            .column.is-one-quarter(v-for="t in tracks", :key="t.id")
              pm-track(
                v-blur="t.preview_url"
                :class="{ 'is-active': t.id === trackIdSeleted }"
                :track="t",
                @select="setSelectedTrack"
              )
          p.count0(v-show="!cantidad") {{ $t('search.notResults') }}

</template>

<script>
import trackService from '@/services/track'

import PmTrack from '@/components/Track.vue'
import PmLoading from '@/components/shared/Loading.vue'
import PmNotificacion from '@/components/shared/Notification.vue'

export default {
  name: 'search',
  components: {
    PmTrack,
    PmLoading,
    PmNotificacion
  },
  data () {
    return {
      tracks: [],
      searchQuery: '',
      isLoading: false,
      trackIdSeleted: '',
      showNotification: false,
      typeNotification: '',
      mesaggeNotification: ''
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false

          const total = res.tracks.total
          let message, type
          if (total) {
            message = `${this.$t('search.countResults')}: ${total}`
            type = 'is-info'
          } else {
            message = this.$t('search.noFound')
            type = 'is-danger'
          }
          this.updateNotification(message, type)
        })
        .catch(() => {
          const type = 'is-danger'
          const message = `Ocurrio un error`
          this.updateNotification(message, type)
          this.isLoading = false
        })
    },
    clean () {
      this.searchQuery = ''
      this.tracks = {}
    },
    setSelectedTrack (trackid) {
      this.trackIdSeleted = trackid
    },
    updateNotification (message, type) {
      this.mesaggeNotification = message
      this.typeNotification = type
      this.showNotification = true
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  computed: {
    cantidad () {
      return this.tracks.length
    }
  }
}
</script>

<style lang="scss" scoped>
.results {
  margin-top: 30px;
}

.is-active {
  border: solid grey;
}

.count0 {
  text-align: center;
  font-size: 30px;
}
</style>
