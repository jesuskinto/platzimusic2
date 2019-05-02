<template lang="pug">
  header#m-header.level
    .level-left
      img(src="../assets/logo.png")
    .level-right
      .level-item
        input.input(type="text" :placeholder="placeholder")
      .level-item
        a.button
          span Jesus Quinto
          span.icon
            img(src="../assets/profile.png")
          span.icon
            i.material-icons arrow_drop_down
</template>

<script>
export default {
  name: 'm-header',
  data () {
    return {
      placeholder: 'busca tu peli, actor, actriz o director favorito'
    }
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';
#m-header {
  min-height: 72px;
  padding: 0 20px;
  margin-bottom: 0;
  box-shadow: 0px 5px 5px $gris;
  .level-left {
    img {
      margin-left: 15px;
    }
  }
  .level-right {
    input {
      width: 480px;
    }
    img {
      margin-left: 10px;
      border-radius: 15px;
      width: 24px;
      height: 24px;
    }
    a.button {
      margin-left: 13px;
      border: none;
    }
  }
}

</style>
