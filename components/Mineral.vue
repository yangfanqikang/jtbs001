<template>
  <div :class="{min:true,bgImg:MinData.bgImgSrc}" :style="{backgroundColor:MinData.bgColor}">
    <div class="inner">
      <Title :title="MinData.title" :subTitle="MinData.subTitle" :textColor="MinData.titleColor" :subTextColor="MinData.subTitleColor" :middleLine="MinData.middleLine" :middleLineColor="MinData.middleLineColor"/>
      <p v-if="MinData.text">{{MinData.text}}</p>
      <div class="content">
        <div class="item" v-for="item in MinData.items" :key="item.title" :style="{width: itemWidth}">
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
    data(){
      return{
        middleLine:true
      }
    },
    computed: {
      itemWidth: function() {
        return (1 / this.MinData.items.length) * 100 +'%'
      }
    }
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
      .content{
        flex-flow: row wrap;
        .item{
          text-align: center;
          color: #666;
          font-size: 1.5rem;
          padding: 30px;
          box-sizing: border-box;
          img{
            width: 90%;
            height: auto;
          }
          >div{
            margin-top: 56px;
          }
          .title{
            margin-top: 20px;
          }
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
  @media (min-width: 413px) and (max-width: 767px) {
    .min{
      .inner {
        p {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 412px) {
    .min{
      padding-bottom: 40px;
      .inner{
        p{
          width:100%;
        }
        .content{
          .item{
            padding: 10px;
            font-size: 1rem;
            img{
              width: 100%;
              height: auto;
            }
            >div{
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
</style>
