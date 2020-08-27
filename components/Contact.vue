<template>
  <div class="contact">
    <div class="inner">
      <div class="contact-us">
        <Title :title="title" :subTitle="subTitle" :paddingTop="paddingTop"/>
        <div class="content">
          <div class="item">
            <div class="title">彩色沥青</div>
            <ul>
              <li>
                <img src="../assets/img/about/nameIcon.png" alt="">
                <span>蔡诗琴</span>
              </li>
              <li>
                <img src="../assets/img/about/phoneIcon.png" alt="">
                <span>15111211621</span>
              </li>
              <li>
                <img src="../assets/img/about/emailIcon.png" alt="">
                <span>cai-09jia@hotmail.com</span>
              </li>
            </ul>
          </div>
          <div class="item">
            <div class="title">彩色有机覆盖物</div>
            <ul>
              <li>
                <img src="../assets/img/about/nameIcon.png" alt="">
                <span>谢荣伍</span>
              </li>
              <li>
                <img src="../assets/img/about/phoneIcon.png" alt="">
                <span>18670703900</span>
              </li>
              <li>
                <img src="../assets/img/about/emailIcon.png" alt="">
                <span>634533290@qq.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from './Title'
    export default {
        name: "Contact",
      components:{
        Title
      },
      data(){
          return{
            title: '联系我们',
            subTitle: 'CONTACT US',
            paddingTop:'60px'
          }
      }
    }
</script>

<style scoped lang="scss">
  .contact{
    background-image: url("../assets/img/about/map.png");
    background-size: cover;
    .inner{
      padding: 90px 0px;
    }
    .contact-us{
      width: 74%;
      background-color: white;
      margin: 0 auto;
      padding-bottom: 60px;
      box-shadow: 0px 3px 70px 0px rgba(197, 27, 59, 0.19);
      border-radius: 5px;
      .content{
        justify-content: center;
        margin-top: 20px;
        .item{
          padding: 0px 20px;
          .title{
            color: #504D4D;
            font-size: 1.5rem;
            font-weight: normal;
            line-height:50px;
          }
          ul{
            padding-left: 0px;
            li{
              font-size: 1rem;
              color: #666;
              height: 32px;
              line-height: 32px;
              img{
                vertical-align: middle;
              }
              span{
                padding-left: 5px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 412px) {
    .contact {
      .contact-us {
        width: 88%;
        .content {
          justify-content: flex-start;
          flex-flow: row wrap;
          .item {
            padding: 0px 40px;
          }
        }
      }
    }
  }
</style>
