<template>
    <div>
        <div class="boxcs flex" v-for="(v,i) in arra" :key="i">

            <div class="imgcs f1">
                <img :src="v.imgurl" alt="">
            </div>

            <div class="divcs f3">

                <div class="topcs FX-sb">
                    <div class="lcs">
                        <p>{{v.text}}</p>
                        <div class="img F-xy"> 
                            <van-rate :value="value" bind:change="onChange"></van-rate> 
                            <span> {{v.fenshu}}分</span>
                        </div>
                        <div class="endcs">{{v.dizhi}}</div>
                    </div>
                    <div class="rcs">
                        <button>关注</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){ 
        return{
            value: "5",
            arra:[
                {text:"鸣人最爱的一乐拉面",fenshu:"4.7",dizhi:"铜山万达广场4楼",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/rechargemoney",km:"1.5km"},
                {text:"鸣人最爱的一乐拉面",fenshu:"4.7",dizhi:"铜山万达广场4楼",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/moduleone",km:"1.5km"},
                {text:"鸣人最爱的一乐拉面",fenshu:"4.7",dizhi:"铜山万达广场4楼",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/moduleone",km:"1.5km"},
            ]
        }
    },
    onChange(event) {
        this.setData({
        value: event.detail
        });
    },
}
</script>
<style scoped>
.boxcs{
    border-bottom:1px solid #ccc;
}
.imgcs{
    margin-right: 0.1rem;
    margin-top: 0.2rem ;
    margin-bottom: 0.15rem;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.topcs{
    align-items: center;
    margin-top: 0.24rem;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.topcs .img{
    margin-top: 7px;
}
.topcs .img span{
    font-size:0.12rem;
    color: #ffbc00;
    font-family: PingFang-SC-Bold;
}
.topcs .lcs{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.topcs .rcs{
    width: 0.5rem;
    height: 0.25rem;
}
.topcs .rcs button{
    padding: 0.06rem 0.115rem;
    white-space: nowrap;
    background-color: #4adcdc;
    font-size:0.14rem;
    color: #fff;
    font-family: PingFang-SC-Medium;
    border: none;
    border-radius: 0.04rem;
}
.endcs{
    margin-top: 0.12rem;
    font-size:0.12rem;
    color: #666;
    font-family: PingFang-SC-Medium;
}
</style>>