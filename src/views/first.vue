<template>
  <div class="first">
    <div>
      <button class="begin" @click="begin"></button>
    </div>
    <div>
      <button class="seeRules" @click="viewRules"></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    begin() {
      // this.$router.push({
      //   name: "home"
      // })
      this.$Modal.info({
          title: "感谢您的参与！",
          content: "所有奖品均已发放完毕，欢迎您关注善诊微信公众号获取更多活动信息！",
          okText: "确定"
        });
    },
    viewRules() {
      this.$router.push({
        name: "rules"
      });
    }
  }
};
</script>
 
<style>
.first {
  width: 100vw;
  min-height: 100vh;
  background: #0C1126 url(../assets/load.png) no-repeat center
    top;
  background-size: 100%;
  overflow: hidden;
}

.begin {
      margin-top: 7.6rem;
    width: 73vw;
    height: 8vh;
    border-radius: 0%;
    background: none;
}

.seeRules {
  margin-top: 0.1rem;
    width: 19vw;
    height: 0.5rem;
    /* font-size: 0.3rem; */
    /* line-height: 40px; */
    border-radius: 100px;
    /* color: #fff; */
    background: none;
}
</style>