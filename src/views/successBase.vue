<template>
 <div>恭喜你完成初级挑战，获得初级奖品
     <p v-if="baseGift">{{baseGift}}</p>
     
    <div>
        <div>只能领取一次哟</div>
     <!-- <button :disabled="btnState==false" :class="{btnBg:btnState}" @click="actionToSenior">点击领取奖品</button> -->
     <!-- <button :disabled="btnState==false" :class="{btnBg:btnState}" @click="actionToQuestion">放弃,只领取初级奖品</button> -->
 </div>

 </div>

 
  
</template>

<script>
export default {
    data(){
        return{
            baseGift: localStorage.getItem('base_gift'),//获取之前选的奖品选项
            seniorGift: localStorage.getItem('senior_gift')
        }
    },
    methods:{
        
    }

}
</script>

<style>

</style>