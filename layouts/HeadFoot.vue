<template>
    <div class="head-foot" id="#top">
      <nuxt/>
      <Footer/>
      <div class="go-top" @click="backTop" v-if="btnFlag">
        <img src="../assets/img/go-top.png" alt="">
      </div>
    </div>
</template>

<script>
  import Footer from "../components/Footer";
    export default {
      name: "HeadFoot",
      components: {
        Footer
      },
      data(){
        return {
          btnFlag: false
        }
      },
      // vue的两个生命钩子，这里不多解释。
      // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
      mounted () {
        window.addEventListener('scroll', this.scrollToTop)
      },
      destroyed () {
        window.removeEventListener('scroll', this.scrollToTop)
      },
      methods: {
        // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop () {
          const that = this
          let timer = setInterval(() => {
            let ispeed = Math.floor(-that.scrollTop / 5)
            document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
            if (that.scrollTop === 0) {
              clearInterval(timer)
            }
          }, 16)
        },

        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop () {
          const that = this
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          that.scrollTop = scrollTop
          if (that.scrollTop > 60) {
            that.btnFlag = true
          } else {
            that.btnFlag = false
          }
        }
      }
    }
</script>

<style lang="scss">
#__nuxt{
  background-color: #F0F0F0;
}
  .head-foot{
    position: relative;
    .go-top{
      position: fixed;
      bottom: 30px;
      right: 20px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 50%;
      cursor: pointer;
      text-align: center;
      border: 1px solid #ddd;
      background-color: rgba(255,255,255,0.8);
      img{
        width: 70%;
        height: auto;
        margin-top: 8px;
      }
    }
  }
</style>
