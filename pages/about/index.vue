<template>
    <div>
      <div class="banner"></div>
      <about-us></about-us>
      <wolf-culture></wolf-culture>
<!--      <dev-history></dev-history>-->
      <AboutHonor></AboutHonor>
    </div>
</template>

<script>
    import TitleDes from "../../components/TitleDes";
    import AboutUs from "../../components/AboutUs";
    import DevHistory from "../../components/DevHistory";
    import AboutHonor from "../../components/AboutHonor";
    import WolfCulture from "../../components/WolfCulture";
    export default {
        name: "index",
      components: {WolfCulture, AboutHonor, DevHistory, AboutUs, TitleDes},
      layout: "HeadFoot"
    }
</script>

<style lang="scss" scoped>
.banner{
  background-image: url('../../assets/img/pic_banner_about.png');
  @extend .banner;
}
</style>
