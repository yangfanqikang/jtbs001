<template>
  <div :class="{min:true,bgImg:MinData.bgImgSrc}" :style="{backgroundColor:MinData.bgColor}">
    <div class="inner">
      <Title :title="MinData.title" :subTitle="MinData.subTitle" :textColor="MinData.titleColor"/>
      <p v-if="MinData.text">{{MinData.text}}</p>
      <div class="content">
        <div class="item" v-for="item in MinData.items" :key="item.title">
          <img :src="item.imgSrc" alt="">
          <div :class="{title:item.text}">{{item.title}}</div>
          <p v-if="item.text">{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from "./Title";
  export default {
    name: "Mineral",
    props:{
      MinData:{
        type: Object,
        default: null
      }
    },
    components:{
      Title
    },
  }
</script>

<style scoped lang="scss">
  .min{
    text-align: center;
    background-color: white;
    padding-bottom: 120px;
    .inner{
      z-index: 100;
      p{
        width:60%;
        line-height: 30px;
        color: #666;
        font-size: 0.75rem;
        margin: 30px auto;
      }
      .item{
        text-align: center;
        color: #666;
        font-size: 1.5rem;
        padding: 30px;
        box-sizing: border-box;
        >div{
          margin-top: 56px;
        }
        .title{
          margin-top: 20px;
        }
      }
    }
  }
  .bgImg{
    background-image: url("../assets/img/product/production_bg.png");
    background-size: cover;
    .inner{
      p{
        color: #fff;
      }
      .item{
        color: #fff;
      }
    }
  }
</style>
