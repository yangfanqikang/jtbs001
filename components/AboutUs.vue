<template>
    <div class="about-us">
      <TitleDes title="关于我们" des="About us"></TitleDes>
      <div class="inner mb">
        <div class="about-us-img">
          <img src="../assets/img/about_pic_des_001.png" alt="">
          <img src="../assets/img/about_pic_des_002.png" alt="">
          <img src="../assets/img/about_pic_des_003.png" alt="">
        </div>
        <div class="about-us-text">
          <p>
            钱源传媒成立于2018年3月，目前公司员工100+人，下设运营部、商务部、创意部、媒介部、人力资源部、财务部、视频部，是一家以技术为驱动，以专业团队为支撑，以效果为保障，为广告主提供优质高效的绿色营销企业。公司拥有一支专业的数字化整合营销服务团队，拥有移动互联网领域最优质的广告平台资源（今日头条、快手、抖音等移动互联网广告平台资源），已成为国内知名的广告服务商。组建了一支经验丰富的优化团队，24小时为客户的效果类广告投放进行监控、优化等精准化服务，为各类客户解决多种推广诉求。
          </p>
          <p>
            公司专注于电商运营服务，在门户网站大数据整合，定向营销，精准流量订单转化，品牌传播方面有着独到的操作方案和思路！通过客户的需求定位以及用户网络行为数据的深入研究与分析，采用系统化的策划与全面的运营体系，精准覆盖到目标用户。通过对各产品的整合、优化来实现互联网媒体流量最大价值，进而提升客户的投资回报率。
          </p>
        </div>

      </div>
    </div>
</template>

<script>
    import TitleDes from "./TitleDes";
    export default {
        name: "AboutUs",
      components: {TitleDes}
    }
</script>

<style lang="scss" scoped>
.about-us{
  padding-bottom: 61px;
  >.inner{
    width:1025px;
    height:635px;
    margin: 0 auto;
    box-shadow: 0 0 0 4px #FFFFFF;
    border: 8px solid #F0F0F0;
    background-color: #ffffff;
    display: flex;
    padding: 40px;
    >.about-us-img{
      margin-right: 20px;
      display: flex;
      justify-content: space-between;
      width: 391px;
      flex-flow: row wrap;
      >img:first-of-type{
        margin-bottom: 10px;
      }
    }
    >.about-us-text{
      /*width: 498px;*/
      flex:1;
      p{
        text-indent: 2em;
        font-size:20px;
        line-height: 1.5em;
        text-align:justify;
      }
      p:first-of-type{
        margin-bottom: 20px;
      }
    }
  }
}
</style>
