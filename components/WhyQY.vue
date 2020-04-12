<template>
    <div class="why-qy">
      <TitleDes title="为什么选择钱源？" des="服务之心·海纳百川" color="#ffffff"></TitleDes>
      <div class="inner">
        <div v-for="li in whyData">
          <img :src="li.imgUrl" alt="">
          <h2>{{li.title}}</h2>
          <div class="divide"></div>
          <p>{{li.des}}</p>
        </div>
      </div>
    </div>
</template>

<script>
  const whyData = [
    { imgUrl: require("../assets/img/icon_why_001.png"),title: '领路人', des: "让客户了解二类电商市场 团队来自头条抖音 教客户玩转信息流"},
    { imgUrl: require("../assets/img/icon_why_002.png"),title: '专业性', des: "了解头条抖音及媒体的流量玩法 帮助客户在抖音中站稳脚跟"},
    { imgUrl: require("../assets/img/icon_why_003.png"),title: '投产比', des: "团队成员近百人 丰富的信息流投放经验和媒体 的更新资源ro远高于大部分客户"},
  ]
    import TitleDes from "./TitleDes";
    export default {
        name: "WhyQY",
      components: {TitleDes},
      data() {
        return {
          whyData
        }
      },
    }
</script>

<style lang="scss" scoped>
.why-qy{
  height: 600px;
  background: url("../assets/img/bg_why.png") no-repeat center center;
  background-size: cover;
  >.inner{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    >div{
      width: 25%;
      text-align: center;
      color: #ffffff;
      h2{
        font-size: 30px;
      }
      .divide{
        height: 1px;
        background-color: #fff;
        margin: 18px 0;
      }
      p{
        font-size:20px;
        line-height:30px;
      }
    }
  }
}
</style>
