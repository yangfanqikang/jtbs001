<template>
  <div>
    <h4 class="title">{{title}}</h4>
    <div class="sub-title">{{subTitle}}</div>
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
    padding-top: 129px;
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
