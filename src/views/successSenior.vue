<template>
  <div class="successSinior">
    <p class="seniorTips" v-if="seniorGift">{{seniorGift}} <br> 只能领取一次哟</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseGift: localStorage.getItem("base_gift"), //获取之前选的奖品选项
      seniorGift: localStorage.getItem("senior_gift")
    };
  }
};
</script>

<style>
.successSinior {
  padding-top: 2rem;
  width: 100vw;
  min-height: 100vh;
  background: rgb(142, 181, 233) url(../assets/senior_success.png) no-repeat
    center top;
  background-size: 100%;
}

.seniorTips {
  margin-top: 8.8rem;
  width: 100%;
  height: 1rem;
  font-size: 17px;
  line-height: 1rem;
  color: rgb(248, 4, 4);
  font-size: 0.5rem;
}
</style>