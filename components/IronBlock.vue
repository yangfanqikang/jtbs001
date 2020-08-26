<template>
    <div class="iron-block">
      <div class="inner">
        <h5 :style="{color: ironData.titleColor}">{{ironData.title}}</h5>
        <div class="content">
          <div class="item" v-for="item in ironData.ironsArr" :key="item.id">
            <div class="title" v-if="item.title">{{item.title}}</div>
            <div class="block">
              <div class="color-block" :style="{backgroundColor:item.color}"></div>
              <div class="text">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IronBlock",
      props:{
        ironData:{
          type:Object,
          default:[]
        }
      }
    }
</script>

<style scoped lang="scss">
  .iron-block{
    h5{
      font-size: 1.25rem;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-weight: normal;
      margin-bottom: 50px;
    }
    .content{
      flex-flow: row wrap;
      justify-content: flex-start;
      .item{
        width: 25%;
        box-sizing: border-box;
        text-align: center;
        margin-bottom: 64px;
        .title{
          text-align: center;
          color: #333;
          font-size: 1.25rem;
          height: 50px;
          line-height: 50px;
        }
        .block{
          width: 160px;
          height: 100px;
          border:1px solid rgba(153, 153, 153, 1);
          border-radius:5px;
          box-sizing: border-box;
          margin: 0 auto;
          .color-block{
            width: 100%;
            height: 70px;
          }
          .text{
            height: 30px;
            line-height: 30px;
            font-size: 1.25rem;
            color: #333;
          }
        }
      }
    }
  }
</style>
