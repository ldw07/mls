<template>
  <div class="view">
    <div> 
      <img src="@/assets/rules.png" alt="" id="img_rule" />
      <button class="determin" @click="actionToFirst" id="back_btn">返回</button>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        actionToFirst(){
      this.$router.push({
        name: "first"
      })
    }
    }

};
</script>

<style>
body{
    position: relative;
    left: 0px;
    width: 100vw;
    background-color: #8eb5e9; 
}
.view {
  background: #8eb5e9;  
  width: 100vw;
  min-height: 100vh;
}
#img_rule{
    width: 100vw;
}
#back_btn{
    position: relative;
    z-index: 30;
    font-size: 180%;
    color: white;
    bottom: 10vh;
    width: 60vw;
    font-size: 0.35rem;
}

.determin {
  margin-top: 0.2rem;
  width: 68vw;
  height: 48px;
  font-size: 17px;
  line-height: 40px;
  border-radius: 100px;
  background: rgb(17, 0, 255);
  color: #fff;
  
}

</style>