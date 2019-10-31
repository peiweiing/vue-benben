<template>
    <div>
        <!-- <p>热卖two</p> -->
          <div class="endcss flex">
              <div class="F-column FY-c lcs">
                  <router-link name="two" class="txt" to="/retwo/rone">折扣</router-link>
                  <router-link name="two" class="txt" to="/retwo/rtwo">本店特色</router-link>
                  <router-link name="two" class="txt" to="/retwo/rthree">鸡排拉面</router-link>
                  <router-link name="two" class="txt" to="/retwo/rfour">鸡排拉面</router-link>
                  <router-link name="two" class="txt" to="/retwo/rfive">鸡排拉面</router-link>
              </div>
              <div class="rcs f3">
                  <router-view></router-view>
              </div>
          </div>
    </div>
</template>
<script>
export default {
    
  data(){
      return{

      }
  },

}
</script>
<style scoped>
.lcs{
    background-color: rgb(244, 244, 244);
    font-size:0.14rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.lcs .txt{
    padding: 0.155rem 0.11rem;
}
</style>