<template>
    <div class="new-detail">
      <h4 class="title">新闻标题</h4>
      <div class="inner"><div class="time">2020年8月23日22:53:02</div></div>
      <img src="" alt="">
      <div class="inner">
        <p>秉承取之自然，回馈于自然的环保理念，我公司利用各种有机生物体材料研发生产的彩色有机覆盖物，加工处理后铺设于园艺植物或树木周围土壤表面，起保持土壤水分、吸附扬尘、调节土壤温度、增加土壤肥力、抑制杂草、促进植栽生长、减少土壤侵蚀和紧实度以及装饰美观等等作用。</p>
        <p>秉承取之自然，回馈于自然的环保理念，我公司利用各种有机生物体材料研发生产的彩色有机覆盖物，加工处理后铺设于园艺植物或树木周围土壤表面，起保持土壤水分、吸附扬尘、调节土壤温度、增加土壤肥力、抑制杂草、促进植栽生长、减少土壤侵蚀和紧实度以及装饰美观等等作用。</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NewDetail"
    }
</script>

<style scoped lang="scss">
  .new-detail{
    padding: 50px 0px;
    height: 100%;
    width: 100%;
    img{
      display: block;
      width: 100%;
      height: 300px;
      background-color: #3b8070;
      margin: 30px 0px;
    }
    h4{
      text-align: center;
      font-size: 2rem;
      line-height: 60px;
      color: #333;
    }
    .item{
      font-size: 0.75rem;
      line-height: 40px;
      color: #666;
    }
    p{
      font-size: 1rem;
      line-height: 30px;
      color: #666;
    }
  }
</style>
