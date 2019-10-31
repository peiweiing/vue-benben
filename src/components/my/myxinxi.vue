<template>
    <div class="boxcs">
        <div class="topcs FX-sb FY-c">
            <img @click="my()" src="static/nav_back.png" alt="">
            <p>个人信息</p>
            <p></p>
        </div>
        <div class="divcs">
            <div class="div FX-sb">
                <span>头像</span>
                <img src="static/user.png" alt="">
            </div>
        </div>
        <div class="divcs">
            <div class="div FX-sb">
                <span>昵称</span>
                <span>是小新啊</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
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
</style>