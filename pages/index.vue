<template>
  <div class="container">
    <div class="bussiness">
      <div class="inner">
        <Business></Business>
      </div>
    </div>

  </div>
</template>

<script>
import Business from "../components/business";
export default {
  layout: "HeadFoot",
  components: {
    Business
  }
}
</script>

<style lang="scss" scoped>
  .inner{
    margin: 0 auto;
    width: $innerWidth;
  }
#__layout{
  background-color: #F0F0F0;
}
</style>
