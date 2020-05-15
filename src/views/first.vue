<template>
  <div class="first">
    <div>
      <button class="begin" @click="begin">开始游戏</button>
    </div>
    <div>
      <button class="seeRules" @click="viewRules">查看规则</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    begin() {
      this.$router.push({
        name: "home"
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
  background: rgb(142, 181, 233) url(../assets/load.png) no-repeat center
    top;
  background-size: 100%;
  overflow: hidden;
}

.begin {
  margin-top: 10rem;
  width: 68vw;
  height: 48px;
  font-size: 17px;
  line-height: 40px;
  border-radius: 100px;
  background: rgb(17, 0, 255);
  color: #fff;
}

.seeRules {
  margin-top: 0.8rem;
  width: 68vw;
  height: 48px;
  font-size: 0.3rem;
  line-height: 40px;
  border-radius: 100px;
  background: rgb(17, 0, 255);
  color: #fff;
}
</style>