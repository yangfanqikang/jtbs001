<template>
    <div class="company">
      <div class="inner">
        <div class="content">
          <div class="item">
            <h6>公司介绍</h6>
            <p>公司多年来致力于无机颜料的研发、生产和销售，主产特种干粉砂浆用颜料和超细氧化铁颜料，产品具备高着色力、易分散性、强耐候性等优良颜料性能。针对砂浆的颜料品种齐全，颜色丰富，可以满足不同客户对色调的要求。超细颜料可以满足油漆涂料、塑料、陶瓷等行业的不同需求。产品以其优良的品质和完善的服务畅销国内60多个城市，并出口欧美、中东、东南亚等国家和地区，公司已与国内外1000多家工厂建立友好贸易关系，形成了稳定的市场销售网络。</p>
            <p>公司针对于新兴的彩色沥青行业专门研发了彩色沥青专用系列颜料，现在拥有五条生产线专门用于彩色沥青颜料的生产，能够同时生产沥青红、沥青蓝、沥青绿、沥青灰、沥青黄等多种颜色，同时还能够跟客户不同的需求来及时调配色彩并生产。</p>
          </div>
          <div class="item img-item">
            <img src="../assets/img/pic-company.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Company"
    }
</script>

<style scoped lang="scss">
  .company{
    background: url("../assets/img/bg-company.png") no-repeat;
    .content{
      .item{
        width: 50%;
        h6{
          font-weight: normal;
          font-size: 2.25rem;
          color: #D95747;
          text-align: center;
          padding: 40px 0px;
        }
        p{
          color: #666666;
          font-size: 0.875rem;
          width: 100%;
          padding: 0px 30px;
          padding-bottom: 15px;
          line-height: 1.5rem;
          text-indent: 2em;
        }
        img{
          width: 100%;
          height: auto;
          padding: 40px;
        }
      }
      .img-item{
        display: flex;
        align-items: center;
        img{
          align-items: center;
        }
      }
    }
  }
  @media (max-width: 412px) {
    .company {
      background: url("../assets/img/bg-company.png") no-repeat;
      .content {
        padding-bottom: 20px;
        .item{
          width: 100%;
          p{
            padding: 0px 30px;
          }
        }
        .item:last-child {
          display: none;
        }
      }
    }
  }
</style>
