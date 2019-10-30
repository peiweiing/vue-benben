<template>
    <div class="boxcs">
        <div class="divcs">
            <div class="head FX-sb">
                <p>{{dianming}}</p>
                <span>{{zhuangtai}}</span>
            </div>
            <div class="F-column div">
                <div class="topcs FX-sb">
                    <div class="flex">
                        <img class="img" :src="img" alt="">
                        <div class="textcs">
                            <p>{{mingzi}}</p>
                            <p class="pxp">×{{shuliang}}</p>
                        </div>
                    </div>
                    <p class="danjia">{{danjia}}</p>
                </div>
            </div>
        </div>
        <div class="divcs">
            <div class="mtb-20">
                <img src="static/icon_dingdan.png" alt="">
                <span>订单号</span>
            </div>
            <div class="ml-69">
                <p>{{dingdan}}</p>
            </div>
        </div>
        <div class="divcs">
            <div class="mtb-20">
                <img src="static/icon_yonghu.png" alt="">
                <span>用户信息</span>
            </div>
            <div class="ml-69">
                <div class="flex mb-20">
                    <p>{{myname}}</p>
                    <p class="ccc">{{mycode}}</p>
                </div>
                <div class="flex mb-20">
                    <p>{{dizhi}}</p>
                </div>
            </div>
        </div>
        <div class="divcs">
            <div class="mtb-20">
                <img src="static/icon_daodian.png" alt="">
                <span>到店使用</span>
            </div>
            <div class="ml-69">
                <p class="flex mb-20 ccc">服务</p>
                <div class="flex mb-20">
                    <p>
                        {{shangpin}}<span class="ccc">({{shuliang}}份)</span>
                     </p>
                    <p>{{jiage}}</p>
                </div>
            </div>
        </div>
        <div class="divcs">
            <div class="mtb-20">
                <img src="static/icon_tishi.png" alt="">
                <span>温馨提示</span>
            </div>
            <div class="ml-69">
                <div class="flex mb-20">
                    <span>有效期：</span>
                    <p>{{youxiaoqi}}(周末、法定节假日通用)</p>
                </div>
                <div class="flex mb-20">
                    <span>使用时间：</span>
                    <p>{{time}}</p>
                </div>
            </div>
        </div>
        <div class="divcs">
            <div class="mtb-20">
                <img src="static/icon_dingdanxinxi.png" alt="">
                <span>订单信息</span>
            </div>
            <div class="ml-69">
                <div class="flex mb-20">
                    <span>订单号：</span>
                    <p>{{dingdanhao}}</p>
                </div>
                <div class="flex mb-20">
                    <span>手机号：</span>
                    <p>{{mycode}}</p>
                </div>
                <div class="flex mb-20">
                    <span>消费时间：</span>
                    <p>{{xitime}}</p>
                </div>
                <div class="flex mb-20">
                    <span>付款时间：</span>
                    <p>{{futime}}</p>
                </div>
                <div class="flex mb-20">
                    <span>数量：</span>
                    <p>{{shuliang}}</p>
                </div>
                <div class="flex mb-20">
                    <span>总价：</span>
                    <p>{{heji}}</p>
                </div>
                <div class="flex mb-20">
                    <span>实付：</span>
                    <p>{{shifu}}</p>
                </div>
            </div>
        </div>
        <div class="divcs">
            <div class="mtb-20">
                <img src="static/icon_pingjia.png" alt="">
                <span>用户评价</span>
            </div>
            <div class="ml-69">
                <p>该用户还未评价</p>
            </div>
        </div>
        <div class="divcs FX-fe">
            <button>{{anniu}}</button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        dianming:String,
        zhuangtai:String,
        img:String,
        mingzi:String,
        shuliang:String,
        fuwu:String,
        danjia:String,
        heji:String,
        anniu:String
    },
}
</script>
<style scoped>
.boxcs{
    padding:0.09rem 0.1rem;
    background-color: rgb(247, 247, 247);
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.divcs{
    padding: 0.01rem 0.1rem;
    margin-bottom: 0.09rem;
    background-color: #fff;
    border-radius: 10px;
}
.ml-69{
    margin-left:0.345rem;
    margin-right: 0.1rem; 
}
.mb-20{
    margin-bottom: 0.1rem;
}
.mb-20 span{
    font-size:0.14rem;
    color: #ccc;
    font-family: PingFang-SC-Bold;
}
.mb-20 p{
    font-size:0.14rem;
    color: #414245;
    font-family: PingFang-SC-Medium;
}
.mtb-20{
    margin: 0.1rem 0.06rem;
}
.mtb-20 img{
    margin-right: 0.1rem;
}
.mtb-20 span{
    font-size:0.15rem;
    color: #414245;
    font-family: PingFang-SC-Bold;
}
.head p{
    font-size:0.15rem;
    color: #414245;
    font-family: PingFang-SC-Bold;
    padding-top: 0.095rem;
}
.head span{
    font-size:0.14rem;
    color: #b1b1b1;
    font-family: PingFang-SC-Medium;
    padding-top: 0.105rem;
}
.topcs .img{
    margin: 0.1rem 0;
}
.textcs{
    margin: 0.19rem 0.1rem 0.165rem;
}
.textcs .pxp{
    margin-top: 0.1rem;
}
.danjia{
    margin-top: 0.19rem;
}
.divcs button{
    width: 0.755rem;
    height: 0.25rem;
    font-size:0.12rem;
    color: #4adcdc;
    font-family: PingFang-SC-Medium;
    border-radius: 0.125rem;
    border:1px solid #4adcdc;
    background-color: #fff;
    margin: 0.12rem 0;
}
.ccc{
    color: #ccc;
}
</style>