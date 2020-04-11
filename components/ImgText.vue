<template>
    <div class="img-text">
      <div>
        <img :src="obj.imgUrl" alt="">
      </div>
      <div class="img-text-title">
        <h3>{{obj.title}}</h3>
        <ul>
          <li v-for="li in obj.list"><img :src="li.imgSrc" alt=""><span>{{li.des}}</span></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "ImgText",
      props: {
          obj :{
            required: true,
            type: Object
          }
      }
    }
</script>

<style lang="scss" scoped>
.img-text{
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: $primaryColor;
  width:542px;
  height:253px;
  border-radius:20px;
  padding-left: 28px;
  box-sizing: border-box;
  >div{
    height: 176px;
  }
  .img-text-title{
    font-size: 20px;
    li{
      list-style: none;
      margin-bottom: 6px;
    }
    h3{
      font-size:30px;
      margin-bottom: 6px;
    }

  }
}
</style>
