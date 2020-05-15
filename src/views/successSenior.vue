<template>
 <div>恭喜你完成高级挑战，获得高级奖品
     <p v-if="seniorGift">{{seniorGift}}</p>
     <div>
        <div>只能领取一次哟</div>
     <!-- <button :disabled="btnState==false" :class="{btnBg:btnState}" @click="actionToSenior">点击领取</button> -->
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
    }
}
</script>

<style>

</style>