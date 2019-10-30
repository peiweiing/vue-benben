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
                        <div class="img"> 
                            <van-rate :value="value" bind:change="onChange"></van-rate> 
                        </div>
                    </div>
                    <div class="rcs">
                        <button>关注</button>
                    </div>
                </div>

                <div class="endcs FX-sb">
                    <div>{{v.txt1}} {{v.txt2}} {{v.txt3}}</div>
                    <p>{{v.km}}</p>
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
                {text:"二乐拉面",txt1:"满20减9",txt2:"满50减15",txt3:"满70减30",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/rechargemoney",km:"1.5km"},
                {text:"二乐拉面",txt1:"满20减9",txt2:"满50减15",txt3:"满70减30",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/moduleone",km:"1.5km"},
                {text:"二乐拉面",txt1:"满20减9",txt2:"满50减15",txt3:"满70减30",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/moduleone",km:"1.5km"},
            ]
        }
    },
    onChange(event) {
    this.setData({
      value: event.detail
    });
  }
}
</script>
<style scoped>
.boxcs{
    border-bottom:1px solid #ccc;
}
.imgcs{
    margin-right: 0.1rem;
    margin-top: 0.225rem ;
    margin-bottom: 0.16rem;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.topcs{
    margin-top: 0.24rem;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.topcs .img{
    margin-top: 7px;
}
.topcs .rcs{
    width: 0.5rem;
    height: 0.25rem;
}
.topcs .rcs button{
    margin-top: 0.025rem;
    width: 0.5rem;
    height: 0.25rem;
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
    color: #333;
    font-family: PingFang-SC-Medium;
}
</style>>