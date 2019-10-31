<template>
    <div class="boxcs">
        <div class="topcs FX-sb FY-c">
            <img @click="my()" src="static/nav_back.png" alt="">
            <p>关于我们</p>
            <p></p>
        </div>
        <div class="F-column F-xy logo">
            <img src="static/img_shangpin.png" alt="">
            <span>v.1.0.3</span>
        </div>
        <div class="textcs">
            <span>会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介会员简介</span>
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
.logo img{
    width:0.7rem;
    height:0.7rem;
    margin-top: 0.25rem;
    margin-bottom: 0.095rem;
}
.logo span{
    font-size:0.15rem;
    color: #414245;
    font-family: PingFang-SC-Medium;
}
.textcs{
    padding: 0;
    margin: 0.435rem 0.15rem 0;
}
</style>