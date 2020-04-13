<template>
  <div>
    <TitleDes title="成功案例" des="服务之心·海纳百川"/>
    <div class="inner">
      <div class="examples">
        <div v-for="example in examples" :key="example.id">
          <img :src="example.src">
        </div>
        <div class="more">
          <div class="more-loading">
            <p>更多爆款案例<br/>持续更新中</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import TitleDes from './TitleDes.vue';
    import "../assets/css/global.scss";
    const examplesArr=[
        {id:1,src:require("../assets/img/examples/pic_success_001.png")},
        {id:2,src:require("../assets/img/examples/pic_success_002.png")},
        {id:3,src:require("../assets/img/examples/pic_success_003.png")},
        {id:4,src:require("../assets/img/examples/pic_success_004.png")},
        {id:5,src:require("../assets/img/examples/pic_success_005.png")},
        {id:6,src:require("../assets/img/examples/pic_success_006.png")},
        {id:7,src:require("../assets/img/examples/pic_success_007.png")},
        {id:8,src:require("../assets/img/examples/pic_success_008.png")},
        {id:9,src:require("../assets/img/examples/pic_success_009.png")},
        {id:10,src:require("../assets/img/examples/pic_success_010.png")},
        {id:11,src:require("../assets/img/examples/pic_success_011.png")},
        {id:12,src:require("../assets/img/examples/pic_success_012.png")},
        {id:13,src:require("../assets/img/examples/pic_success_013.png")},
        {id:14,src:require("../assets/img/examples/pic_success_014.png")},
        {id:15,src:require("../assets/img/examples/pic_success_015.png")}
    ]
    export default {
        name: "Example",
        components:{TitleDes},
        data(){
            return {
                examples: examplesArr
            }
        }
    }
</script>

<style scoped lang="scss">
  .examples{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 110px;
    div{
      width: 265px;
      height: 574px;
      margin: 5px;
    }
    .more{
      .more-loading{
        margin:0px;
        width: 265px;
        height: 574px;
        text-align: center;
        font-size:25px;
        font-weight:300;
        color:rgba(255,255,255,1);
        line-height:40px;
        background-color: red;
        opacity: 0.5;
      }
    }
  }
</style>
