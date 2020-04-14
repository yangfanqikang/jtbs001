<template>
  <div class="team">
    <div class="banner"></div>
    <Team />
  </div>
</template>

<script>
    import Team from '../../components/Team.vue';
    export default {
        name: "TeamIndex",
        components:{Team},
        layout: "HeadFoot"
    }
</script>

<style lang="scss" scoped>
  .banner{
    background-image: url('../../assets/img/pic_banner_team.png');
    @extend .banner;
  }
</style>
