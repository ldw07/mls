<template>
  <div class="view">
      <Icon class="determin" type="ios-close-circle-outline" @click="actionToFirst"/>
      <!-- <button class="determin" @click="actionToFirst" id="back_btn">返回</button> -->

  </div>
</template>

<script>
export default {
    methods: {
      actionToFirst(){
        this.$router.back()
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
  width: 100vw;
  min-height: 100vh;
  background: rgb(44, 42, 66) url(../assets/rules.png) no-repeat center top;
  background-size: 100%;
  overflow: hidden;
}
#img_rule{
    width: 100vw;
}
#back_btn{
    position: relative;
    z-index: 30;
    font-size: 180%;
    color: rgba(255, 255, 255, 0);
    bottom: 10vh;
    width: 60vw;
    font-size: 0.35rem;
}

.determin {
  margin-top: 11.9rem;
  width: 68vw;
  height: 48px;
  font-size: 1rem;
  color: #fff;
  
}

</style>