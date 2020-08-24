<template>
    <header>
      <div class="inner">
        <div class="header-logo">
          <img src="../assets/img/logo.png" alt="">
        </div>
        <nav>
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/product">产品及应用</nuxt-link>
          <nuxt-link to="/service">服务</nuxt-link>
          <nuxt-link to="/new">新闻</nuxt-link>
          <nuxt-link to="/about">关于我们</nuxt-link>
        </nav>
      </div>
    </header>
</template>

<script>

  export default {
      name: "Header",
    }
</script>

<style lang="scss" scoped>
header{
  width:100%;
  .inner{
    width:80%;
    display: flex;
    justify-content: space-between;
    height: 80px;
    line-height: 80px;
    .header-logo{
      width: 90px;
      height: auto;
      margin-top: 18px;
    }
    nav{
      font-size: 18px;
      a{
        color: #6F1B11;
        text-decoration: none;
        padding: 0px 15px;
      }
    }
  }
}
</style>
