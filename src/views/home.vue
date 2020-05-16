<template>
  <div class="home">
    <div class="login" :style="backgroundDiv">
        
        <!-- @blur="phone.test()" -->
      <!-- <div @click="actionToSelect">home  to select</div> -->
      <!-- <button @click="actionToSelect" id="toSelect">跳转到选择界面</button> -->
      <div class="input">
        <input class="phone input-style" type="tel" v-model="phone.val" placeholder="请输入手机号" maxlength="11">
        <!-- <Input
          size="large"
          class="phone input-style"
          :class="{'err-input' : phone.err}"
          v-model="phone.val"
          type="text"
          placeholder="请输入手机号"
          oninput="value=value.replace(/[^\d]/g,'')"
          maxlength="11"
        /> -->
        <Button :disabled="btnState==false" :class="{btnBg:btnState}" @click="actionToSelect">确认登录</Button>
      </div>
      
      

      <!-- <div @click="actionToEnd">点击这里到尾页</div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      backgroundDiv: {

      },
      hintShow: false, // 提示语显示
      hint: "信息填写错误", // 提示语
      input: "",
      /*
       *  val 为值,err为错误显示, test检验信息
       * */
      phone: {
        val: "",
        err: false,
        pass: false
      }
    };
  },
  computed: {
    btnState() {
      //当两个框都被选中时btnState==true,利用这个计算属性来动态控制按钮的禁用和颜色
      return this.val !== "";
    }
  },
  components: {},
  methods: {
    actionToSelect() {
      // currentPhone
      if ((/^1[3456789]\d{9}$/.test(this.phone.val))) {
        const value = JSON.parse(localStorage.getItem(this.phone.val));
        if (value) {
          //键值判断
          if (value.count >= 3) {
            // 弹框提示
            this.$Modal.info({
          title: "您已答满3次，无法再次开始答题",
          content: ""
        });
          } else {
            this.$router.push({
              name: "question"
            });
            console.log(123, value.count);
            // 跳转页面
            let count = value.count + 1;
            localStorage.setItem(
              this.phone.val,
              JSON.stringify({
                count: count,
                phoneNum: this.phone.val
              })
            ); //键值
            localStorage.setItem("phone", this.phone.val);
          }
        } else {
          // 跳转页面
          localStorage.setItem(
            this.phone.val,
            JSON.stringify({
              count: 1,
              phoneNum: this.phone.val
            })
          );
          localStorage.setItem("phone", this.phone.val);
          this.$router.push({
            name: "select"
          });
        }
      }else{
        this.$Message['error']({
                    background: true,
                    content: '请输入正确的手机号码'
                });

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
.home {
  min-height: 100vh;
}
button {
  outline: none;
  border: none;
}
.toSelect {
}
.button {
  // background: #f0f0f0;
  // margin: 20px auto 0;
  // color: rgb(129, 124, 124);
  // font-size: 20px;
  // text-align: center;
  // width: 75vw;
  // height: 40px;
  // line-height: 40px;
  // border-radius: 20px;
}
.btnBg {
  // margin: 80vh auto 0;
  margin-top: 0.4rem;
  width: 68vw;
  height: 48px;
  font-size: 17px;
  line-height: 40px;
  border-radius: 100px;
  background: rgb(17, 0, 255);
  color: #fff;
}

.login {
  width: 100vw;
  min-height: 100vh;
  background: #c1d7f3 url(../assets/login.png) no-repeat center top;
  background-size: 100%;
  // overflow: hidden;
}
.phone {
  width: 68vw;
  height: 0.9rem;
  font-size: 0.38rem;
  border: none;
  position: relative;
  left: 0.4rem;
  outline: none;
}

.input {
  padding-top: 10.3rem;
  margin: 0 auto 0;
  // height: 48vh;
}

</style>