<template>
    <div class="business">
      <div class="banner"></div>
      <business></business>
      <production-service></production-service>
      <cooperation-flow></cooperation-flow>
    </div>
</template>

<script>
    import Business from "../../components/business";
    import ProductionService from "../../components/ProductionService";
    import CooperationFlow from "../../components/CooperationFlow";
    export default {
        name: "index",
      components: {CooperationFlow, ProductionService, Business},
      layout: 'HeadFoot'
    }
</script>

<style lang="scss" scoped>
  .banner{
    background-image: url('../../assets/img/pic_business03_banner.png');
  @extend .banner;
  }
</style>
