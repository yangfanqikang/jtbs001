<template>
  <div class="container">
    <Header :bannerData="bannerData" />
    <Reason />
    <Company />
    <MainProduct />
    <Case />
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Reason from '../components/Reason'
  import Company from '../components/Company'
  import Case from '../components/Case'
  import MainProduct from '../components/MainProduct'
  import bannerSrc from '../assets/img/banner1.png'
  import titleSrc from '../assets/img/yltitle.png'
export default {
  layout: "HeadFoot",
  data(){
    return{
      bannerData:{
        bannerSrc: bannerSrc,
        titleSrc: titleSrc,
        text: "助力健康生活 丰富城市色彩"
      }
    }
  },
  components:{
    Header,
    Reason,
    Company,
    MainProduct,
    Case
  }
}
</script>

<style lang="scss" scoped>
  .container{

  }
</style>
