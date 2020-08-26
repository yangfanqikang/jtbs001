<template>
    <div class="cover-service">
      <div class="inner">
        <Title :title="title" :subTitle="subTitle" :paddingTop="paddingTop" :subTitleLine="subTitleLine"/>
        <div class="no-data">
          <img src="../assets/img/service/pic_404.png" alt="">
          <div>暂无，正在补充中...</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Title from './Title'
    export default {
        name: "ColorCoverService",
      components:{
        Title
      },
      data() {
        return{
          title: '彩色有机覆盖物服务',
          subTitle: '施工说明',
          paddingTop:'60px',
          subTitleLine:true
        }
      }
    }
</script>

<style scoped lang="scss">
  .cover-service{
    background-color: white;
    .no-data{
      text-align: center;
      img{
        padding: 30px;
        width: 30%;
        height: auto;
      }
      >div{
        font-size: 1.5rem;
        color: #C14437;
        height: 60px;
        line-height: 60px;
      }
    }
  }
</style>
