<template>
    <div class="production-service">
      <TitleDes title="产品及服务" des="服务至上·效果第一" color="#ffffff"></TitleDes>
      <div class="inner">
        <div v-for="(ps, index) in psData" :key="index">
          <img :src="ps.imgUrl" alt="">
          <p>{{ps.des}}</p>
      </div>
    </div>
    </div>
</template>

<script>
  const psData = [
    { imgUrl: require("../assets/img/icon_ps_001.png"), des: "文案策划"},
    { imgUrl: require("../assets/img/icon_ps_002.png"), des: "产品拍摄"},
    { imgUrl: require("../assets/img/icon_ps_003.png"), des: "视觉设计"},
    { imgUrl: require("../assets/img/icon_ps_004.png"), des: "广告视频拍摄"},
    { imgUrl: require("../assets/img/icon_ps_005.png"), des: "信息流广告推广"},
    { imgUrl: require("../assets/img/icon_ps_006.png"), des: "专业运营服务"},
    { imgUrl: require("../assets/img/icon_ps_007.png"), des: "供应链对接"},
    { imgUrl: require("../assets/img/icon_ps_008.png"), des: "智能选品爆款推荐"},
  ]
    import TitleDes from "./TitleDes";
    export default {
        name: "ProductionService",
      components: {TitleDes},
      data() {
        return {
          psData
        }
      },
    }
</script>

<style lang="scss" scoped>
.production-service{
  height: 600px;
  background: url("../assets/img/bg_production_service.png") no-repeat center center;
  background-size: cover;
  >.inner{
    width: $innerWidth;
    margin: 0 auto;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    >div{
      width: 25%;
      text-align: center;
      margin-bottom: 20px;
      color: #ffffff;
      >p{
        margin-top: 10px;
        font-size:20px;
      }
    }
  }
}
</style>
