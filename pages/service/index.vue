<template>
  <div class="service">
    <NavHead :navHeadData="navHeadData"/>
    <IronService />
    <ColorsService />
    <Explain />
    <ColorCoverService />
    <Footer :bgColor="bgFooterColor" :textColor="footerColor"/>
  </div>
</template>

<script>
  import NavHead from '../../components/NavHead'
  import IronService from '../../components/IronService'
  import ColorsService from '../../components/ColorsService'
  import Explain from '../../components/Explain'
  import ColorCoverService from '../../components/ColorCoverService'
  import Footer from '../../components/Footer'
  export default {
    name: "Service",
    components:{
      NavHead,
      IronService,
      ColorsService,
      Explain,
      ColorCoverService,
      Footer
    },
    data(){
      return{
        bgFooterColor:"#C14437",
        footerColor:"white",
        navHeadData:{
          text: '热情服务客户，以一流的产品回报客户',
          imgSrc: require('../../assets/img/service/service-banner.png'),
          imgTitleSrc: require('../../assets/img/yltitle.png')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  footer{
    background-color: red;
  }
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
