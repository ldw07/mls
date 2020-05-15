<template>
  <div>   
    <div class="questionJS" :style="backgroundDiv">
      <div class = "count">{{remainSec}}s</div>
      <div class="box">
        <div class="question">       
          <div>
            <h5>{{data[qIndex].title}}</h5>
            <ul>
              <li
                v-for="(a, index1) in data[qIndex].items"
                @click="checkEvent(index1, qIndex)"
                :key="index1"
                class="sz_option font-center"
                :class="{active: activeIndex === index1, color1: index1 === rightIndex, color2: index1 === errorIndex}"
              >
                <!-- <span
                  v-if="index1 === 0"
                  :class="[{sign1: index1 === rightIndex}, {sign2: index1 === errorIndex}, 'sign']"
                >A</span>
                <span
                  v-if="index1 === 1"
                  :class="[{sign1: index1 === rightIndex}, {sign2: index1 === errorIndex}, 'sign']"
                >B</span>
                <span
                  v-if="index1 === 2"
                  :class="[{sign1: index1 === rightIndex}, {sign2: index1 === errorIndex}, 'sign']"
                >C</span>
                <span
                  v-if="index1 === 3"
                  :class="[{sign1: index1 === rightIndex}, {sign2: index1 === errorIndex}, 'sign']"
                >D</span> -->
                {{a}}
              </li>
            </ul>
          </div>
        </div>
        <!-- <p v-if="baseGift">{{baseGift}}</p> -->
      </div>
    </div>

    
  </div>
</template>

<script>

import data from "./data.json";
import successBaseVue from './successBase.vue';

console.error(data)

