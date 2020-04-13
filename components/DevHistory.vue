<template>
    <div class="dev-history">
      <title-des title="发展历程" des="development history" color="#ffffff"></title-des>
      <div class="inner">
        <div v-for="li in devHistoryData">
          <div>
            <h3>{{li.leftTime}}</h3>
            <p>{{li.leftDes}}</p>
          </div>
          <span></span>
          <div>
            <h3>{{li.rightTime}}</h3>
            <p>{{li.rightDes}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  const devHistoryData = [
    {leftTime: '2018年3月12日',leftDes: '公司在长沙成立', rightTime: '', rightDes: ''},
    {leftTime: '',leftDes: '', rightTime: '4月23日', rightDes: '员工由3人发展至10人'},
    {leftTime: '2018年5月1日',leftDes: '公司搬迁至麓谷信息港C016', rightTime: '', rightDes: ''},
    {leftTime: '',leftDes: '', rightTime: '短短2个月不到', rightDes: '业绩上升，团队迅速扩张'},
    {leftTime: '2019年1月18日',leftDes: '普瑞温泉假日酒店举行第一次年会 员工人数增加至20人', rightTime: '', rightDes: ''},
    {leftTime: '',leftDes: '', rightTime: '2019年1月18日', rightDes: '年会同时拿下鲁班一级代理'},
    {leftTime: '2019年1月26日',leftDes: '受邀参与巨量引擎海南年会', rightTime: '', rightDes: ''},
    {leftTime: '',leftDes: '', rightTime: '2019年3月4日', rightDes: '员工人数增加至70人 公司搬迁至麓谷信息港A009+A010+C016'},
    {leftTime: '2019年4月',leftDes: '业务范围迅速延伸 鲁班/抖音/快手/广点通/百度/AD/客服', rightTime: '', rightDes: ''},
    {leftTime: '',leftDes: '', rightTime: '2019年4月15日', rightDes: '单日业绩消耗突破150W'},
    {leftTime: '2019年5月23日',leftDes: '单日业绩消耗突破450W', rightTime: '', rightDes: ''},
    {leftTime: '',leftDes: '', rightTime: '预计2020年10月', rightDes: '公司搬迁至自购写字楼'},
  ]
    import TitleDes from "./TitleDes";
    export default {
        name: "DevHistory",
      components: {TitleDes},
      data() {
        return {
          devHistoryData
        }
      },
    }
</script>

<style lang="scss" scoped>
.dev-history{
  height: 1436px;
  background: url("../assets/img/about_bg_dev.png") no-repeat center center;
  background-size: cover;
  >.inner{
    width: $innerWidth;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-flow: nowrap column;
    position: relative;
    padding-top: 55px;
    &:before{
      position: absolute;
      content: '';
      width: 2px;
      background-color: #FEFDF7;
      height: 1150px;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }
    >div{
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      >div{
        width: 415px;
        h3{
          font-size:28px;
          height: 38px;
        }
        p{
          font-size: 25px;
          line-height: 38px;
        }
      }
      >div:first-of-type{
        text-align: right;
        padding-right: 34px;
      }
      >div:last-of-type{
        text-align: left;
        padding-left: 34px;
      }
      >span{
        background-color: #fff;
        width:30px;
        height:30px;
        border-radius:50%;
        position: relative;
        &:before{
          position: absolute;
          content: '';
          width:16px;
          height:16px;
          background:rgba(0,179,255,1);
          border-radius:50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
        }
      }
    }

  }
}
</style>
