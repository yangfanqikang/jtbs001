<template>
    <div class="business">
      <TitleDes title="业务模块" des="服务之心·海纳百川"></TitleDes>
      <div class="business-list">
        <ImgText :obj="obj" v-for="(obj, index) in objList" :key="new Date().getTime() + index"></ImgText>
      </div>
    </div>
</template>

<script>
  const iconData = {
    info: [
      {imgSrc: require("../assets/img/icon_info_001.png"), des: '广告信息精准触达'},
      {imgSrc: require("../assets/img/icon_info_002.png"), des: '精准引流 高效获客'},
      {imgSrc: require("../assets/img/icon_info_003.png"), des: '覆盖范围广 形式多样化'},
      {imgSrc: require("../assets/img/icon_info_004.png"), des: '按营销效果付费 性价比高'}],
    live: [
      {imgSrc: require("../assets/img/icon_live_001.png"), des: '门店转型升级'},
      {imgSrc: require("../assets/img/icon_live_002.png"), des: '线上营销裂变引流'},
      {imgSrc: require("../assets/img/icon_live_003.png"), des: '微商电商导购直播'},
      {imgSrc: require("../assets/img/icon_live_004.png"), des: '新零售直播导购营销工具'},],
    business: [
      {imgSrc: require("../assets/img/icon_business_001.png"), des: '引流量造爆款'},
      {imgSrc: require("../assets/img/icon_business_002.png"), des: '选品推荐'},
      {imgSrc: require("../assets/img/icon_business_003.png"), des: '数据分析'},
      {imgSrc: require("../assets/img/icon_business_004.png"), des: '账户优化'},],
    market: [
      {imgSrc: require("../assets/img/icon_market_001.png"), des: '高效 精准 专业'},
      {imgSrc: require("../assets/img/icon_market_002.png"), des: '网站整合营销'},
      {imgSrc: require("../assets/img/icon_market_003.png"), des: '线上线下整合营销'},
      {imgSrc: require("../assets/img/icon_market_004.png"), des: '一站式网络营销服务'}],
  }
  import TitleDes from "./TitleDes";
  import ImgText from "./ImgText";
    export default {
      name: "business",
      components: {
        TitleDes,
        ImgText
      },
      data() {
        return {
          objList: [
            {
            imgUrl: require("../assets/img/pic_info.png"),
            title: "信息流效果广告",
            list: iconData.info
            },
            {
            imgUrl: require("../assets/img/pic_live.png"),
            title: "直播带货",
            list: iconData.live
            },
            {
            imgUrl: require("../assets/img/pic_online_business.png"),
            title: "直营电商综合运营",
            list: iconData.business
            },
            {
            imgUrl: require("../assets/img/pic_market.png"),
            title: "整合营销",
            list: iconData.market
            },
          ]
        }
      },
    }
</script>

<style lang="scss" scoped>
.business{
  background-image: url("../assets/img/bg_business.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 42px;
  .business-list{
    margin: 0 auto;
    width: $innerWidth;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    >div{
      margin-bottom: 20px;
    }
  }
}
</style>
