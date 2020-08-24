<template>
    <div class="reason">
      <Title :title="title" :subTitle="subTitle"/>
      <div class="inner">
        <div class="content">
          <div class="item">
            <span>30</span>
            <h6>经验</h6>
            <p>三十年的颜料加工经验，十余年的氧化铁颜料生产经验是我们能够为您提供靓丽色彩的底气</p>
          </div>
          <div class="item">
            <span>7</span>
            <h6>保障</h6>
            <p>七条颜料加工生产线，每种型号常备库存一百吨，是我们能够为您及时提供产品的保障</p>
          </div>
          <div class="item">
            <span>1</span>
            <h6>直销</h6>
            <p>绝对的厂家直销能让您选购到货真价实的产品,拥有vip的体验</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Title from "./Title";
    export default {
        name: "Reason",
      data(){
        return{
          title: "为什么选择我们",
          subTitle: "WH?"
        }
      },
      components:{
        Title
      }
    }
</script>

<style scoped lang="scss">
  .reason{
    text-align: center;
    background-color: white;
    padding-bottom: 120px;
    .inner{
      .content{
        width:100%;
        display: flex;
        justify-content: space-between;
        .item{
          width: 33.33%;
          span{
            display: inline-block;
            width:54px;
            height: 54px;
            border-radius: 50%;
            background-color: #D95747;
            text-align: center;
            line-height: 54px;
            font-size: 1rem;
            color: white;
          }
          h6{
            color: #2C2C2C;
            font-size: 1.5rem;
            font-weight: normal;
            padding: 36px 0px;
          }
          p{
            display: inline-block;
            width: 80%;
            margin: 0 auto;
            color: #666;
            font-size: 0.875rem;
            line-height: 1.5rem;
          }
        }
        .item:nth-child(2){
          span{
            background-color: #ECC42B;
          }
        }
        .item:nth-child(3){
          span{
            background-color: #504D4D;
          }
        }
      }
    }
  }
</style>
