<template>
    <div class="F-column">
        <p class="font">附近服务</p>
        <div class="divcs">
            <router-link class="text" to="/fujin/one">分类</router-link>
            <router-link class="text" to="/fujin/two">分类</router-link>
            <router-link class="text" to="/fujin/three">分类</router-link>
            <router-link class="text" to="/fujin/four">分类</router-link>
            <router-link class="text" to="/fujin/five">分类</router-link>
            <router-link to="/fujin/six">分类</router-link>
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
 .font{
     margin-top: 0.15rem;
     font-size:0.16rem;
     color: #333;
     font-family: PingFang-Sc-Bold;
 }
 .divcs{
     margin-top: 0.145rem;
     font-size:0.15rem;
     color: #333;
     font-family: PingFang-Sc-Medium;
 }
 .text{
     margin-right: 0.28rem;
 }
</style>