const MAX_TIME = 10;//倒计时时间
const QUES_AMOUNT = 6;//题目数量
const MAX_FREQ = 3;//最大答题次数
const ORDER = Math.floor(Math.random*10 - 1).toString;//0-9的随机数
// const aaa = "base" + "1";
export default {
  name: "app",
  components: {},
  data() {
    return {
      backgroundDiv :{

      },
      data: data['base1'],
      remainSec: MAX_TIME,
      qIndex: 0,
      activeIndex: -1,
      rightIndex: -1, //回答正确
      errorIndex: -1, //回答错误
      questionList: [],
      ansState: false,
      collectionList: [],
      collectHtmlData: [],
      collectNum: 0,
      errorHtmlData: [],
      errNum: 0,
      collectionState: false,
      collectionText: "收藏",
      toast: false,
      toastText: "",
      timer: "",
      allQuestionState: [],
      isSenior: false,
      baseGift: localStorage.getItem("base_gift"), //获取之前选的奖品选项
      seniorGift: localStorage.getItem("senior_gift")
    };
  },
  watch: {
    qIndex(n) {
      this.qIndex = n;
      this.qIndexChange();
    }
  },

  //进入页面的时候回触发这周期
  created() {
    const { phone, isSenior, again } = this.$route.query
    this.isSenior = isSenior === '1'
    console.error(this.isSenior)
    
    let n
    if (this.isSenior) {
      console.error(true);

      n =  Math.ceil(Math.random() * 7)

      this.data = data['senior' + n]
      this.qIndex = 0;
      console.error(this.data)
      console.error(n)
      this.nextEvent();
    } else {
      if(again === '1') {
        n = sessionStorage.getItem('base_n') || '1'
        } else {
          n = Math.ceil(Math.random() * 7)
          sessionStorage.setItem('base_n', n)
        }
       this.data = data['base' + n]
    }

   
    this.initInterval()
  },
  mounted() {
    for (var i = 0; i < this.data.length; i++) {
      this.collectionList.push(false);
      this.allQuestionState.push({ id: i, state: 1 }); // state 1:未做   2:对    3:错
    }
  },
  // 退出页面之前会触发这个周期
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    initInterval(){
      this.remainSec = MAX_TIME
      this.timer  = setInterval(() => {
        if (this.remainSec <= 0) {
          clearInterval(this.timer)
          this.$router.push({
            name: 'timeout'
          })
          return
        }
        this.remainSec--;
      }, 1000)
    },
    // 判断答题是否正确
    checkEvent(num, qIndex) {
      // if (!this.questionList[this.qIndex]) { // 判断当前题目是否做过

      
      this.activeIndex = num;
      if (this.data[this.qIndex].answer === num) {
        // 做对了
        this.rightIndex = num;
        this.questionList[this.qIndex] = { userAns: num, rightAns: num };
        this.allQuestionState[this.qIndex].state = 2;
        console.error(num);
        if (!this.isSenior) {
          //初级题目
          if (qIndex < QUES_AMOUNT-1) {
            //答完3道题目
            this.nextEvent();
          } else {
            // 弹窗提示
            this.$router.push({
              name: "successBase"
            });
            return
            // this.isSenior=true;
            // var r = window.confirm(
            //   "恭喜你完成初级挑战，获得初级奖品，是否选择冲击高级奖品？"
            // );
            // if (r == true) {
            //   console.error(true);
            //   // this.data = data.senior;//导入高级题目

            //   let n =  Math.ceil(Math.random() * 3)
            //   this.data = data['senior' + n]
            //   this.qIndex = 0;
            //   this.nextEvent();
            // } else {
            //   console.error(false);
            //   this.actionToSuccessBase();
            // }
          }
        } else {
          //高级题目
           if (qIndex < QUES_AMOUNT-1) {
            //答完3道题目
            this.nextEvent();
          } else {
            // 弹窗提示
            this.actionToSuccessSenior();
          }
        }
      } else {
        // 做错了
        this.actionToEnd();
      }
      // }
    },
    // 跳转到end
    actionToEnd() {
      this.$router.replace({
        name: "end",
      });
    },
    actionToSuccessSenior(){
      this.$router.push({
        name: "successSenior"
      })
    },
    actionToSuccessBase(){
      this.$router.push({
        name: "successBase"
      })
    },
    // preEvent () {
    //   if (this.qIndex !== 0) {
    //     this.qIndex -= 1;
    //     this.activeIndex = -1;
    //     this.rightIndex = -1;
    //     this.errorIndex = -1;
    //     this.ansState = false;
    //   }
    // },
    qIndexChange() {
      this.activeIndex = -1;
      this.rightIndex = -1;
      this.errorIndex = -1;
      if (this.questionList[this.qIndex]) {
        // 已答列表是否存在
        if (
          this.questionList[this.qIndex].rightAns ===
          this.questionList[this.qIndex].userAns
        ) {
          // 答案是否正确
          this.rightIndex = this.questionList[this.qIndex].rightAns;
        } else {
          this.rightIndex = this.questionList[this.qIndex].rightAns;
          this.errorIndex = this.questionList[this.qIndex].userAns;
        }
      }
      if (this.collectionList[this.qIndex]) {
        // 判断是否收藏
        this.collectionState = true;
        this.collectionText = "取消收藏";
      } else {
        this.collectionState = false;
        this.collectionText = "收藏";
      }
    },
    nextEvent() {
      if (this.data.length > this.qIndex + 1) {
        this.qIndex += 1;
        this.activeIndex = -1;
        this.rightIndex = -1;
        this.errorIndex = -1;
        this.ansState = false;
        this.remainSec = MAX_TIME
      }
    },
    // answerEvent () {
    //   if (this.questionList[this.qIndex]) this.ansState = !this.ansState;
    //   else this.showToast('未做题目不能看答案');
    // },
    // collectionEvent () {
    //   if (this.collectionState) {
    //     this.collectionList[this.qIndex] = false;
    //     this.collectionState = !this.collectionState;
    //     this.collectionText = '收藏';
    //   } else {
    //     this.collectionList[this.qIndex] = true;
    //     this.collectionState = !this.collectionState;
    //     this.collectionText = '取消收藏';
    //   }
    //   this.collectNum = this.getCollectList().length;
    // },
    getCollectList() {
      var a = [];
      for (var i = 0; i < this.collectionList.length; i++) {
        if (this.collectionList[i]) {
          a.push(i + 1);
        }
      }
      return a;
    },
    collectListEvent() {
      this.collectHtmlData = this.getCollectList();
      if (this.collectHtmlData.length > 0) this.$refs.collectList.modelOpen();
      else this.showToast("您当前还没有收藏题目");
    },
    showToast(str) {
      var me = this;
      me.toast = true;
      me.toastText = str;
      setTimeout(function() {
        me.toast = false;
      }, 2000);
    },
    listEvent() {
      this.$refs.list.modelOpen();
    },
    errorListEvent() {
      if (this.errorHtmlData.length > 0) this.$refs.error.modelOpen();
      else this.showToast("您当前还没有错题");
    },
    errInEvent(num) {
      this.$refs.error.modelClose();
      this.qIndex = num;
    },
    collectInEvent(num) {
      this.$refs.collectList.modelClose();
      this.qIndex = num;
    },
    allQuestionEvent(num) {
      this.$refs.list.modelClose();
      this.qIndex = num;
    }
  }
};
</script>

<style lang="scss" scoped>
.font-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sz_option {
  margin-top: 4rem;
  margin: 10px auto 0;
  background: rgba(228, 110, 202, 0.986);
  width: 80%;
  border-radius: 2.1rem;
  height: 1rem;
  font-size: 0.3rem;
  padding: 0 0.2rem;
}

