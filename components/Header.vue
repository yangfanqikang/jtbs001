<template>
    <header>
      <img class="banner" :src="bannerData.bannerSrc" alt="">
      <div class="inner">
        <Nav />
        <div class="explain">
          <img class="title" :src="bannerData.titleSrc" alt="">
          <div>{{bannerData.text}}</div>
        </div>
      </div>
    </header>
</template>

<script>
  import Nav from './Nav'
  export default {
      name: "Header",
      props: {
        bannerData: {
          type: Object,
          default: null
        },
      },
      components:{
        Nav
      }
    }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  position: relative;
  background-color: white;
  overflow: hidden;
  .banner{
    width: 100%;
    height: 31.56%;
  }
  .inner{
    position: absolute;
    top:0px;
    left:50%;
    width:75%;
    height: 100%;
    transform: translateX(-50%);
    .explain{
      color:white;
      position: absolute;
      top:40%;
      transform: translateY(-50%);
      left:50%;
      transform: translateX(-50%);
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
      .title{
        width: 27%;
        height: auto;
      }
      >div{
        padding-top: 4%;
      }
    }
  }
}
</style>
