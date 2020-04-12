<template>
    <div class="title-des">
      <h1 :style="{color: color}">{{title}}</h1>
      <div class="divide"></div>
      <p :style="{color: color}">{{des}}</p>
    </div>
</template>

<script>
    export default {
        name: "TitleDes",
      props: {
          title: {
            type: String,
            required: true
          },
        des: {
            type: String,
          required: true
        },
        color: {
            type: String,
          default: "#505050"
        }
      }
    }
</script>

<style lang="scss" scoped>
.title-des{
  padding: 49px 0;
  text-align: center;
  h1{
    font-size:55px;
    font-weight:800;
    color:rgba(80,80,80,1);
  }
  .divide{
    width:120px;
    height:8px;
    margin: 13px auto;
    background:rgba(0,199,199,1);
  }
  p{
    font-size:30px;
    font-weight:300;
    color:rgba(80,80,80,1);
  }
}
</style>
