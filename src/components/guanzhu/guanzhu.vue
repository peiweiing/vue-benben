<template>
    <div class="F-column">
        <div class="head FX-sb FY-c">
            <p></p>
            <p>关注</p>
            <img src="static/xiaoxi1.png" alt="">
        </div>
        <div class="bspan"></div>
        <div class="divcs FX-sa">
            <router-link class="pxp" to="/guanzhu/gone">我的关注</router-link>
            <router-link class="txt" to="/guanzhu/gtwo">商家推荐</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){ 
        return{
            arra:[
                {text:"一乐拉面",texturl:"../../static/twox3.png",imgurl:"../../static/one2x.png",url:"/rechargemoney"},
                {text:"一乐拉面",texturl:"../../static/twox3.png",imgurl:"../../static/one2x.png",url:"/moduleone"},
            ]
        }
    },
}
</script>
<style scoped>
.head{
    padding: 0.135rem 0;
     font-size:0.18rem;
     color: #333;
     font-family: PingFang-SC-Bold;
}
.head img{
  padding: 0.06rem;
}
 .divcs{
     margin-top: 0.12rem;
     margin-bottom: 0.04rem;
     font-size:0.15rem;
     color: #333;
     font-family: PingFang-SC-Bold;
 }
 .pxp{
     font-size:0.15rem;
     color: #333;
     font-family: PingFang-SC-Bold;
 }
 .txt{
     font-size:0.15rem;
     color: #333;
     font-family: PingFang-SC-Medium;
 }
 .bspan{
     border: 1px solid rgb(240, 236, 236);
 }
</style>