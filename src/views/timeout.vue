/* ------------------------------------------- template ------------------------------------------- */
<template>
  <div class="temTimeOut">
    <div class="sig"></div>
    <button class="timeout" @click="actionToQuestion"></button>
  </div>
</template>

/* -------------------------------------------- script -------------------------------------------- */
<script>
const MAX_FREQ = 3; //最大答题次数
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
      const phone = localStorage.getItem("phone");
      const value = JSON.parse(localStorage.getItem(phone));

      if (value.count > MAX_FREQ - 1) {
        // 弹框提示
        // var c = window.alert(
        //   //有没有按钮
        //   "您已答满3次，无法再次开始答题"
        // );
        this.$Modal.info({
          title: "您已答满3次，无法再次开始答题",
          okText: "确定"
        });
        this.$router.replace({
          name: "home"
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
 margin-top: -6rem;
    width: 79vw;
    height: 8.1rem;
    border-radius: 100px;
    background: none;
}

.temTimeOut {
  padding-top: 2rem;
  width: 100vw;
  min-height: 100vh;
  background: rgb(44, 42, 66) url(../assets/timeout.png) no-repeat center top;
  background-size: 100%;
}
</style>
