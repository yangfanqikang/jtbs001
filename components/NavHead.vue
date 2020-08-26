<template>
  <div class="nav">
    <div class="inner">
      <Nav :blackRed="navHeadData.blackRed"/>
    </div>
    <div class="head">
      <img class="banner" :src="navHeadData.imgSrc" alt="">
      <div class="explain">
        <img class="title" :src="navHeadData.imgTitleSrc" alt="">
        <div>{{navHeadData.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from './Nav'
  export default {
    name: "NavHead",
    components:{
      Nav
    },
    props:{
      navHeadData:{
        type:Object,
        default: null
      }
    },
    data(){
      return{
        blackRed:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav{
    width:100%;
    background-color: white;
    .head{
      height: 20.72%;
      position: relative;
      .banner{
        width: 100%;
        height: 20.72%;
      }
      .explain{
        color:white;
        position: absolute;
        top:0;
        bottom: 0;
        left:50%;
        transform: translateX(-50%);
        font-size: 1.5rem;
        text-align: center;
        width: 100%;
        .title{
          width: 15%;
          height: auto;
          padding-top: 5%;
        }
        >div{
          padding-top: 4%;
        }
      }
    }
  }
</style>

