<template>
    <div class="cooperation-flow">
      <TitleDes title="合作流程" des="服务之心·海纳百川"></TitleDes>
      <div class="inner">
        <div class="cooperation-flow-flowData">
          <div v-for="li in flowData">
            <img :src="li.imgUrl" alt="">
            <h3>{{li.des}}</h3>
            <img class="cooperation-flow-arrow" src="../assets/img/icon_flow_arrow_right.png" alt="" v-if="li.showArrow">
          </div>
        </div>
        <div class="divide"></div>
        <p>留下您的联系方式，我们将第一时间与您联系！</p>
        <div class="cooperation-flow-contact">
          <input type="text" v-model="name" placeholder="名字">
          <input type="text" v-model="companyName" placeholder="公司">
          <input type="text" v-model="phone" placeholder="手机">
        </div>
        <h3>立即提交</h3>
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
          flowData,
          name: '',
          companyName: '',
          phone: ''
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
    >.cooperation-flow-flowData{
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
    >.divide{
      border:2px dashed rgba(0,0,0,1);
      margin: 40px 0;
    }
    >p{
      color: #505050;
      font-size:30px;
      margin-bottom: 50px;
    }
    >.cooperation-flow-contact{
      display: flex;
      justify-content: space-between;
      >input{
        border-radius:5px;
        width:352px;
        height:52px;
        border: none;
        padding-left: 10px;
      }
    }
    >h3{
      width:240px;
      height:50px;
      line-height: 50px;
      margin: 47px auto;
      background:rgba(255,83,96,1);
      border-radius:15px;
      text-align: center;
      color: #ffffff;
      font-size: 30px;
      font-weight: normal;
    }
  }
}
</style>
