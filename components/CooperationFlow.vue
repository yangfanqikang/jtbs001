<template>
    <div class="cooperation-flow">
      <TitleDes title="合作流程" des="服务之心·海纳百川"></TitleDes>
      <div class="inner">
        <div v-for="li in flowData">
          <img :src="li.imgUrl" alt="">
          <h3>{{li.des}}</h3>
          <img class="cooperation-flow-arrow" src="../assets/img/icon_flow_arrow_right.png" alt="" v-if="li.showArrow">
        </div>
      </div>
    </div>
</template>

<script>
  const flowData = [
    { imgUrl: require("../assets/img/icon_flow_001.png"), des: "填写申请表", showArrow: true},
    { imgUrl: require("../assets/img/icon_flow_002.png"), des: "详情沟通", showArrow: true},
    { imgUrl: require("../assets/img/icon_flow_003.png"), des: "合同签订", showArrow: true},
    { imgUrl: require("../assets/img/icon_flow_004.png"), des: "合作投放", showArrow: false},
  ]
    import TitleDes from "./TitleDes";
    export default {
        name: "CooperationFlow",
      components: {TitleDes},
      data() {
        return {
          flowData
        }
      },
    }
</script>

<style lang="scss" scoped>
.cooperation-flow{
  height: 800px;
  background: url("../assets/img/bg_flow.png") no-repeat center center;
  background-size: cover;
  >.inner{
    width: $innerWidth;
    margin: 0 auto;
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    >div{
      position: relative;
      text-align: center;
      .cooperation-flow-arrow{
        position: absolute;
        right: -120px;
        top: 0;
      }
      h3{
        margin-top: 60px;
        font-size: 30px;
        font-weight: 500;
      }
    }
  }
}
</style>
