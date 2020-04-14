<template>
  <div class="contact">
    <div class="banner"></div>
    <ContactUs />
  </div>
</template>

<script>
    import ContactUs from '../../components/ContactUs.vue';
    export default {
        name: "Contact",
        components:{ContactUs},
        layout: "HeadFoot"
    }
</script>

<style lang="scss" scoped>
  .banner{
    background-image: url('../../assets/img/pic_contactMe_banner.png');
    @extend .banner;
  }
</style>
