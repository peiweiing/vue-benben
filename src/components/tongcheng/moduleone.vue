<template>
    <div>
        <p class="pcs">同城服务</p>
        <div class="F-wrap">
            <div class="divcs F-xy F-column" v-for="(v,i) in arra" :key="i">
                <img :src="v.texturl" alt="">
                <p class="ptxt">{{v.text}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){ 
        return{
            arra:[
                {text:"美食",texturl:"../../static/tongcheng1x1.png",url:"/rechargemoney"},
                {text:"电影",texturl:"../../static/tongcheng2x1.png",url:"/moduleone"},
                {text:"酒店住宿",texturl:"../../static/tongcheng3x1.png",url:"/moduleone"},
                {text:"休闲娱乐",texturl:"../../static/tongcheng4x1.png",url:"/moduleone"},
                {text:"美食",texturl:"../../static/tongcheng5x1.png",url:"/rechargemoney"},
                {text:"电影",texturl:"../../static/tongcheng6x1.png",url:"/moduleone"},
                {text:"酒店住宿",texturl:"../../static/tongcheng7x1.png",url:"/moduleone"},
                {text:"休闲娱乐",texturl:"../../static/tongcheng8x1.png",url:"/moduleone"},
            ]
        }
    },
}
</script>
<style scoped>
.pcs{
    padding-top: 0.15rem;
    color: #333;
    font-size: 0.16rem;
    font: PingFang-SC-Bold;
}
.divcs{
    width: 25%;
    white-space:nowrap;
    margin: 0.1rem 0;
}
.divcs p{
    margin-top: 0.045rem;
}
.ptxt{
    color: #333;
    font-size: 0.13rem;
    font: PingFang-SC-Bold;
}
</style>