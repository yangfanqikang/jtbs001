<template>
    <div class="success-example">
      <TitleDes title="成功案例" des="服务之心·海纳百川"></TitleDes>
      <img src="../assets/img/pic_example.png" alt="">
    </div>
</template>

<script>
    import TitleDes from "./TitleDes";
    export default {
        name: "SuccessExample",
      components: {TitleDes}
    }
</script>

<style lang="scss" scoped>
.success-example{
  height: 800px;
  background: url("../assets/img/bg_example.png") no-repeat center center;
  background-size: cover;
  text-align: center;
}
</style>
