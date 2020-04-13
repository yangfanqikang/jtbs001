<template>
    <div class="business">
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

<style scoped>

</style>
