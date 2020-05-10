<template>
    <footer>
      <div class="inner">
        <img src="../assets/img/pic_map.png" alt="">
        <div class="divide"></div>
        <div class="footer-info">
          <div class="footer-info-text">
            <div class="friend-list">
              <h4>友情链接</h4>
              <div>
                <div>
                  <a href="">长沙高新区</a>
                  <a href="">长沙商务局</a>
                  <a href="">巨量引擎</a>
                  <a href="">抖音短视频</a>
                </div>
                <div>
                  <a href="">长沙电商协会</a>
                  <a href="">字节跳动</a>
                  <a href="">鲁班电商</a>
                  <a href="">西瓜视频</a>
                </div>
              </div>
            </div>

            <div class="company-info">
              <h4>公司地址</h4>
              <a>长沙市岳麓区麓谷大道麓谷信息港4楼A010</a>
              <h4>备案信息</h4>
              <a>长沙钱源文化传媒有限公司</a>
              <a>湘ICP备20007084号-1</a>
            </div>
          </div>

          <div class="footer-info-pic">
            <div>
              <img src="../assets/img/wechat_more.png" alt="">
              <p>了解更多</p>
            </div>
            <div>
              <img src="../assets/img/wechat_contact.png" alt="">
              <p>业务联系</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>

  footer{
    background: $primaryBg;
    padding: 97px 0;
    .inner{
      margin: 0 auto;
      width: $innerWidth;
      >img{
        margin-bottom: 67px;
      }
      >.divide{
        border-top: 1px dashed #ffffff;
      }
      >.footer-info{
        margin-top: 67px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        >.footer-info-text{
          display: flex;
          >div{
            margin-right: 28px;
            font-size: 20px;
            >h4{
              margin-bottom: 28px;
              color: #48C8FF;
              font-weight: normal;
            }
            a{
              color: #ffffff;
              text-decoration: none;
              text-align: left;
              display: block;
              margin-bottom: 20px;
            }
          }
          .friend-list{

            >div{
              display: flex;
              >div{
                width: 120px;
              }
            }
          }
          .company-info{
            >h4:last-of-type{
              margin-bottom: 20px;
              color: #48C8FF;
            }
            p{
              margin-bottom: 20px;
            }
            >h4:last-child{
              margin-bottom: 20px;
            }
          }
        }
        >.footer-info-pic{
          display: flex;
          >div{
            margin-left: 30px;
            text-align: center;
          }
        }
      }
    }
  }
</style>