.count {
  margin-top: 1.2rem;
  font-size: 0.6rem;
  color: red;
}
.fixed {
  width: 50px;
  height: 50px;
  // background: #fff url(./images/list.svg) no-repeat center center;
  background-size: 30px;
  position: fixed;
  top: 70%;
  right: 15px;
  border-radius: 50%;
  // box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  &:active {
    // background: #eee url(./images/list.svg) no-repeat center center;
    background-size: 30px;
  }
}

.collectList {
  h5 {
    margin: 0;
    padding-top: 15px;
    line-height: 25px;
    text-align: center;
    color: #444;
  }
  ul {
    padding-top: 2rem;
    margin: 0 auto;
    width: 94%;
    font-size: 0;
    li {
      width: 20%;
      height: 60px;
      display: inline-block;
      position: relative;
      .item {
        width: 40px;
        height: 40px;
        border: 1px solid #aaa;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        font-size: 18px;
        color: #333;
        line-height: 40px;
        text-align: center;
        &:active {
          background: #ccc;
          color: #333;
        }
        &.right {
          color: #00a400;
          border: 1px solid #00a400;
          background: rgba(0, 164, 0, 0.17);
          &:active {
            background: #00a400;
            color: #fff;
          }
        }
        &.error {
          color: #e8571b;
          border: 1px solid #e8571b;
          background: rgba(255, 96, 30, 0.17);
          &:active {
            background: #e8571b;
            color: #fff;
          }
        }
      }
    }
  }
}

.toast {
  width: 100%;
  position: fixed;
  top: 70%;
  min-height: 30px;
  opacity: 1;
  font-family: "Microsoft YaHei";
  color: #fff;
  font-size: 14px;
  &.toast-enter-active,
  &.toast-leave-active {
    transition: opacity 0.5s;
  }
  &.toast-enter,
  &.toast-leave-to {
    opacity: 0;
  }
  .main {
    background: rgba(0, 0, 0, 0.6);
    max-width: 70%;
    height: 100%;
    border-radius: 5px;
    margin: 0 auto;
    text-align: center;
    line-height: 20px;
    padding: 5px 10px;
  }
}

.footer {
  width: 100%;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Microsoft YaHei";
  background: #fff;
  font-size: 0.6rem;
  .btn {
    width: 100%;
    text-align: center;
    border-right: 1px solid #ddd;
    border-top: 1px solid #ddd;
    &:nth-last-child(1) {
      border-right: none;
    }
    &:active {
      background: #ddd;
    }
    &.btn1 {
      color: #00a400;
    }
  }
}

.explain {
  background: #fff;
  width: 100%;
  font-family: "Microsoft YaHei";
  // box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  opacity: 1;
  &.explain-enter-active,
  &.explain-leave-active {
    transition: opacity 0.5s;
  }
  &.explain-enter,
  &.explain-leave-to {
    opacity: 0;
  }
  p {
    padding: 10px;
    box-sizing: border-box;
    line-height: 25px;
  }
}

.btn-box {
  width: 100%;
  height: 40px;
  display: flex;
  margin: 20px 0;
  font-size: 15px;
  font-family: "Microsoft YaHei";
  .left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button {
    width: 80%;
    line-height: 40px;
    background: #00a400;
    display: block;
    text-align: center;
    color: #fff;
    border-radius: 5px;

    &:active {
      background: green;
    }
  }
  .button1 {
    width: 80%;
    line-height: 40px;
    display: block;
    text-align: center;
    border-radius: 5px;
    background: #ddd;
    color: #333;
  }
}

.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Microsoft YaHei";
  font-size: 15px;
  .question {
    width: 100%;
    height: 100%;
    // background: #fff;
    // box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 10px;
    box-sizing: border-box;
    h5 {
      font-weight: 500;
      line-height: 0.5rem;
      padding-top: 1.2rem;
      box-sizing: border-box;
      margin: 0;
      font-size: 0.4rem;
    }
    ul {
      padding-top: 0.8rem;
      margin: 0;
      // background: #efefef;
      li {
        list-style-type: none;
        // line-height: 40px;
        text-indent: 10px;
        &.active {
          background: rgba(73, 158, 255, 0.12);
        }
        &.color1 {
          color: #00a400;
        }
        &.color2 {
          color: #e8571b;
        }
        .sign {
          width: 16px;
          height: 16px;
          line-height: 16px;
          border-radius: 50%;
          display: inline-block;
          text-indent: 4.5px;
          border: 1px solid #555;
          color: #333;
          font-size: 12px;
          &.sign1 {
            /*成功*/
            color: #fff;
            background: #00a400;
            border: 1px solid #00a400;
          }
          &.sign2 {
            /*失败*/
            color: #fff;
            background: #e8571b;
            border: 1px solid #e8571b;
          }
        }
      }
    }
  }
}
.questionJS {
  width: 100vw;
  min-height: 100vh;
  background: rgb(142,181,233) url(../assets/question.png) no-repeat center top;
  background-size: 100%;
  overflow: hidden;
}
</style>
