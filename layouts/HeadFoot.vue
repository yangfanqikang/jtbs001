<template>
    <div class="head-foot">
      <Header/>
      <nuxt/>
      <Footer/>
    </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
    export default {
      name: "HeadFoot",
      components: {
          Header,
        Footer
      },
    }
</script>

<style lang="scss">
#__nuxt{
  background-color: #F0F0F0;
}
</style>
