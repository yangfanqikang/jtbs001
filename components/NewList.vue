<template>
    <div class="new-list">
      <div class="inner">
        <div class="list">
          <div class="item" @click="gotoDetail(1)">
            <div><img src="" alt=""></div>
            <div class="new-content">
              <div class="title">新闻标题</div>
              <p class="news">秉承取之自然，回馈于自然的环保理念，我公司利用各种有机生物体材料研发生产的彩色有机覆盖物，加工处理后铺设于园艺植物或树木周围土壤表面，起保持土壤水分、吸附扬尘、调节土壤温度、增加土壤肥力、抑制杂草、促进植栽生长、减少土壤侵蚀和紧实度以及装饰美观等等作用。</p>
              <div class="time">2020年8月23日22:53:02</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NewList",
      methods:{
        gotoDetail(id){
          this.$router.push(`/new/details/`)
        }
      }
    }
</script>

<style scoped lang="scss">
  .new-list{
    padding: 50px;
    .list{
      .item{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
      }
      img{
        display: block;
        width: 120px;
        height: 120px;
        background:rgba(217,87,71,1);
        border-radius:10px;
      }
      .new-content{
        padding-left: 20px;
        .title{
          font-size: 1.5rem;
          color: #C14437;
          line-height: 50px;
          height: 40px;
        }
        p{
          color: #999;
          font-size: 0.75rem;
          line-height: 30px;
        }
        .time{
          color: #999;
          font-size: 0.75rem;
        }
      }
    }
  }
</style>
