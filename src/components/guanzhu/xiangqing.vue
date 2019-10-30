<template>
    <div class="boxcs">
        <div class="head FX-sb FY-c">
            <img @click="go()" src="static/nav_back.png" alt="">
            <p>商家详情</p>
            <p></p>
        </div>
        <div class="divcs" v-for="(v,i) in arra" :key="i">
            <div class="topcs">
                <div class="top FX-sb">
                    <div class="">
                        <img :src="v.imgurl" alt="">
                    </div>

                    <div class="textcs FX-sb f3">
                        <div class="lcs">
                            <p>{{v.text}}</p>
                            <div class="FY-fe"> 
                                <van-rate :value="value" bind:change="onChange"></van-rate> 
                                <span> {{v.fenshu}}分</span>
                            </div>
                        </div>
                        <div class="rcs F-column">
                            <button>关注</button>
                            <p>{{renshu}}人已关注</p>
                        </div>
                    </div>
                </div>
                <div class="end F-column">
                    <strong>营业时间：09：00-21：00</strong>
                    <p>公告：本店暂不支持外卖服务哦~</p>
                    <div class="FY-c">
                        <span v-for="(v,i) in arrb" :key="i">{{v.txt}}</span>
                    </div>
                </div>
            </div>
            <div class="cencs">
                <strong>地址：</strong>
                <div class="FX-sb FY-c">
                    <p>{{dizhi}}矿大新街</p>
                    <img src="static/icon_dianhua.png" alt="">
                </div>
                <strong>简介：</strong>
                <div class="FX-sb FY-c">
                    <p>{{jianjie}}这是商家简介</p>
                </div>
                <strong>特色服务：</strong>
                <div class="FX-sb FY-c">
                    <p>{{jianjie}}一乐拉面还原经典场景</p>
                </div>
            </div>
            <div class="endcs FX-sb">
                <div class="txt">
                    <router-link name="one" class="pxp" to="/xiangqing/fuwu">服务</router-link>
                    <router-link name="one" to="/xiangqing/pingjia">评价</router-link>
                </div>
                <div class="allpingjia F-fe" @click="allpingjia">
                    全部评价>
                </div>
            </div>
                <div>
                    <router-view></router-view>
                </div>
            <!-- <div class="endcss">
                <Remai></Remai>
                <div class="txt">
                    <router-link class="pxp" name="two" to="/xiangqing/reone">热卖</router-link>
                    <router-link name="two" to="/xiangqing/retwo">推荐</router-link>
                </div>
                <div>
                    <router-view></router-view>
                </div>
            </div> -->
            <div class="tanchu F-xy">
                <div class="heji FX-sb FY-c">
                    <div class="lcs">共{{shuliang}}件服务</div>
                    <div class="rcs">￥{{heji}}</div>
                </div>
                <div class="fukuan F-xy">立即付款</div>
            </div>

        </div>
    </div>
</template>
<script>
// import Remai from './remai'
export default {
    components:{
        // Remai
    },
    data(){ 
        return{
            value:"5",
            arra:[
                {text:"二乐拉面",fenshu:"4.7",txt:"满20减9",txt2:"",txt3:"",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/rechargemoney",km:"1.5km"},
            ],
            arrb:[
                {txt:"满20减9"},
                {txt:"满30减15"},
                {txt:"满50减20"},
                {txt:"满70减30"},
            ]
        }
    },
    methods:{
        go(){
            this.$router.push("/guanzhu/gtwo")
        },
        allpingjia(){
            this.$router.push("/allpingjia")
        }
    }
}
</script>
<style scoped>
.head{
    align-items: center;
    padding: 0.135rem 0.1rem;
    font-size:0.18rem;
    color: #333;
    font-family: PingFang-SC-Bold;
    border-bottom: 1px solid #ccc;
}
.head img{
  padding: 0.06rem;
}
.divcs{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.topcs{
    margin: 0 0.1rem 0.15rem;
    border-bottom: 1px solid #ccc;
}
.topcs .top{
    padding: 0.12rem 0 0.145rem;
}
.textcs .lcs{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
    margin-left: 0.1rem;
}
.textcs .lcs div{
    font-size:0.12rem;
    color: #ffbc00;
    font-family: PingFang-SC-Bold;
    margin-top: 0.116rem;
}
.textcs .rcs button{
    padding: 0.06rem 0.115rem;
    white-space: nowrap;
    background-color: #4adcdc;
    font-size:0.14rem;
    color: #fff;
    font-family: PingFang-SC-Medium;
    border: none;
    border-radius: 0.04rem;
    margin-top: 0.1rem;
    margin-bottom: 0.07rem;
}
.textcs .rcs p{
    font-size:0.12rem;
    color: #333;
    font-family: PingFang-SC-Medium;
}
.topcs .end strong{
    padding-bottom: 0.11rem;
    font-size:0.14rem;
    color: #333;
    font-family: PingFang-SC-Medium;
}
.topcs .end p{
    font-size:0.12rem;
    color: #b1b1b1;
    font-family: PingFang-SC-Medium;
}
.topcs .end div{
    margin: 0.105rem 0 0.15rem;
}
.topcs .end span{
    font-size:0.11rem;
    color: #fc3737;
    font-family: PingFang-SC-Medium;
    padding: 0.06rem 0.055rem;
    border-radius: 6px;
    border: 1px solid #fc3737;
    margin-right: 0.08rem;
}
.cencs{
    margin: 0 0.1rem;
    padding-bottom: 0.145rem;
    border-bottom: 1px solid #ccc;
}
.cencs strong{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Medium;
}
.cencs p{
    margin: 0.06rem 0 0.1rem 0;
    font-size:0.13rem;
    color: #333;
    font-family: PingFang-SC-Medium;
}
.endcs .txt{
    margin: 0.145rem;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.endcs .txt .pxp{
    margin-right: 0.45rem;
}
.allpingjia{
    margin: 0.165rem 0.1rem 0 0;
    font-size:0.13rem;
    color: #b1b1b1;
    font-family: PingFang-SC-Medium;
}
/* .endcss .txt{
    padding: 0.16rem 0.245rem;
}
.endcss .txt .pxp{
    margin-right: 0.355rem;
} */
.tanchu{
    position: fixed;
    bottom: 0.1rem;
    width: 100%;
    height: 0.49rem;
    /* border-radius: 0.245rem; */
    font-size:0.15rem;
    color: #fff;
    font-family: PingFang-SC-Medium;
}
.tanchu .heji{
    border-radius: 0.245rem 0 0 0.245rem;
    background-color: #333;
    width: 2.565rem;
    height: 100%;
}
.tanchu .heji .lcs{
    margin-left: 0.205rem;
}
.tanchu .heji .rcs{
    margin-right: 0.15rem;
}
.tanchu .fukuan{
    border-radius: 0 0.245rem 0.245rem 0;
    background-color: #4adcdc;
    width: 0.99rem;
    height: 100%;
}
</style>