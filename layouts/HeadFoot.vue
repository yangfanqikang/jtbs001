<template>
    <div class="head-foot">
      <Header :imgUrl="imgUrl"/>
      <nuxt/>
      <Footer/>
    </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import {picMap} from '../assets/config/picConfig'
    export default {
      name: "HeadFoot",
      data() {
        return {
          imgUrl: require("../assets/img/pic_banner.png"),
        }
      },
      components: {
          Header,
        Footer
      },
      watch: {
        $route: {
          handler(newValue, oldValue) {
            console.log(newValue, oldValue)
            this.imgUrl = picMap[newValue.name]
            console.log(this.imgUrl)
          },
          immediate: true
        }
      }
    }
</script>

<style lang="scss">
#__nuxt{
  background-color: #F0F0F0;
}
</style>
