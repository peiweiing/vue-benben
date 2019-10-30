<template>
    <div class="boxcs">
        <div class="imgcs F-xy">
          <img src="static/img_01@2x.png" alt="">
        </div>
        <div class="endcss">
          <div class="txt">
              <router-link class="pxp" name="two" to="/fuwu/reone">热卖</router-link>
              <router-link name="two" to="/fuwu/retwo">推荐</router-link>
          </div>
          <div>
              <router-view></router-view>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    
  data(){
      return{
        active: "",
      }
  },

}
</script>
<style scoped>
.imgcs{
  margin:0 0.1rem;
}
.endcss{
    font-size:0.14rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.endcss .txt{
    padding: 0.16rem 0.245rem;
}
.endcss .txt .pxp{
    margin-right: 0.355rem;
}
</style>