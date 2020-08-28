<template>
  <div>
    <Header :bannerData="bannerData" />
    <AboutUs />
    <Mineral :MinData="worldData" />
    <Quality />
    <Contact />
  </div>
</template>

<script>
  import Header from '../../components/Header'
  import AboutUs from '../../components/AboutUs'
  import Mineral from '../../components/Mineral'
  import Quality from '../../components/Quality'
  import Contact from '../../components/Contact'
  import bannerSrc from "../../assets/img/about/about_banner.png";
  import titleSrc from "../../assets/img/about/about.png";
  export default {
    layout: "HeadFoot",
    data(){
      return{
        bannerData:{
          bannerSrc: bannerSrc,
          titleSrc: titleSrc,
          text: "我们用专业缔造品牌精髓",
          redWhite:true
        },
        worldData:{
          title: "畅销全球",
          subTitle: "BEST SELLING IN THE WORLD",
          text: null,
          items:[
            {
              imgSrc:require("../../assets/img/about/changxiao_001.png"),
              imgSrcWidth: '100px',
              title:"国内",
              text: '产品以其优良的品质和完善的服务畅销国内60多个城市。'
            },
            {
              imgSrc:require("../../assets/img/about/changxiao_002.png"),
              imgSrcWidth: '100px',
              title:"国外",
              text: "出口欧美、中东、东南亚等多个国家和地区,赢得广泛声誉。"
            },
            {
              imgSrc:require("../../assets/img/about/changxiao_003.png"),
              imgSrcWidth: '100px',
              title:"工厂",
              text: "与国内外1000多家工厂建立友好贸易关系，形成了稳定的市场销售网络。"
            }
          ],
          bgColor: "#FFF5F4",
          bgImgSrc: null,
          titleColor: "#D95747",
          middleLine: false
        },
      }
    },
    mounted(){
      console.log(window.screen.width)
      if(window.screen.width >1366){

      }
    },
    components:{
      Header,
      AboutUs,
      Mineral,
      Quality,
      Contact
    }
  }

</script>

<style lang="scss" scoped>

</style>
