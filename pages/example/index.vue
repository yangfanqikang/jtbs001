<template>
    <div class="example">
      <div class="banner"></div>
      <Example />
    </div>
</template>

<script>
    import Example from '../../components/Example.vue';
    export default {
        name: "ExampleIndex",
        components:{Example},
        layout: "HeadFoot"
    }
</script>

<style lang="scss" scoped>
  .banner{
    background-image: url('../../assets/img/pic_banner_001.png');
    @extend .banner;
  }
</style>
