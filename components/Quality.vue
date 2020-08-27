<template>
    <div class="quality">
      <div class="inner">
        <div class="content">
          <div class="item">
            <img src="../assets/img/about/pinzhi_001.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/about/pinzhi_002.png" alt="">
          </div>
          <div class="item">
            <Title :title="title" :subTitle="subTitle" :paddingTop="paddingTopNum"/>
            <p>先进的生产设备，完善的检测手段，严格的控制程序，是我们的品质保障。</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Title from './Title'
    export default {
        name: "Quality",
      components: {
        Title,
      },
      data(){
        return{
          title: '品质保障',
          subTitle: 'QUALITY ASSURANCE',
          paddingTopNum: "0px"
        }
      }
    }
</script>

<style scoped lang="scss">
  .quality{
    .item{
      padding: 90px 40px;
      box-sizing: border-box;
      img{
        width: 100%;
        height: auto;
      }
      p{
        color: #333;
        font-size: 0.75rem;
        line-height: 30px;
        text-align: center;
        margin-top: -30px;
      }
    }
  }
  @media (min-width: 413px) and (max-width: 767px) {
    .quality {
      .item {
        padding: 20px 20px;
      }
    }
  }
  @media (max-width: 412px) {
    .quality {
      .content{
        flex-flow: row wrap;
      }
      .item {
        width: 100%;
        padding: 20px 20px;
      }
    }
  }
</style>
