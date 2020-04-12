<template>
  <div class="container">
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
#__layout{
  background-color: #F0F0F0;
}
</style>
