<template>
    <footer>
      页脚
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
            img{
              width: 126px;
            }
          }
        }
      }
    }
  }
</style>
