<template>
    <div class="head-foot">
      <nuxt/>
      <Footer/>
    </div>
</template>

<script>
  import Footer from "../components/Footer";
    export default {
      name: "HeadFoot",
      components: {
        Footer
      },
    }
</script>

<style lang="scss">
#__nuxt{
  background-color: #F0F0F0;
}
</style>
