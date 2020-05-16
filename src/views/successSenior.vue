<template>
  <div class="successSinior">
    <p class="seniorTips" v-if="seniorGift">
      获得{{seniorGift}}
      <br />
      用户:{{phoneNum}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseGift: localStorage.getItem("base_gift"), //获取之前选的奖品选项
      seniorGift: localStorage.getItem("senior_gift"),
      phoneNum: localStorage.getItem("phone")
    };
  }
};
</script>

<style>
.successSinior {
  padding-top: 2rem;
  width: 100vw;
  min-height: 100vh;
  background: rgb(44, 42, 66) url(../assets/senior_success.png) no-repeat center
    top;
  background-size: 100%;
}

.seniorTips {
  margin-top: 2rem;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  color: red;
  font-size: 0.4rem;
  font-weight: bold;
}
</style>