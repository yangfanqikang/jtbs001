<template>
  <div class="product">
    <Title :title="title" :subTitle="subTitle"/>
    <div class="inner">
      <div class="content">
        <div class="item">
          <div>
            <img src="../assets/img/pic-product-1.png" alt="">
            <div class="text">
              <div>彩色沥青页面</div>
              <p>所谓彩色沥青路面是指脱色沥青与各种石料、色料和添加剂等材料在特定的温度下混合拌和，即可配制成各种色彩的沥青混合料，再经过摊铺、碾压而形成具有一定强度和路用性能的彩色沥青混凝土路面。</p>
              <button>更多</button>
            </div>
          </div>
        </div>
        <div class="item">
          <div>
            <img src="../assets/img/pic-product-2.png" alt="">
            <div class="text">
              <div>彩色有机物覆盖</div>
              <p>秉承取之自然，回馈于自然的环保理念，我公司利用各种有机生物体材料研发生产的彩色有机覆盖物，加工处理后铺设于园艺植物或树木周围土壤表面，起保持土壤水分、吸附扬尘、调节土壤温度、增加土壤肥力、抑制杂草、促进植栽生长、减少土壤侵蚀和紧实度以及装饰美观等等作用。</p>
              <button>更多</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from "./Title";
    export default {
        name: "MainProduct",
      data(){
        return{
          title: "主要产品介绍",
          subTitle: "INTRODUCE"
        }
      },
      components:{
        Title
      }
    }
</script>

<style scoped lang="scss">
  .product{
    background-color: white;
    .item{
      width: 50%;
      position: relative;
      >div{
        padding: 50px;
        width: 100%;
        margin: 0 auto;
        >img{
          width: 100%;
          height: auto;
        }
        .text{
          margin: 0 auto;
          margin-top: -100px;
          width: 80%;
          box-shadow:0px 3px 70px 0px rgba(197,27,59,0.19);
          padding: 20px;
          background-color: white;
          height: 400px;
          position: relative;
          >div{
            color: #D95747;
            font-size: 2rem;
            line-height: 4rem;
            text-align: center;
          }
          p{
            font-size: 0.875rem;
            line-height: 30px;
            color: #666;
            padding-bottom: 30px;
          }
          button{
            background-color: #D95747;
            color: white;
            padding: 10px 30px;
            font-size: 1rem;
            cursor: pointer;
            border-radius:5px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -20px;
          }
          button:focus{
            border: none;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1200px){
    .product {
      .item {
        padding: 20px;
        padding-bottom: 50px;
        > div {
          padding:0px;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .product {
      .item {
        padding: 10px;
        padding-bottom: 50px;
        > div {
          padding: 0px;
          .text{
            width: 85%;
            >div{
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
  @media (min-width: 413px) and (max-width: 767px) {
    .product {
      .content{
        .item {
          padding-bottom: 40px;
          >div{
            padding: 20px;
            .text{
              height: 450px;
              >div{
                font-size: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 412px) {
    .product {
      .content{
        flex-flow: row wrap;
        .item {
          width: 100%;
          >div{
            padding: 30px;
            .text{
              >div{
                font-size: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
</style>
