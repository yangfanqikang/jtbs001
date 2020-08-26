<template>
    <div>
      <div class="nav">
        <div class="header-logo">
          <img class="logo" src="../assets/img/logo.png" alt="">
        </div>
        <nav :class="{blackRed: blackRed,redWhite:redWhite,pinkWhite:pinkWhite}">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/product">产品及应用</nuxt-link>
          <nuxt-link to="/service">服务</nuxt-link>
          <nuxt-link to="/new">新闻</nuxt-link>
          <nuxt-link to="/about">关于我们</nuxt-link>
        </nav>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        props:{
          blackRed:{
            type:Boolean,
            default:false
          },
          redWhite:{
            type:Boolean,
            default:false
          },
          pinkWhite:{
            type:Boolean,
            default:false
          }
        }
    }
</script>

<style scoped lang="scss">
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
    .redWhite{
      font-size: 1.125rem;
      a{
        color: #6F1B11;
        text-decoration: none;
        padding: 0px 15px;
      }
      a.exact-active-link{
        color: white;
      }
    }
    .blackRed{
      font-size: 1.125rem;
      a{
        color: #333;
        text-decoration: none;
        padding: 0px 15px;
      }
      a.exact-active-link{
        color: #C14437;
      }
    }
    .pinkWhite{
      font-size: 1.125rem;
      a{
        color: #EE9494;
        text-decoration: none;
        padding: 0px 15px;
      }
      a.exact-active-link{
        color: white;
      }
    }
  }
</style>
