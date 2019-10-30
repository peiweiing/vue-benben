<template>
    <div class="boxcs">
        <div class="topcs FX-sb FY-c">
            <img @click="my()" src="static/nav_back.png" alt="">
            <p>订单管理</p>
            <p></p>
        </div>

        <div class="bspan"></div>

        <div class="textcs FX-sa">
            <router-link class="txt" to="/shop/quan">全部</router-link>
            <router-link class="txt" to="/shop/he">待核销</router-link>
            <router-link class="txt" to="/shop/ping">已评价</router-link>
            <router-link class="txt" to="/shop/wan">已完成</router-link>
            <router-link class="txt" to="/shop/tui">退款</router-link>
        </div>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        my(){
            this.$router.push('/my')
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
.topcs{
    margin: 0.135rem 0.1rem;
    font-size:0.18rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.topcs img{
    width: 0.13rem;
    height: 0.16rem;
}
.textcs{
    margin-top:0.125rem;
    margin-bottom: 0.125rem; 
    font-size:0.15rem;
    color: #414245;
    font-family: PingFang-SC-Bold;
}
 .bspan{
     border: 1px solid rgb(240, 236, 236);
 }
</style>