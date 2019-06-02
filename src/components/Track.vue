<template lang="pug">
  .card
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6.track-name(:title="track.name")
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name | cut(15) }}

      .content
        small {{ track.duration_ms | ms-to-mn }}
        nav.level
          .level-left
            button.button.is-primary.level-item(@click="selectTrack")
              span.icon.is-small ▶
          .level-left
            button.button.is-warning.level-item(@click="goToTrack")
              span.icon.is-small 🌎
</template>

<script>
import trackMixin from '@/mixins/track'
export default {
  mixins: [trackMixin],
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToTrack () {
      const id = this.track.id
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>

<style scoped>
  button:last-child {
    margin-top: 10px;
  }

  .track-name {
    width: 100%;
    height: 15px;
    overflow: hidden;
  }
</style>
