<template>
  <div class="container">
    <div class="banner">
      <div class="inner">
        <h1>还在为获客发愁？<br/>还在因业绩焦虑？</h1>
        <div class="title-divide"></div>
        <h2>钱源二类电商投放2.0<br/>让产品销售省心无忧？</h2>
        <div @click="$router.push('/about')" class="btn">立即了解</div>
      </div>
    </div>
    <Business></Business>
    <ProductionService></ProductionService>
    <SuccessExample></SuccessExample>
    <WhyQY></WhyQY>
    <CooperationFlow></CooperationFlow>
  </div>
</template>

<script>
import Business from "../components/business";
import ProductionService from "../components/ProductionService";
import SuccessExample from "../components/SuccessExample";
import WhyQY from "../components/WhyQY";
import CooperationFlow from "../components/CooperationFlow";
export default {
  layout: "HeadFoot",
  components: {
    CooperationFlow,
    WhyQY,
    SuccessExample,
    ProductionService,
    Business
  }
}
</script>

<style lang="scss" scoped>
  .container{
    .banner{
      height: 700px;
      background: url('../assets/img/pic_banner.png') no-repeat center center;
      background-size: cover;
      box-sizing: border-box;
      padding-top: 139px;
      h1{
        font-size: 50px;
        color: #ffffff;
        padding-bottom: 33px;
        line-height: 1.5;
      }
      .title-divide{
        height: 4px;
        background-color: #fff;
        width: 100px;
      }
      h2{
        font-size: 40px;
        color: #ffffff;
        margin-top: 33px;
        font-weight: normal;
        line-height: 1.5;
      }
      .btn{
        width:300px;
        height:80px;
        background-color: $primaryDefault;
        border-radius:40px;
        text-align: center;
        line-height: 80px;
        text-decoration: none;
        font-size: 40px;
        margin-top: 40px;
        color: #ffffff;
      }
      .btn:hover{
        background-color: $primaryColor;
        cursor: pointer;
      }
    }
  }

#__layout{
  background-color: #F0F0F0;
}
</style>
