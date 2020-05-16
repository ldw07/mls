<template>
  <div class="baseSuccess">
    <p class="tips" v-if="baseGift">
      获得奖品:{{baseGift}}
      <br />
      用户:{{phoneNum}}
    </p>

    <button class="goOnChallenge" @click="actionToSenior"></button>
    <!-- <button :disabled="btnState==false" :class="{btnBg:btnState}" @click="actionToSenior">点击领取奖品</button> -->
    <!-- <button :disabled="btnState==false" :class="{btnBg:btnState}" @click="actionToQuestion">放弃,只领取初级奖品</button> -->
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
  },
  methods: {
    actionToSenior() {
      location.href = "/question?isSenior=1";
    }
  }
};
</script>

<style>
.baseSuccess {
  width: 100vw;
  min-height: 100vh;
  background: rgb(44, 42, 66) url(../assets/base_success.png) no-repeat center
    top;
  background-size: 100%;
  overflow: hidden;
}

.goOnChallenge {
  margin-top: 4.45rem;
  width: 75vw;
  height: 48px;
  /* font-size: 17px; */
  /* line-height: 40px; */
  border-radius: 2rem;
  background: none;
  color: #fff;
}
.tips {
  margin-top: 4rem;
  width: 100%;
  height: 1rem;
  font-size: 0.4rem;
  line-height: 1rem;
  color: rgb(248, 4, 4);
  font-weight: bold;
  /* font-size: 0.5rem; */
}
</style>