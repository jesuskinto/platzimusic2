const trackMixin = {
  methods: {
    selectTrack () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      this.$emit('select', this.track.id)
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
