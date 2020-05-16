<template>
  <div class="select">
   
    <div class="base">
      <div class="base-item" :class="{'active': currentBaseIndex === index}" v-for="(item, index) in base" :key="index" @click="actionSelectBase(item,index)"></div>
    </div>

    <div class="senior">
      <div class="senior-item" :class="{'active': currentSeniorIndex === index}" v-for="(item, index) in senior" :key="index" @click="actionSelectSenior(item,index)"></div>
    </div>

    <button :disabled="btnState==false" class="btn" :class="{btnBg:btnState}" @click="actionToQuestion">选择基础礼和升级礼，开始答题</button>
    
    
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'select1',
  data() {
    return {
      currentBaseIndex: -1,
      currentSeniorIndex: -1,
      base: [
         '体脂秤',
         '血糖仪',
         '血压仪',
      ],
      senior: [
        '老人体检套餐',
        '办公族体检套餐'
      ],
      
    }
  },
  components: {
  },
  computed:{
     btnState(){//当两个框都被选中时btnState==true,利用这个计算属性来动态控制按钮的禁用和颜色
           return this.currentBaseIndex!==-1&&this.currentSeniorIndex!==-1
       }
  },
  methods: {
    actionSelectBase(item, index) {
      console.error(item)
      this.currentBaseIndex = index
      localStorage.setItem('base_gift', item)
    },
    actionSelectSenior(item, index) {
      console.error(item)
      this.currentSeniorIndex = index
      localStorage.setItem('senior_gift', item)//存储数据
    },

    actionToQuestion() {
      if(this.currentBaseIndex!=-1&&this.currentSeniorIndex!=-1){
        this.$router.push ({
        name:"question"
      })
      }else{
        
      }
      
    },
    actionToEnd() {
      this.$router.push ({
        name:"end"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  padding-top:2rem;
  width: 100vw;
  min-height: 100vh;
  background: rgb(142,181,233) url(../assets/reward_select.png) no-repeat center top;
  background-size: 100%;
}
.base {
  display: flex;
  align-items: center;
  justify-content: center;;
  &-item {
    width: 33vw;
    height: 3.6rem;
    &.active {
      position: relative;
      &::after {
        right: 0rem;
        bottom: 0.2rem;
        position: absolute;
        content: '';
        background: #f80;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
      }
    }
  }
}

.senior {
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;;
  &-item {
    width: 50vw;
    height: 3.6rem;
    &.active {
      position: relative;
      &::after {
        right: 0.1rem;
        bottom: 0.1rem;
        position: absolute;
        content: '';
        background: #f80;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
      }
    }
  }
}

.btn {
  width: 80vw;
  height: 1rem;
  border-radius: 0.6rem;
  border: none;
  margin: 20px auto 0;
  font-size: 0.35rem;
  font-weight: 600;
  font-family: '微软雅黑';
  &.btnBg{
    background: #1100ff;
    color: #fff;

    }
}




</style>
