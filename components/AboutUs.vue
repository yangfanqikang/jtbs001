<template>
    <div class="about-us">
      <div class="inner">
        <div class="content about">
          <div class="item">
            <div class="title">
              <span class="line"></span>
              <h6>关于我们</h6>
              <div>ABOUT US</div>
            </div>
            <p>公司多年来致力于无机颜料的研发、生产和销售，主产特种干粉砂浆用颜料和超细氧化铁颜料，产品具备高着色力、易分散性、强耐候性等优良颜料性能。针对砂浆的颜料品种齐全，颜色丰富，可以满足不同客户对色调的要求。超细颜料可以满足油漆涂料、塑料、陶瓷等行业的不同需求。</p>
            <p>公司针对于新兴的彩色沥青行业专门研发了彩色沥青专用系列颜料，现在拥有五条生产线专门用于彩色沥青颜料的生产，能够同时生产沥青红、沥青蓝、沥青绿、沥青灰、沥青黄等多种颜色，同时还能够跟客户不同的需求来及时调配色彩并生产。</p>
          </div>
          <div class="item">
            <img src="../assets/img/about/about_005.png" alt="">
          </div>
        </div>
        <div class="content features">
          <div class="item">
            <img src="../assets/img/about/about_001.png" alt="">
            <div>专业</div>
          </div>
          <div class="item">
            <img src="../assets/img/about/about_002.png" alt="">
            <div>优秀</div>
          </div>
          <div class="item">
            <img src="../assets/img/about/about_003.png" alt="">
            <div>安全</div>
          </div>
          <div class="item">
            <img src="../assets/img/about/about_004.png" alt="">
            <div>环保</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped lang="scss">
  .about-us{
    background-color: white;
    padding-bottom: 140px;
    .inner{
      position: relative;
      .about{
        flex-flow: row wrap;
        .item{
          width: 50%;
          padding: 50px;
          box-sizing: border-box;
          .title{
            .line{
              display: inline-block;
              background-color:#D2D2D2;
              height: 2px;
              width: 66px;
            }
            h6{
              color:#D95747;
              font-weight: normal;
              font-size: 2.25rem;
            }
            >div{
              color: #504D4D;
              font-size: 1.5rem;
              line-height: 40px;
              height: 40px;
            }
          }
          img{
            width: 100%;
            height: auto;
          }
        }
        p{
          color: #666;
          font-size: 0.75rem;
          line-height: 30px;
          margin-bottom: 50px;
        }
      }
      .features{
        position: absolute;
        bottom: -50px;
        left: 50px;
        right: 50px;
        width: 80%;
        background-color: white;
        justify-content: space-between;
        box-shadow:0px 3px 70px 0px rgba(197,27,59,0.19);
        border-radius:5px;
        padding: 30px 40px;
        .item{
          img{
            width: 60px;
            height: auto;
          }
          >div{
            color: #504D4D;
            font-size: 1.125rem;
            text-align: center;
            line-height: 40px;
          }
        }
      }
    }
  }
  @media (min-width: 413px) and (max-width: 767px) {
    .about-us {
      .inner {
        .about {
          .item {
            padding: 30px;
          }
        }
        .features {
          position: relative;
          bottom: 0px;
          width: 80%;
          left: 50%;
          transform: translateX(-50%);
          padding: 20px 20px;
          box-sizing: border-box;
          .item{
            img{
              width: 40px;
              height: auto;
            }
          }
        }
      }
    }
  }
  @media (max-width: 412px) {
    .about-us {
      .inner {
        .about {
          flex-flow: row wrap;
          .item {
            width: 100%;
            padding: 30px;
          }
          .item:last-child{
            display: none;
          }
        }
        .features {
          position: relative;
          bottom: 0px;
          width: 80%;
          left: 50%;
          transform: translateX(-50%);
          padding: 20px 20px;
          box-sizing: border-box;
          .item{
            img{
              width: 40px;
              height: auto;
            }
          }
        }
      }
    }
  }
</style>
