<template>
    <div class="boxcs">
        <div class="topcs">
            <div class="FX-sb FY-c tpcs">
                <p></p>
                <p>我的</p>
                <img src="/static/xiaoxi1.png" alt="">
            </div>
            <div class="FX-sb FY-c">
                <div class="FY-c">
                    <img src="/static/user.png" alt="">
                    <p class="topp">是小新啊</p>
                </div>
                <img src="/static/btn_enter.png" alt="">
            </div>
        </div>
        <div class="divcs">
            <div class="div FX-sb" @click="digndan()">
                <p>我的订单</p>
                <p class="pcs">全部订单</p>
            </div>
            <div class="FX-sa dingdan">
                <div class="imgcs" v-for="(v,i) in arra" :key="i">
                    <router-link :to="v.url">
                        <img :src="v.img" alt="">
                        <p>{{v.text}}</p>
                    </router-link>
                </div>
            </div>
            <div class="div FX-sb" v-for="(v,i) in arrb" :key="i">
                <p>{{v.text}}</p>
                <p class="pcs">{{v.txt}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arra:[
                {text:"待使用",img:"../../static/icon_daishiyong.png",url:"/shop/he"},
                {text:"待评价",img:"../../static/icon_daipingjia.png",url:"/shop/ping"},
                {text:"已完成",img:"../../static/icon_yiwancheng.png",url:"/shop/wan"},
                {text:"退款",img:"../../static/icon_tukuan.png",url:"/shop/tui"},
            ],
            arrb:[
                {text:"会员",txt:">",img:"",url:""},
                {text:"商家入口",txt:">",img:"",url:""},
                {text:"我的钱包",txt:">",img:"",url:""},
                {text:"关于我们",txt:">",img:"",url:""},
                {text:"设置",txt:">",img:"",url:""},
            ],
        }
    },
    methods:{
        digndan(){
            this.$router.push("/shop")
        }
    }
}
</script>
<style scoped>
.boxcs{
    font-size:0.13rem;
    background: url('/static/nav_bg@2x.png') no-repeat;
}
.topcs{
    padding-left: 0.15rem;
    padding-right: 0.15rem; 
}
.tpcs{
    padding-top: 0.15rem;
}
.tpcs p{
    font-size:0.18rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.topp{
    margin-top: 0.45rem;
    margin-bottom:0.41rem;
    margin-left: 0.12rem;
    font-size:0.2rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.divcs{
    padding-left: 0.1rem;
    padding-right: 0.1rem; 
    padding-top:0.145rem;
    background-color: #fff;
}
.dingdan{
    padding-top: 0.15rem;
    padding-bottom: 0.15rem; 
}
.dingdan p{
    margin-top: 0.05rem;
}
.div{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Medium;
    border-bottom: 1px solid #ccc;
    padding-top:0.165rem;
    padding-bottom: 0.165rem; 
}
.div .pcs{
    font-size:0.13rem;
    color: #b1b1b1;
    font-family: PingFang-SC-Medium;
}
.imgcs{
    text-align: center;
    font-size:0.13rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
/* .router-link-exact-active{
    border-bottom: 2px solid #4adcdc;
} */
</style>