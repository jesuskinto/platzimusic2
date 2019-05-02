<template lang="pug">
  #navbar
    .item
      i.material-icons home
      span Home
    .item
      i.material-icons whatshot
      span Trending
    .item
      i.material-icons favorite
      span Más Likes

    .item.ultimo
      i.material-icons settings
      span Ajustes
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss">
@import '../scss/main.scss';
#navbar {
  background-image: linear-gradient(to right, $rosa, $rosaclaro);
  width: 89px;
  height: 810px;
  color: $blanco;
  text-align: center;
  .item {
    cursor: pointer;
    margin-top: 25px;
    font-size: 14px;

    i {
      display: block;
      font-size: 35px;
    }
  }

  .ultimo {
    margin-top: 490px;
  }
}
</style>
