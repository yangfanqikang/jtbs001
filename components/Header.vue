<template>
    <header>
      <div class="header-logo">
        <div class="inner">
          <img src="../assets/img/logo.png" alt="">
        </div>
      </div>
      <nav>
        <div class="inner">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/about">关于我们</nuxt-link>
          <nuxt-link to="/business">业务模块</nuxt-link>
          <nuxt-link to="/example">成功案例</nuxt-link>
          <nuxt-link to="/team">团队及文化</nuxt-link>
          <nuxt-link to="/contact">联系我们</nuxt-link>
        </div>
      </nav>
      <div class="banner" :style="'backgroundImage: url('+ imgUrl + ')'">
         <div class="inner" v-if="imgUrl === picMap.index">
           <h1>还在为获客发愁？<br/>还在因业绩焦虑？</h1>
           <div class="title-divide"></div>
           <h2>钱源二类电商投放2.0<br/>让产品销售省心无忧？</h2>
           <nuxt-link to="/">立即了解</nuxt-link>
         </div>
      </div>
    </header>
</template>

<script>
  import {picMap} from "../assets/config/picConfig";

  export default {
      name: "Header",
      props: {
          imgUrl: String
      },
    data() {
      return {
        picMap
      }
    },
    }
</script>

<style lang="scss" scoped>
  .active-link{
    &.exact-active-link{
      color: #ffffff;
      background-color: $primaryColor;
    }
  }
  .inner{
    margin: 0 auto;
    width: $innerWidth;
  }
header{
  .header-logo{
    height: 150px;
    display: flex;
    align-items: center;
  }
  nav{
    background-color: $primaryDefault;
    color: #ffffff;
    height: 50px;
    >.inner{
      line-height: 50px;
      display: flex;
      color: #ffffff;
      a{
        width: 150px;
        text-align: center;
        text-decoration: none;
        color: #ffffff;
      }
      a:hover{
        background-color: $primaryColor;
      }
    }
  }
  .banner{
    height: 700px;
    background: no-repeat center center;
    background-size: cover;
    padding-top: 135px;
    box-sizing: border-box;
    h1{
      font-size: 50px;
      color: #ffffff;
      padding-bottom: 33px;
      line-height: 1.5;
    }
    .title-divide{
      height: 4px;
      background-color: #fff;
      width: 100px;
    }
    h2{
      font-size: 40px;
      color: #ffffff;
      margin-top: 33px;
      font-weight: normal;
      line-height: 1.5;
    }
    a{
      display: block;
      width:300px;
      height:80px;
      /*background:rgba(0,103,168,1);*/
      border-radius:40px;
      text-align: center;
      line-height: 80px;
      text-decoration: none;
      font-size: 40px;
      margin-top: 40px;
    }
  }
}
</style>
