<template>
    <div class="boxcs">
        <div class="head FX-sb FY-c">
            <img src="static/nav_back.png" alt="">
            <p>订单详情</p>
            <p></p>
        </div>
        <Shopping v-for="(v,i) in arra" :key="i" :dianming="v.dianming" :img="v.img" :mingzi="v.mingzi" :shuliang="v.shuliang" :zhuangtai="v.zhuangtai" :danjia="v.danjia"></Shopping>
    </div>
</template>
<script>
import Shopping from '../components/my/shopping'
export default {
    components:{
        Shopping
    },
    data(){
        return{
            arra:[
                {dianming:"小新蛋糕店",img:"../../static/img_shangpin@2x.png",mingzi:"巧克力蛋糕",shuliang:"1",zhuangtai:"待核销",danjia:"￥50.00"},
            ],
        }
    }
}
</script>
<style scoped>

.boxcs{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.head{
    font-size:0.18rem;
    color: #333;
    font-family: PingFang-SC-Bold;
    margin: 0.135rem 0.1rem;
}
.head img{
    width: 0.13rem;
    height: 0.16rem;
}
</style>