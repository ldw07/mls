<template>
  <div>
    <div>
      <Button @click="begin">开始游戏</Button>
    </div>
    <div>
        <Button @click="viewRules">查看规则</Button>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        begin(){
            this.$router.push({
                name: 'home'
            })
        },
        viewRules(){
            this.$router.push({
                name: 'rules'
            })
        }
    }
};
</script>

<style>
</style>