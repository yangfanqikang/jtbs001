<template>
  <div>
    <Header :bannerData="bannerData" />
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import bannerSrc from "../../assets/img/product/production_banner.png";
  import titleSrc from "../../assets/img/about/about.png";
  export default {
    layout: "HeadFoot",
    data(){
      return{
        bannerData:{
          bannerSrc: bannerSrc,
          titleSrc: titleSrc,
          text: "我们用专业缔造品牌精髓"
        }
      }
    },
    components:{
      Header
    }
  }

</script>

<style lang="scss" scoped>

</style>
