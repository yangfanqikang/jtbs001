<template>
  <div>
    <TitleDes title="联系我们" des="CONTACT US"/>
    <div class="inner">
      <ul class="info">
        <li>
          <div class="item address"><p>公司地址：<br/>湖南省长沙市岳麓区麓谷街道麓谷信息港4楼<br/>A010钱源传媒</p></div>
          <div class="item phone"><p>联系电话：<br/>13397602966</p></div>
          <div class="item email"><p>电子邮件：<br/>476686705@qq.com</p></div>
          <div class="item qq"><p>QQ咨询：<br/>476686705</p></div>
        </li>
        <li>
          <p>留下您的联系方式<br/>我们将第一时间与您联系！</p>
          <div class="cooperation-flow-contact">
            <input type="text" v-model="name" placeholder="名字">
            <input type="text" v-model="companyName" placeholder="公司">
            <input type="text" v-model="phone" placeholder="手机">
          </div>
          <button class='submit-info'>立即提交</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import TitleDes from './TitleDes.vue';
    import "../assets/css/global.scss";
    export default {
        name: "ContactUs",
        components:{
            TitleDes
        },
        data(){
            return{
                name:"",
                companyName:"",
                phone:""
            }
        }
    }
</script>

<style scoped lang="scss">
  .info{
    display: flex;
    justify-content: center;
    color:rgba(80,80,80,1);
    font-size: 20px;
    line-height: 45px;
    margin-bottom: 21px;
    li{
      list-style: none;
      .item{
        line-height: 30px;
        position: relative;
        display: flex;
        justify-content: flex-start;
        height: 100px;
        align-items: center;
        margin-bottom: 10px;
        p{
          border-left:1px solid rgba(0,72,117,0.3);
          padding-left: 15px;
        }
      }
      .item::before{
        content:"";
        display: inline-block;
        width:50px;
        height: 50px;
        background:url('../assets/img/contact/icon_contact_001.png') no-repeat;
        margin-right: 15px;
        border:1px dashed rgba(0,72,117,0.3);
        opacity:0.3;
      }
      .item:nth-child(2)::before{
        background:url('../assets/img/contact/icon_contact_002.png') no-repeat;
      }
      .item:nth-child(3)::before{
        background:url('../assets/img/contact/icon_contact_003.png') no-repeat;
      }
      .item:nth-child(4)::before{
        background:url('../assets/img/contact/icon_contact_004.png') no-repeat;
      }
    }
    li:nth-child(1){
      border-right:1px solid rgba(0,72,117,0.3);
      padding-right: 56px;
    }
    li:nth-child(2){
      padding-left: 56px;
      font-size: 30px;
      color:rgba(80,80,80,1);
      .cooperation-flow-contact{
        margin-top: 37px;
        input{
          display: block;
          margin-bottom: 20px;
          background-color: white;
          height: 52px;
          line-height: 52px;
          width: 450px;
          border: none;
          border-radius: 5px;
          padding-left: 20px;
        }
        input:focus,input:visited{
          border: none;
        }
      }
      .submit-info{
        background-color: #FF5360;
        height:50px;
        lineH-height:50px;
        border-radius:15px;
        width: 160px;
        font-size: 30px;
        color: white;
        cursor: pointer;
      }
      .submit-info:hover{
        background-color: #FF5359;
      }
    }
  }
</style>
