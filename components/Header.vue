<template>
    <header>
      <img class="banner" :src="bannerData.bannerSrc" alt="">
      <div class="inner">
        <div class="nav">
          <div class="header-logo">
            <img class="logo" src="../assets/img/logo.png" alt="">
          </div>
          <nav>
            <nuxt-link to="/">首页</nuxt-link>
            <nuxt-link to="/product">产品及应用</nuxt-link>
            <nuxt-link to="/service">服务</nuxt-link>
            <nuxt-link to="/new">新闻</nuxt-link>
            <nuxt-link to="/about">关于我们</nuxt-link>
          </nav>
        </div>
        <div class="explain">
          <img class="title" :src="bannerData.titleSrc" alt="">
          <div>{{bannerData.text}}</div>
        </div>
      </div>
    </header>
</template>

<script>

  export default {
      name: "Header",
      props: {
        bannerData: {
          type: Object,
          default: null
        },
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
    .nav{
      display: flex;
      justify-content: space-between;
      height: 80px;
      line-height: 80px;
      .header-logo{
        width: 90px;
        height: auto;
        margin-top: 18px;
        .logo{
          width:100%;
          height: auto;
        }
      }
      nav{
        font-size: 1.125rem;
        a{
          color: #6F1B11;
          text-decoration: none;
          padding: 0px 15px;
        }
      }
    }
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
