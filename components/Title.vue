<template>
  <div>
    <h4 class="title" :style="{color:textColor,paddingTop:paddingTop}">{{title}}</h4>
    <div class="sub-title" :style="{color:textColor}">{{subTitle}}</div>
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
          paddingTop:{
            type:String,
            default: null
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
  .sub-title{
    color: #504D4D;
    font-size: 1.125rem;
    padding-bottom: 20px;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
  }
</style>
