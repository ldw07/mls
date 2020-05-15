/* ------------------------------------------- template ------------------------------------------- */
<template>
  <div class="temTimeOut">
    <div class="sig">您已超时</div>
    <button class="timeout" @click="actionToQuestion">再试一次</button>
  </div>
</template>

/* -------------------------------------------- script -------------------------------------------- */
<script>
const MAX_FREQ = 3;//最大答题次数
export default {
  name: "",
  components: {},

  data() {
    return {};
  },

  /* 一.生命周期函数 */
  created() {
    console.error(this.$route.query);
    // let a = this.$route.query.a
  },

  /* 二.监控函数 */
  watch: {},

  computed: {},

  /* 三.内部功能函数 */
  methods: {
    /* ----------------------事件调用函数------------------------ */
    // 事件调用函数注释
    actionToQuestion() {
      const phone = localStorage.getItem("phone")
      const value = JSON.parse(
        localStorage.getItem(phone)
      );

      if (value.count > MAX_FREQ-1) {
        // 弹框提示
        // var c = window.alert(
        //   //有没有按钮
        //   "您已答满3次，无法再次开始答题"
        // );
        this.$Modal.info({
          title: "您已答满3次，无法再次开始答题",
          content: ""
        });
      } else {
        let count = value.count + 1;
        localStorage.setItem(
          phone,
          JSON.stringify({
            count: count,
            phoneNum: phone
          })
        );
        this.$router.push({
          name: "question",
          query: {
            again: 1
          }
        });
      }
    },

    /* ----------------------内部功能函数------------------------ */
    // 内部功能函数注释
    doSomething() {},

    /* ----------------------服务请求函数------------------------ */
    // 服务请求函数注释
    ajaxXxx() {}
  }
};
</script>

/* -------------------------------------------- style -------------------------------------------- */
<style scoped lang="scss">
.sig {
  margin-top: 7rem;
  width: 100%;
  height: 1rem;
  font-size: 17px;
  line-height: 1rem;
  color: rgb(248, 4, 4);
	font-size: 0.5rem;
}
.timeout {
  margin-top: 1rem;
  width: 32vw;
  height: 1rem;
  font-size: 0.32rem;
  line-height: 1rem;
  border-radius: 100px;
  background: rgb(17, 0, 255);
  color: #fff;
}

.temTimeOut {
  padding-top:2rem;
  width: 100vw;
  min-height: 100vh;
  background: rgb(142,181,233) url(../assets/fail.png) no-repeat center top;
  background-size: 100%;
}
</style>
