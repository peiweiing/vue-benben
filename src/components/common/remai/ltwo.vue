<template>
    <div>
        <div class="boxcs flex" v-for="(v,i) in arra" :key="i">

            <div class="imgcs f1">
                <img :src="v.imgurl" alt="">
            </div>

            <div class="divcs f3">

                <div class="topcs FX-sb">
                    <p>{{v.text}}</p>
                </div>
                <div class="cencs">
                    <p>{{v.txt}}</p>
                </div>
                <div class="endcs FX-sb">
                    <strong>￥{{v.danjia}}</strong>
                    <p>1</p>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){ 
        return{
            shuliang:"",
            value:"5",
            arra:[
                {text:"二大份鸡排拉面",txt:"真的是一份大大大鸡排",danjia:"20.00",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/rechargemoney",km:"1.5km"},
                {text:"二大份鸡排拉面",txt:"真的是一份大大大鸡排",danjia:"20.00",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/moduleone",km:"1.5km"},
                {text:"二大份鸡排拉面",txt:"真的是一份大大大鸡排",danjia:"20.00",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/moduleone",km:"1.5km"},
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
    padding: 0.12rem 0.1rem;
}
.imgcs{
    margin-right: 0.1rem;
}
.topcs{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Medium;
}
.cencs{
    margin-top: 0.075rem;    
    font-size:0.12rem;
    color: #b1b1b1;
    font-family: PingFang-SC-Medium;
}
.endcs{
    margin-top: 0.15rem;
}
.endcs strong{
    font-size:0.18rem;
    color: #fe2c16;
    font-family: PingFang-SC-Bold;
}
.endcs p{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
</style>>