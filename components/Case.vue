<template>
  <div class="case">
    <Title :title="title" :subTitle="subTitle"/>
    <div class="inner">
      <div class="content">
        <div class="item">
<!--          <img src="../assets/img/pic-example-1.png" alt="">-->
          <span>湖南长沙</span>
        </div>
        <div class="item">
<!--          <img src="../assets/img/pic-example-2.png" alt="">-->
          <span>湖南长沙</span>
        </div>
        <div class="item">
<!--          <img src="../assets/img/pic-example-3.png" alt="">-->
          <span>湖南益阳</span>
        </div>
        <div class="item">
<!--          <img src="../assets/img/pic-example-4.png" alt="">-->
          <span>湖南益阳</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from "./Title";
    export default {
        name: "Case",
      data(){
        return{
          title: "项目案例",
          subTitle: "我们秉承环保健康的理念，为丰富城市的色彩而努力。彩色沥青具有减少噪声污染、诱导车流、色彩多样、美化环境等优点。有研究表明，具有彩色步道的城市，人们外出锻炼的意愿更为强烈。"
        }
      },
      components:{
        Title
      }
    }
</script>

<style scoped lang="scss">
  .case{
    background-color: #D95747;
    .title{
      color: white;
    }
    .content{
      width: 100%;
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      .item{
        float: left;
        width: 50%;
        position: relative;
        padding: 0px 20px;
        box-sizing: border-box;
        height: 100px;
        img{
          width: 100%;
        }
        span{
          position: absolute;
          bottom: 4.4px;
          left:20px;
          right:20px;
          display: inline-block;
          height: 56px;
          line-height: 56px;
          color: #D95747;
          background:rgba(255,255,255,0.8);
          text-align: center;
        }
      }
    }
  }
</style>
