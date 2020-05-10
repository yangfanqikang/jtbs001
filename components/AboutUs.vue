<template>
    <div class="about-us">
      <TitleDes title="关于我们" des="About us"></TitleDes>
      <div class="inner">
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
      <div class="wolf-culture">
        <div class="inner">
          <TitleDes title="狼性文化" des="不做赚钱的公司 只做值钱的公司" color="#ffffff"></TitleDes>
          <p>公司倡导狼性文化。创建最具竞争力的企业是钱源人共同的目标。在实现这一目标进程中，每一个人都要忠诚自己的团队，勇挑重担，发挥潜能，用心做事，在团队中争做“领头雁”；要彼此信任，默契配合，甘于奉献，众志成城，在激烈的市场竞争中搏风击浪，攻坚克难，最终在实现企业发展战略目标的同时实现自己的人生价值。
            </p>
          <p>有才有能敢展现，有品有德敢担当,只要愿意并能够为企业努力工作、积极奉献，就是钱源需要的人才。在选用人才上，钱源首先考虑的是人员知识技能和岗位需要，使两者达到最佳组合，最大限度地发挥每个职工的专长和能力。 </p>
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
  >.wolf-culture{
    height: 800px;
    background-color: #0261a3;
    background-image: url('../assets/img/002about_wolf_culture.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #ffffff;
    p{
      font-size: 20px;
      color: rgb(255, 255, 255);
      text-transform: uppercase;
      line-height: 200%;
      text-indent: 2em;
      text-align:justify;
      text-justify:inter-word;
    }
  }
}
</style>
