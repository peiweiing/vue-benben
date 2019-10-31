<template>
    <div class="boxcs">
        <div class="topcs FX-sb FY-c">
            <img @click="my()" src="static/nav_back.png" alt="">
            <p>会员</p>
            <p></p>
        </div>
        <div class="yinvip">
            <div class="top F-column">
                <p>月会员VIP</p>
                <span>开通会员享会员特权</span>
            </div>
            <div class="end FY-c">
                <p>开通VIP</p>
                <span>￥88</span>
            </div>
        </div>
        <div class="jinvip">
            <div class="top F-column">
                <p>年会员VIP</p>
                <span>享更多的会员特权+专属权益</span>
            </div>
            <div class="end FY-c">
                <p>开通VIP</p>
                <span>￥88</span>
            </div>
        </div>
        <div class="textcs">
            <span>会员简介：</span>
            <span>会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介</span>
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
    padding: 0.135rem 0.1rem ;
    font-size:0.18rem;
    color: #333;
    font-family: PingFang-SC-Bold;
    border-bottom:1px solid #Ccc;
}
.topcs img{
    padding: 0.06rem;
}
.yinvip{
    padding-bottom: 0.13rem;
    margin: 0.1rem 0.425rem;
    background: url('../../../static/img_vip.png') no-repeat;
    background-size:2.9rem 1.5rem; 
}
.jinvip{
    padding-bottom: 0.13rem;
    margin: 0.1rem 0.425rem;
    background: url('../../../static/img_vip01@2x.png') no-repeat;
    background-size:2.9rem 1.5rem; 
}
.top p{
    font-size:0.18rem;
    color: #333;
    font-family: PingFang-SC-Bold;
    margin: 0.24rem 0 0.135rem 0.27rem;
}
.top span{
    font-size:0.14rem;
    color: #333;
    font-family: PingFang-SC-Medium;
    margin-left: 0.255rem;
}
.end{
    width: 1.5rem;
    height: 0.27rem;
    border-radius: 27px;
    color: #fff;
    background-color: #898a8a;
    margin-top: 0.32rem;
    margin-left: 0.25rem;
    /* padding: 0.065rem 0.16rem; */
}
.end p{
    margin-left:0.16rem; 
    margin-right: 0.1rem;
}
.jinvip .top p,
.jinvip .top span{
    color: #fff;
}
.jinvip .end {
    color: #333;
    background-color: #d6d7d7;
}

.textcs{
    padding: 0;
    margin: 0.3rem 0.15rem 0;
}
</style>