<template>
    <div class="F-column">
        <div class="divcs">
            <router-link class="pxp" to="/tongcheng/tone">人气</router-link>
            <router-link class="txt" to="/tongcheng/ttwo">距离</router-link>
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
                {text:"一乐拉面",texturl:"../../static/twox3.png",imgurl:"../../static/one2x.png",url:"/moduleone"},
            ]
        }
    },
}
</script>
<style scoped>
 .divcs{
     margin-top: 0.145rem;
     font-size:0.15rem;
     color: #333;
     font-family: PingFang-SC-Bold;
 }
 .pxp{
     font-size:0.15rem;
     color: #333;
     font-family: PingFang-SC-Bold;
     margin-right: 0.35rem;
 }
 .txt{
     font-size:0.15rem;
     color: #333;
     font-family: PingFang-SC-Medium;
 }
</style>