<template>
  <div class="home">
    <!-- <div @click="actionToQuestion">点击这里跳转到答题页面</div>
    
    <div @click="actionToEnd">点击这里到尾页</div> -->

    <div class="type">
		  <h3 class="title">基础奖品</h3>
      <!-- <img src="" alt=""> -->
        <div class="item" :class="{ 'active': currentBaseIndex === index}" v-for="(item,index) in base" :key="index" @click="actionSelectBase(item, index)">
            <span class="rank">奖品{{index + 1}}</span>
            <span class="name">{{item}}</span>
      </div>
  	</div>

    <div class="type">
		  <h3 class="title">高级奖品</h3>
      <!-- <img src="" alt=""> -->
        <div class="item" :class="{ 'active': currentSeniorIndex === index}" v-for="(item,index) in senior" :key="index" @click="actionSelectSenior(item, index)">
            <span class="rank">奖品{{index + 1}}</span>
            <span class="name">{{item}}</span>
      </div>
  	</div>


    <!-- <div class="next-box" @click="actionToQuestion">开始答题</div> -->

    <Button :disabled="btnState==false" :class="{btnBg:btnState}" @click="actionToQuestion">选择奖品，开始答题</Button>
    
    
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'select',
  data() {
    return {
      currentBaseIndex: -1,
      currentSeniorIndex: -1,
      base: [
         '血糖仪',
         '血压仪',
         '体脂秤'
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
.type {
  border: 1px solid #ddd;
  padding: 20px;

  .title {

  }
  .item { 
    margin-bottom: 4px;
    &.active {
      color: #318ff5;
    }
    .rank {
      margin-right: 8px;

    }
    .name {

    }

  }
}
.next-box {
  margin: 20px auto 0;
  background: rgb(255, 136, 0);
  color: #fff;
  font-size: 20px;
  text-align: center;
  width: 75vw;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
}
button{
  background:#F0F0F0;
  margin: 20px auto 0;
  color: rgb(129, 124, 124);
  font-size: 20px;
  text-align: center;
  width: 75vw;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
}
.btnBg{
  margin: 20px auto 0;
  background: rgb(255, 136, 0);
  color: #fff;
 
}



</style>
