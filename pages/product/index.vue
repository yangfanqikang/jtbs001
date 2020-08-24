<template>
    <div>
        <Header :bannerData="bannerData" />
        <Mineral :MinData="yht"/>
        <Mineral :MinData="lq"/>
        <Mineral :MinData="fg"/>
        <Mineral :MinData="applyData"/>
    </div>
</template>

<script>
  import Header from '../../components/Header'
  import Mineral from '../../components/Mineral'
  import bannerSrc from "../../assets/img/product/production_banner.png";
  import titleSrc from "../../assets/img/product/product-text.png";
  export default {
    layout: "HeadFoot",
    data(){
      return{
        bannerData:{
          bannerSrc: bannerSrc,
          titleSrc: titleSrc,
          text: "以创新的产品理念深入人们现有的生活状态"
        },
        yht:{
          title: "氧化铁系列颜料",
          subTitle: "IRON OXIDE",
          text:"氧化铁颜料系列产品以卓越的颜色稳定性、耐光色牢度、耐候稳定性和耐化学性而著称。主要用于常规的各种建筑材料、涂料油漆、橡塑纸品等领域的着色",
          items:[
            {
              imgSrc:require("../../assets/img/product/yht_001.png"),
              title:"氧化铁红"
            },
            {
              imgSrc:require("../../assets/img/product/yht_002.png"),
              title:"氧化铁黄"
            },
            {
              imgSrc:require("../../assets/img/product/yht_003.png"),
              title:"氧化铁黑"
            },
            {
              imgSrc:require("../../assets/img/product/yht_004.png"),
              title:"复合铁绿"
            }
          ],
          bgColor: "#fff",
          bgImgSrc: null,
          titleColor: "#D95747"
        },
        lq:{
          title: "彩色沥青颜料",
          subTitle: "COLORED ASPHALT",
          text:"我公司独立自主研发的环境友好型彩色沥青专用色粉，耐候性强，价格低廉。主要产品为沥青红、沥青蓝、沥青绿、沥青黄、沥青灰，沥青紫等多种颜色类型十几种不同色调产品。",
          items:[
            {
              imgSrc:require("../../assets/img/product/liqing_001.png"),
              title:"沥青红"
            },
            {
              imgSrc:require("../../assets/img/product/liqing_002.png"),
              title:"沥青蓝"
            },
            {
              imgSrc:require("../../assets/img/product/liqing_003.png"),
              title:"沥青绿"
            },
          ],
          bgColor: "#FFF6F4",
          bgImgSrc: null,
          titleColor: "#D95747"
        },
        fg:{
          title: "彩色有机覆盖物",
          subTitle: "COLOR ORGANIC COVERING",
          text:"秉承取之自然，回馈于自然的环保理念，我公司利用各种有机生物体材料研发生产的彩色有机覆盖物，加工处理后铺设于园艺植物或树木周围土壤表面，起保持土壤水分、吸附扬尘、调节土壤温度、增加土壤肥力、抑制杂草、促进植栽生长、减少土壤侵蚀和紧实度以及装饰美观等等作用。",
          items:[
            {
              imgSrc:require("../../assets/img/product/fugai_001.png"),
              title:"砖红色"
            },
            {
              imgSrc:require("../../assets/img/product/fugai_002.png"),
              title:"棕色"
            },
            {
              imgSrc:require("../../assets/img/product/fugai_003.png"),
              title:"原木色"
            },
            {
              imgSrc:require("../../assets/img/product/fugai_004.png"),
              title:"黑色"
            }
          ],
          bgColor: "#fff",
          bgImgSrc: null,
          titleColor: "#D95747"
        },
        applyData:{
          title: "产品应用",
          subTitle: "PRODUCT APPLICATION",
          text:"我们秉承环保健康的理念，为丰富城市的色彩而努力。彩色沥青具有减少噪声污染、诱导车流、色彩多样、美化环境等优点。有研究表明，具有彩色步道的城市，人们外出锻炼的意愿更为强烈。",
          items:[
            {
              imgSrc:require("../../assets/img/pic-example-1.png"),
              title:"长沙"
            },
            {
              imgSrc:require("../../assets/img/pic-example-4.png"),
              title:"益阳"
            },
          ],
          bgColor: "#fff",
          bgImgSrc: require("../../assets/img/product/production_bg.png"),
          titleColor: "#fff",
        }
      }
    },
    components:{
      Header,
      Mineral
    }
  }

</script>

<style lang="scss" scoped>

</style>
