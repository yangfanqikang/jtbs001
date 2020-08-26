<template>
    <footer :style="{backgroundColor:bgColor, color:textColor}">
      <div>Copyright © 2020 长沙市优丽环保科技有限公司</div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
      props:{
        bgColor:{
          type:String,
          default:null
        },
        textColor:{
          type:String,
          default:null
        }
      }
    }
</script>

<style lang="scss" scoped>
  footer{
    background-color: white;
    text-align: center;
    height: 100px;
    line-height: 100px;
    font-size: 16px;
    color: #333333;
  }
</style>
