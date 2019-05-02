<template lang="pug">
  .pelicula
    img(src="../assets/item.jpg")
    .info
      h1 {{pelicula.titulo}}
      p {{pelicula.contenido}}

</template>

<script>
export default {
  name: 'pelicula',
  props: ['pelicula'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';
.pelicula {
  width: 278px;
  height: 192px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  margin-right: 24px;
  box-shadow: 0 0 8px gray;

  img {
    height: 100%;
    position: absolute;
    bottom: 0;
  }

  .info {
    position: absolute;
    bottom: 0;
    background: $rosatraslucido;
    color: $blanco;
    padding: 8px;

    h1 {
      font-size: 18px;
    }

    p {
      font-weight: normal;
      font-size: 13px;
    }
  }
}
</style>
