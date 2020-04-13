<template>
    <div>
      <about-us></about-us>
    </div>
</template>

<script>
    import TitleDes from "../../components/TitleDes";
    import AboutUs from "../../components/AboutUs";
    export default {
      name: "index",
      components: {AboutUs, TitleDes},
      layout: "HeadFoot"
    }
</script>

<style scoped>

</style>
