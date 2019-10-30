<template>
    <div class="boxcs">
        <div class="divcs" v-for="(v,i) in arra" :key="i" @click="shopping()">
            <div class="head FX-sb">
                <p>{{v.dianming}}</p>
                <span>{{v.zhuangtai}}</span>
            </div>
            <div class="F-column div">
                <div class="topcs FX-sb">
                    <div class="flex">
                        <img class="img" :src="v.img" alt="">
                        <div class="textcs">
                            <p>{{v.mingzi}}</p>
                            <p class="pxp">×{{v.shuliang}}</p>
                        </div>
                    </div>
                    <p class="danjia">{{v.danjia}}</p>
                </div>
                <div class="centcs FX-fe">
                    <p>{{v.fuwu}}</p>
                    <p>合计：<span>{{v.heji}}</span></p>
                </div>
                <div class="endcs FX-fe">
                    <button>{{v.anniu}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // props:{
    //     dianming:String,
    //     zhuangtai:String,
    //     img:String,
    //     mingzi:String,
    //     shuliang:String,
    //     fuwu:String,
    //     danjia:String,
    //     heji:String,
    //     anniu:String
    // },
    data(){
        return{
            arra:[
                {dianming:"小新蛋糕店",img:"../../static/img_shangpin.png",mingzi:"巧克力蛋糕",shuliang:"1",zhuangtai:"待核销",fuwu:"共一件服务",danjia:"￥50.00",heji:"￥50.00",anniu:"确认核销"},
                {dianming:"小新蛋糕店",img:"../../static/twox3.png",mingzi:"巧克力蛋糕",shuliang:"1",zhuangtai:"待核销",fuwu:"共一件服务",danjia:"￥50.00",heji:"￥50.00",anniu:"确认核销"},
                {dianming:"小新蛋糕店",img:"../../static/img_shangpin.png",mingzi:"巧克力蛋糕",shuliang:"1",zhuangtai:"待核销",fuwu:"共一件服务",danjia:"￥50.00",heji:"￥50.00",anniu:"确认核销"},
            ],
        }
    },
    methods:{
        shopping(){
            this.$router.push("/shopping")
        }
    }
}
</script>
<style scoped>
.boxcs{
    padding:0.09rem 0.1rem;
    background-color: rgb(247, 247, 247);
}
.divcs{
    margin-bottom: 0.09rem;
    background-color: #fff;
    border-radius: 10px;
}
.head{
    border-bottom: 1px solid #ccc;
    padding: 0.125rem 0.1rem;
}
.head p{
    font-size:0.15rem;
    color: #414245;
    font-family: PingFang-SC-Bold;
}
.head span{
    font-size:0.14rem;
    color: #b1b1b1;
    font-family: PingFang-SC-Medium;
}
.div{
    margin-right: 0.1rem;
}
.topcs .img{
    margin: 0.1rem;
}
.topcs .danjia{
    margin-top: 0.2rem;
    font-size:0.15rem;
    color: #fe2c16;
    font-family: PingFang-SC-Bold;
}
.centcs{
    margin-bottom: 0.225rem;
}
.centcs p{
    margin-left: 0.08rem;
}
.textcs p{
    margin-top: 0.16rem;
    font-size:0.15rem;
    color: #414245;
    font-family: PingFang-SC-Medium;
}
.textcs .pxp{
    margin-top: 0.11rem;
    font-size:0.12rem;
    color: #414245;
    font-family: PingFang-SC-Medium;
}
.endcs button{
    width: 0.755rem;
    height: 0.25rem;
    font-size:0.12rem;
    color: #4adcdc;
    font-family: PingFang-SC-Medium;
    border-radius: 0.125rem;
    border:1px solid #4adcdc;
    background-color: #fff;
    margin-bottom: 0.1rem;
}
</style>