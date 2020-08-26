<template>
    <div class="iron-service">
      <div class="inner">
        <Title :title="title" :subTitle="subTitle" :paddingTop="paddingTop"/>
        <div class="content tabs">
          <div class="item">
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

<style scoped>

</style>
