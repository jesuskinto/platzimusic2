<template lang="pug">
  .container
    .columns
      .column.is-4.is-offset-5
        .notification(:class="type")
          slot(name="body") {{ $t('notification.wrong') }}
</template>

<script>
export default {
  name: 'notificacion',
  props: {
    type: {
      type: String,
      default: 'is-danger'
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 10px 0;
  }

  .notification {
    text-align: center
  }
</style>
