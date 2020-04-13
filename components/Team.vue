<template>
  <div>
    <TitleDes title="钱源文化" des="QIAN YUAN CULTURE"/>
    <div class="inner">
      <ul class="picture">
        <li class="icon"><img src="../assets/img/team/icon_team_des_001.png" alt=""></li>
        <li class="text"><span>团 结</span></li>
        <li class="icon"><img src="../assets/img/team/icon_team_des_002.png" alt=""></li>
        <li class="text"><span>专 注</span></li>
        <li class="text"><span>高 效</span></li>
        <li class="icon"><img src="../assets/img/team/icon_team_des_003.png" alt=""></li>
        <li class="text"><span>专 业</span></li>
        <li class="icon"><img src="../assets/img/team/icon_team_des_004.png" alt=""></li>
      </ul>
      <ul class="slogan">
        <li><div class="title"><span>我们的愿景：</span></div><div class="des">创造价值、成就你我，实现全国独一家梦想！</div></li>
        <li><div class="title"><span>我们的理念：</span></div><div class="des">携手同行，让家变更好！</div></li>
        <li><div class="title"><span>我们的精神：</span></div><div class="des">永远年轻，永远热泪盈眶！</div></li>
        <li><div class="title"><span>我们的价值观：</span></div><div class="des">我们真诚地服务每一个客户，负责任地做好每一个产品，高效地执行每一个任务，团队协作并尊重每一个员工！</div></li>
      </ul>
    </div>
  </div>
</template>

<script>
    import TitleDes from './TitleDes.vue';
    import "../assets/css/global.scss";
    export default {
        name: "Team",
        components:{TitleDes}
    }
</script>

<style scoped lang="scss">
  .picture{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 58px;
    li{
      width: 256px;
      height: 133.5px;
      background-color: rgba(0,72,117,1);
      border-radius: 20px;
      margin-bottom: 13px ;
      margin-right: 9px;
      text-align: center;
      img{
        margin-top: 27px;
      }
      span{
        display: inline-block;
        font-size:46px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        margin-top: 20px;
        position: relative;
      }
      span::after{
        content:"";
        display: block;
        font-size:14px;
        font-weight:300;
        color:rgba(255,255,255,1);
      }
    }
    li:nth-child(2) span::after{
      content:"SOLIDARITY";
    }
    li:nth-child(4) span::after{
      content:"ABSORBED";
    }
    li:nth-child(5) span::after{
      content:"EFFICIENCY";
    }
    li:nth-child(7) span::after{
      content:"SPECIALITY";
    }
    li:last-child{
      margin-right: 0px;
    }
    li.text{
      background:rgba(1,114,162,1);
    }
  }
  .slogan{
    margin-bottom: 76px;
    overflow: hidden;
    li{
      line-height: 46px;
      font-size: 23px;
      color:rgba(0,0,0,1);
      .title{
        float:left;
        width: 163px;
        height: 46px;
        span{
          display: inline-block;
          vertical-align: top;
          width:100%;
          text-align: justify;
          text-align-last: justify;
        }
      }
      .title::after{
        content:"";
        display: inline-block;
        width:100%;
        overflow:hidden;
        height:0;
      }
      .des{
        float: right;
        width: 880px;
      }
    }
  }
</style>
