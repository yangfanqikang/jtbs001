<template>
  <div class="wolf-culture">
    <div class="inner">
      <TitleDes title="狼性文化" des="不做赚钱的公司 只做值钱的公司" color="#ffffff"></TitleDes>
      <p>公司倡导狼性文化。创建最具竞争力的企业是钱源人共同的目标。在实现这一目标进程中，每一个人都要忠诚自己的团队，勇挑重担，发挥潜能，用心做事，在团队中争做“领头雁”；要彼此信任，默契配合，甘于奉献，众志成城，在激烈的市场竞争中搏风击浪，攻坚克难，最终在实现企业发展战略目标的同时实现自己的人生价值。
      </p>
      <p>有才有能敢展现，有品有德敢担当,只要愿意并能够为企业努力工作、积极奉献，就是钱源需要的人才。在选用人才上，钱源首先考虑的是人员知识技能和岗位需要，使两者达到最佳组合，最大限度地发挥每个职工的专长和能力。 </p>
    </div>
  </div>
</template>

<script>
    import TitleDes from "./TitleDes";
    export default {
        name: "WolfCulture",
      components: {TitleDes}
    }
</script>

<style lang="scss" scoped>
  .wolf-culture{
    height: 800px;
  background-color: #0261a3;
  background-image: url('../assets/img/002about_wolf_culture.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #ffffff;
  p{
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    line-height: 200%;
    text-indent: 2em;
    text-align:justify;
    text-justify:inter-word;
  }
  }
</style>
