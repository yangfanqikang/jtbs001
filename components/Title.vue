<template>
  <div>
    <h4 class="title" :style="{color:textColor,paddingTop:paddingTop}">{{title}}</h4>
    <div class="middle-line" v-if="middleLine" :style="{backgroundColor: middleLineColor}"></div>
    <div :class="{'sub-title': true,'sub-title-line': subTitleLine}" :style="{color:subTextColor}">
      <span class="line left" v-if="rightLeftLine"></span>
      <span class="text">{{subTitle}}</span>
      <span class="line right" v-if="rightLeftLine"></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Title",
        props:{
          title:{
            type:String,
            default: null
          },
          subTitle:{
            type:String,
            default: null
          },
          textColor:{
            type:String,
            default: null
          },
          subTextColor:{
            type:String,
            default: null
          },
          paddingTop:{
            type:String,
            default: null
          },
          middleLine:{
            type: Boolean,
            default:false
          },
          middleLineColor:{
            type:String,
            default: null
          },
          rightLeftLine:{
            type: Boolean,
            default:false
          },
          subTitleLine:{
            type: Boolean,
            default:false
          }
        }
    }
</script>

<style scoped lang="scss">
  .title{
    text-align: center;
    font-size:2.25rem;
    color: #D95747;
    font-weight: normal;
    padding-top: 100px;
    padding-bottom: 15px;
  }
  .middle-line{
    width:66px;
    height:4px;
    background:rgba(217,87,71,1);
    border-radius:2px;
    margin: 0 auto;
    margin-bottom: 6px;
  }
  .sub-title{
    color: #504D4D;
    font-size: 1.125rem;
    padding-bottom: 20px;
    width: 70%;
    padding: 0px 50px;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    .line{
      display: inline-block;
      width: 100px;
      height: 1px;
      background-color: #D95747;
      vertical-align: middle;
    }
    .right{
      margin-left: 40px;
    }
    .left{
      margin-right: 40px;
    }
  }
  .sub-title-line{
    border-bottom: 1px solid #DDDDDD;
    .text{
      padding-bottom: 3px;
      border-bottom: 2px solid #D95747;
      border-radius:2px;
    }
  }

  @media (min-width: 413px) and (max-width: 767px) {
    .sub-title{
      width:100%
    }
  }

  @media (max-width: 412px) {
    .title{
      padding-top: 40px;
    }
    .sub-title{
      width:100%;
      .line{
        display: none;
      }
    }
  }
</style>
