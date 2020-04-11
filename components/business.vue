<template>
    <div class="business">
      <TitleDes title="业务模块" des="服务之心·海纳百川"></TitleDes>
      <div class="business-list">
        <ImgText :obj="obj" v-for="(obj, index) in objList" :key="new Date().getTime() + index"></ImgText>
      </div>
    </div>
</template>

<script>
  import TitleDes from "./TitleDes";
  import ImgText from "./ImgText";
    export default {
      name: "business",
      components: {
        TitleDes,
        ImgText
      },
      data() {
        return {
          objList: [
            {
            imgUrl: require("../assets/img/pic_info.png"),
            title: "信息流效果广告",
            list: [
                {imgSrc: '', des: '广告信息精准触达'},
                {imgSrc: '', des: '精准引流 高效获客'},
                {imgSrc: '', des: '广告信息精准触达'},
                {imgSrc: '', des: '精准引流 高效获客'},
              ]
            },
            {
            imgUrl: require("../assets/img/pic_info.png"),
            title: "信息流效果广告",
            list: [
                {imgSrc: '', des: '广告信息精准触达'},
                {imgSrc: '', des: '精准引流 高效获客'},
              ]
            },
            {
            imgUrl: require("../assets/img/pic_info.png"),
            title: "信息流效果广告",
            list: [
                {imgSrc: '', des: '广告信息精准触达'},
                {imgSrc: '', des: '精准引流 高效获客'},
              ]
            },
            {
            imgUrl: require("../assets/img/pic_info.png"),
            title: "信息流效果广告",
            list: [
                {imgSrc: '', des: '广告信息精准触达'},
                {imgSrc: '', des: '精准引流 高效获客'},
              ]
            },
          ]
        }
      },
    }
</script>

<style lang="scss" scoped>
.business{
  .business-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    >div{
      margin-bottom: 20px;
    }
  }
}
</style>
