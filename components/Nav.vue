<template>
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
    </div>
</template>

<script>
    export default {
        name: "Nav"
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
    nav{
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
  }
</style>
