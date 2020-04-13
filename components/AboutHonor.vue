<template>
    <div class="about-honor">
      <TitleDes title="成就及荣誉" des="Achievements and honors"></TitleDes>
      <div>
        <img src="../assets/img/about_pic_honor.png" alt="">
      </div>
      <div class="about-honor-btn">2019年度荣获优秀鲁班精神奖</div>
    </div>
</template>

<script>
    import TitleDes from "./TitleDes";
    export default {
        name: "AboutHonor",
      components: {TitleDes}
    }
</script>

<style lang="scss" scoped>
.about-honor{
  padding-bottom: 58px;
  >div{
    text-align: center;
  }
  >.about-honor-btn{
    width:462px;
    margin: 0 auto;
    height:60px;
    line-height: 60px;
    background:rgba(255,83,96,1);
    border-radius:15px;
    font-size:30px;
    color: #ffffff;
  }
}
</style>
