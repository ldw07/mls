<template>
  <div class="home">
    <div class="input">
      <Input
        class="phone input-style"
        :class="{'err-input' : phone.err}"
        v-model="phone.val"
        type="text"
        placeholder="请输入手机号"
        oninput="value=value.replace(/[^\d]/g,'')"
        maxlength="11"
      />
      <!-- @blur="phone.test()" -->
    </div>
    <!-- <div @click="actionToSelect">home  to select</div> -->
    <!-- <button @click="actionToSelect" id="toSelect">跳转到选择界面</button> -->
    <Button :disabled="btnState==false" :class="{btnBg:btnState}" @click="actionToSelect">确定</Button>

    <!-- <div @click="actionToEnd">点击这里到尾页</div> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
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
      ///^1[3456789]\d{9}$/.test(this.phone.val)
      if (this.phone.val) {
        const value = JSON.parse(localStorage.getItem(this.phone.val));
        if (value) {
          //键值判断
          if (value.count >= 3) {
            // 弹框提示
            var c = window.alert(
              //有没有按钮
              "您已答满3次，无法再次开始答题"
            );
          } else {
            this.$router.push({
              name: "question",
            });
            // console.log(123, value.count);
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
            this.$router.push ({
          name:"select"
        })
        }
      }else{
        window.alert('请输入正确的手机号码')
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
.toSelect {
}
button {
  background: #f0f0f0;
  margin: 20px auto 0;
  color: rgb(129, 124, 124);
  font-size: 20px;
  text-align: center;
  width: 75vw;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
}
.btnBg {
  margin: 20px auto 0;
  background: rgb(255, 136, 0);
  color: #fff;
}
</style>