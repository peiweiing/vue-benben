<template>
    <div class="boxcs">
        <div class="topcs FX-sb FY-c">
            <img @click="my()" src="static/nav_back.png" alt="">
            <p>我的钱包</p>
            <p></p>
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
.divcs{
    margin-left: 0.1rem;
}
.div{
    padding: 0.17rem 0;
    padding-right: 0.1rem;
    border-bottom: 1px solid #ccc;
}
.div :nth-child(2){
    color: #Ccc;
}
</style>