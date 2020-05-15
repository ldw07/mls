<template>
  <div class="view">
    <div >
      <img src="@/assets/rules.png" alt="" id="img_rule" />
      <Button @click="actionToFirst" id="back_btn">返回</Button>
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
}
#img_rule{
    width: 100vw;
    border-width: 0px;
    height: 100vh;
}
#back_btn{
    position: relative;
    z-index: 30;
    font-size: 180%;
    color: red;
    bottom: 10vh;
    width: 60vw;
}


</style>