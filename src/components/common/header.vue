<template>
    <div class="FX-sb boxcs">
        <div class="F-xy lcs" @click="funa()">
            <p>苏州市</p>
            <img src="static/nav-cbb.png" alt="">
        </div>
        <div class="sou">
            <img src="../../../static/sou1.png" alt="">
            <input type="text" placeholder="搜索同城服务">
        </div>
        <div class="F-xy">
            <img class="imgcs" src="../../../static/sao1.png" alt="">
            <img src="../../../static/xiaoxi1.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        funa(){
            this.$router.push({path:"/chengshi"})
        }
    }
}
</script>
<style scoped>
.boxcs{
    padding: 0.09rem 0.15rem;
    font-size:0.16rem;
    color: #333;
    font-family: PingFang-Sc-Bold;
}
.boxcs .lcs img{
    padding-left: 0.1rem;
    padding-right: 0.125rem;
}
.boxcs p{
    font-size:0.16rem;
    color: #333;
    font-family: PingFang-Sc-Bold;
    white-space: nowrap;
}
.sou{
    font-size:0.13rem;
    color: #b1b1b1;
    font-family: PingFang-Sc-Bold;
    background-color: rgb(233, 230, 230);
    border-radius: 0.3rem;
    width:2.115rem ;
    height:0.27rem;
}
.sou img{
    padding: 0.1rem;
}
.sou input{
    border: none;
    color: #b1b1b1;
    background-color: rgb(233, 230, 230);
    font-size: 0.13rem;
    border-radius: 0.135rem;
}
.imgcs{
    margin-left: 0.2rem;
    margin-right: 0.1rem;
}
</style>