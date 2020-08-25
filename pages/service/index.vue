<template>
  <div class="news">
    <NavHead :navHeadData="navHeadData"/>
  </div>
</template>

<script>
  import NavHead from '../../components/NavHead'
  export default {
    name: "New",
    components:{
      NavHead
    },
    data(){
      return{
        navHeadData:{
          text: '热情服务客户，以一流的产品回报客户',
          imgSrc: require('../../assets/img/banner1.png'),
          imgTitleSrc: require('../../assets/img/yltitle.png')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .news{
    width:100%;
    background-color: white;
    overflow: hidden;
    .head{
      .banner{
        width: 100%;
        height: 31.56%;
      }
      .inner{
        position: absolute;
        top:0px;
        left:50%;
        width:75%;
        height: 100%;
        transform: translateX(-50%);
        .explain{
          color:white;
          position: absolute;
          top:40%;
          transform: translateY(-50%);
          left:50%;
          transform: translateX(-50%);
          font-size: 1.5rem;
          text-align: center;
          width: 100%;
          .title{
            width: 27%;
            height: auto;
          }
          >div{
            padding-top: 4%;
          }
        }
      }
    }
  }
</style>
