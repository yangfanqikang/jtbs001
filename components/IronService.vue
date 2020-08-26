<template>
    <div class="iron-service">
      <div class="inner">
        <Title :title="title" :subTitle="subTitle" :paddingTop="paddingTop" :rightLeftLine="rightLeftLine"/>
        <div class="content tabs">
          <div class="item active">
            <span>系列色卡</span>
          </div>
          <div class="item">
            <span>氧化铁TDS</span>
          </div>
          <div class="item">
            <span>氧化铁MSDS</span>
          </div>
        </div>
      </div>
      <IronBlock :ironData="redData"/>
      <IronBlock :ironData="yellowData"/>
      <IronBlock :ironData="blackData"/>
      <TwoIronBlock :twoData="twoColorData1"/>
      <TwoIronBlock :twoData="twoColorData2"/>
      <a href="../assets/file/优丽铁系色卡.jpg"><span></span>优丽铁系色卡下载链接</a>
    </div>
</template>

<script>
  import Title from './Title'
  import IronBlock from './IronBlock'
  import TwoIronBlock from './TwoIronBlock'
    export default {
        name: "IronService",
      components:{
        Title,
        IronBlock,
        TwoIronBlock
      },
      data() {
          return {
            title: '氧化铁系列颜料服务',
            subTitle: 'IRON OXIDE SERVICE',
            paddingTop:'60px',
            rightLeftLine: true,
            redData:{
              title:"IRON OXIDE RED",
              titleColor:"#C14437",
              ironsArr:[
                {
                  id:1,
                  title:'Full Shade',
                  color:"#7A2520",
                  text: "101"
                },
                {
                  id:2,
                  title:'TiO2Reduction(1:4)',
                  color:"#9D4539",
                  text: "101"
                },
                {
                  id:3,
                  title:'Full Shade',
                  color:"#7B2621",
                  text: "110"
                },
                {
                  id:4,
                  title:'TiO2Reduction(1:4)',
                  color:"#9F4137",
                  text: "110"
                },
                {
                  id:5,
                  color:"#78231E",
                  text: "120"
                },
                {
                  id:6,
                  color:"#9B4038",
                  text: "120"
                },
                {
                  id:7,
                  color:"#75221C",
                  text: "130"
                },
                {
                  id:8,
                  color:"#91433F",
                  text: "130"
                },
                {
                  id:9,
                  color:"#561A1C",
                  text: "190"
                },
                {
                  id:10,
                  color:"#894E54",
                  text: "190"
                },
                {
                  id:11,
                  color:"#501E1F",
                  text: "180"
                },
                {
                  id:12,
                  color:"#8E6667",
                  text: "180"
                },
              ]
            },
            yellowData: {
              title: "IRON OXIDE YEllOW",
              titleColor: "#CD9B2E",
              ironsArr: [
                {
                  id: 1,
                  color: "#975B27",
                  text: "313"
                },
                {
                  id: 2,
                  color: "#9D702D",
                  text: "313"
                },
                {
                  id: 3,
                  color: "#935C24",
                  text: "920"
                },
                {
                  id: 4,
                  color: "#9F7B2F",
                  text: "920"
                },
              ]
            },
            blackData: {
              title: "IRON OXIDE BLACK",
              titleColor: "#333",
              ironsArr: [
                {
                  id: 1,
                  color: "#151515",
                  text: "330"
                },
                {
                  id: 2,
                  color: "#585954",
                  text: "330"
                },
                {
                  id: 3,
                  color: "#131313",
                  text: "758"
                },
                {
                  id: 4,
                  color: "#5B5C5E",
                  text: "758"
                },
              ]
            },
            twoColorData1:[
              {
                title: "IRON OXIDE ORANGE",
                titleColor: "#97563E",
                ironsArr: [
                  {
                    id: 1,
                    color: "#7B2E20",
                    text: "960"
                  },
                  {
                    id: 2,
                    color: "#985640",
                    text: "960"
                  },
                ]
              },
              {
                title: "IRON OXIDE BROWN",
                titleColor: "#44221A",
                ironsArr: [
                  {
                    id: 1,
                    color: "#46241B",
                    text: "686"
                  },
                  {
                    id: 2,
                    color: "#866057",
                    text: "686"
                  },
                ]
              }
            ],
            twoColorData2:[
              {
                title: "IRON OXIDE GREEN",
                titleColor: "#44685A",
                ironsArr: [
                  {
                    id: 1,
                    color: "#1C261B",
                    text: "5605"
                  },
                  {
                    id: 2,
                    color: "#416655",
                    text: "5605"
                  },
                ]
              },
              {
                title: "IRON OXIDE BLUE",
                titleColor: "#287699",
                ironsArr: [
                  {
                    id: 1,
                    color: "#082743",
                    text: "887"
                  },
                  {
                    id: 2,
                    color: "#28769C",
                    text: "887"
                  },
                ]
              }
            ]
          }
      }
    }
</script>

<style scoped lang="scss">
  .iron-service {
    background-color: white;
    text-align: center;
    .tabs{
      width: 70%;
      padding: 0px 50px;
      box-sizing: border-box;
      margin: 15px auto;
      margin-bottom: 35px;
      border-bottom: 1px solid #DDDDDD;
      padding-bottom: 10px;
      .active{
        span{
          padding-bottom: 9px;
          border-bottom: 2px solid #D95747;
          border-radius:2px;
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
