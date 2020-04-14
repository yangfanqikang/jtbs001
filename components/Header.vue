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
    </header>
</template>

<script>

  export default {
      name: "Header",
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
}
</style>
