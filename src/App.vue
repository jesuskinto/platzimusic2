<template lang="pug">
  #app
    pm-header
    router-view
    pm-footer
</template>

<script>
import PmHeader from '@/components/layout/Header.vue'
import PmFooter from '@/components/layout/Footer.vue'

export default {
  name: 'app',
  components: {
    PmHeader,
    PmFooter
  }
}
</script>

<style lang="sass">
  @import 'sass/main.sass'
</style>
