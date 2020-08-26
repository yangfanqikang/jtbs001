<template>
  <div class="colors-service">
    <div class="inner">
      <Title :title="title" :subTitle="subTitle" :paddingTop="paddingTop"/>
      <div class="content">
        <div class="item" v-for="item in colorsData" :key="item.id">
          <div class="item-block" :style="{backgroundColor:item.color}"></div>
          <span>{{item.text}}</span>
        </div>
      </div>
      <a href="../assets/file/彩色沥青颜料色卡.jpg"><span></span>彩色沥青颜料色卡下载链接</a>
    </div>
  </div>
</template>

<script>
  import Title from './Title'
    export default {
        name: "ColorsService",
      components:{
        Title
      },
      data() {
          return{
            title: '彩色沥青颜料服务',
            subTitle: '系列色卡',
            paddingTop:'60px',
            colorsData:[
              {
                id:1,
                color: "#A30506",
                text: "红色130"
              },
              {
                id:2,
                color: "#BF0707",
                text: "红色3130"
              },
              {
                id:3,
                color: "#FB0506",
                text: "红色101"
              },
              {
                id:4,
                color: "#3681A6",
                text: "孔雀蓝"
              },
              {
                id:5,
                color: "#3576D7",
                text: "天蓝色"
              },
              {
                id:6,
                color: "#A1CE1A",
                text: "草绿色"
              },
              {
                id:7,
                color: "#A9A9A9",
                text: "深灰色"
              },
              {
                id:8,
                color: "#D3D3D3",
                text: "浅灰色"
              },
              {
                id:9,
                color: "#F00056",
                text: "品红"
              },
              {
                id:10,
                color: "#FCF81A",
                text: "亮黄色"
              },
              {
                id:11,
                color: "#E69214",
                text: "土黄色"
              },
              {
                id:12,
                color: "#A809F9",
                text: "紫色"
              }
            ]
          }
      }
    }
</script>

<style scoped lang="scss">
  .colors-service{
    text-align: center;
    .content{
      flex-flow: row wrap;
      justify-content: flex-start;
      .item{
        padding: 20px;
        text-align: center;
        width: 16.6%;
        .item-block{
          width: 120px;
          height: 120px;
          border-radius:5px;
        }
        span{
          color: #333;
          line-height: 50px;
          height: 50px;
        }
      }
    }
    a{
      display: inline-block;
      text-decoration: none;
      color: #4C9AF1;
      font-size: 0.75rem;
      cursor: pointer;
      height: 70px;
      line-height: 70px;
      span{
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: #4C9AF1;
        border-radius:50%;
        margin-right: 15px;
        vertical-align: text-bottom;
      }
    }
  }
</style>
