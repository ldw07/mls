<template>
  <div class="first">
    <div>
      <button class="begin" @click="begin"></button>
    </div>
    <div>
      <button class="seeRules" @click="viewRules"></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    begin() {
      this.$router.push({
        name: "home"
      })
    },
    viewRules() {
      this.$router.push({
        name: "rules"
      });
    }
  }
};
</script>
 
<style>
.first {
  width: 100vw;
  min-height: 100vh;
  background: rgb(44, 42, 66) url(../assets/load.png) no-repeat center
    top;
  background-size: 100%;
  overflow: hidden;
}

.begin {
  margin-top: 9.2rem;
    width: 25vw;
    height: 14vh;
    /* font-size: 17px; */
    /* line-height: 40px; */
    border-radius: 50%;
    background: none;
}

.seeRules {
  margin-top: 0.1rem;
    width: 19vw;
    height: 0.5rem;
    /* font-size: 0.3rem; */
    /* line-height: 40px; */
    border-radius: 100px;
    /* color: #fff; */
    background: none;
}
</style>