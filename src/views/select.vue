<template>
  <div class="select">
    <div class="base">
      <div
        class="base-item"
        :class="{'active': currentBaseIndex === index}"
        v-for="(item, index) in base"
        :key="index"
        @click="actionSelectBase(item,index)"
      ></div>
    </div>

    <div class="senior">
      <div
        class="senior-item"
        :class="{'active': currentSeniorIndex === index}"
        v-for="(item, index) in senior"
        :key="index"
        @click="actionSelectSenior(item,index)"
      ></div>
    </div>

    <button
      :disabled="btnState==false"
      class="btn"
      :class="{btnBg:btnState}"
      @click="actionToQuestion"
    >选择基础礼和升级礼<br>开始答题</button>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "select1",
  data() {
    return {
      currentBaseIndex: -1,
      currentSeniorIndex: -1,
      base: ["体脂秤", "血压仪", "血糖仪"],
      senior: ["父母体检套餐", "个人体检套餐"]
    };
  },
  components: {},
  computed: {
    btnState() {
      //当两个框都被选中时btnState==true,利用这个计算属性来动态控制按钮的禁用和颜色
      return this.currentBaseIndex !== -1 && this.currentSeniorIndex !== -1;
    }
  },
  methods: {
    actionSelectBase(item, index) {
      console.error(item);
      this.currentBaseIndex = index;
      localStorage.setItem("base_gift", item);
    },
    actionSelectSenior(item, index) {
      console.error(item);
      this.currentSeniorIndex = index;
      localStorage.setItem("senior_gift", item); //存储数据
    },

    actionToQuestion() {
      if (this.currentBaseIndex != -1 && this.currentSeniorIndex != -1) {
        this.$router.push({
          name: "question"
        });
      } else {
      }
    },
    actionToEnd() {
      this.$router.push({
        name: "end"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  padding-top: 2rem;
  width: 100vw;
  min-height: 100vh;
  background: rgb(44, 42, 66) url(../assets/reward_select.png) no-repeat
    center top;
  background-size: 100%;
}
.base {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.3rem;
  &-item {
    width: 33vw;
    height: 3.6rem;
    &.active {
      position: relative;
      // background-color: rgba(174, 207, 172, 0.521);
      &::after {
        right: 0.95rem;
        bottom: 0.5rem;
        position: absolute;
        content: "";
        background: rgb(223, 191, 152);
        width: 0.4rem;
        height: 0.4rem;
        /* border-style: double; */
        /* border-color: rgb(255,105,180); */
        border-radius: 50%;
      }
    }
  }
}

.senior {
  margin-top: 0.8rem;
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &-item {
    width: 50vw;
    height: 3.6rem;
    &.active {
      position: relative;
      &::after {
        right: 1.22rem;
        bottom: 0.4rem;
        position: absolute;
        content: "";
        background: rgb(223, 191, 152);
        width: 0.4rem;
        height: 0.4rem;
        /* border-style: ridge; */
        /* border-color: #098b05; */
        border-radius: 50%;
      }
    }
  }
}

.btn {
  width: 60vw;
  height: 1.3rem;
  /* padding: 0.3rem; */
  border-radius: 0.6rem;
  border: none;
  font-size: 0.35rem;
  font-weight: 600;
  font-family: "微软雅黑";
  margin-top: 1.5rem;
  &.btnBg {
    background: rgb(216, 183, 103);
    color: #fff;
  }
}
</style>
