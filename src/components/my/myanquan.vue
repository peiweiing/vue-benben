<template>
    <div class="boxcs">
        <div class="topcs FX-sb FY-c">
            <img @click="my()" src="static/nav_back.png" alt="">
            <p>设置</p>
            <p></p>
        </div>
        <div class="divcs">
            <div v-for="(v,i) in arra" :key="i">
                <router-link :to="v.url">
                    <div class="div FX-sb">
                        <span>{{v.text}}</span>
                        <span>{{v.txt}}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arra:[
                {text:"登录密码",txt:">",url:""},
                {text:"支付密码",txt:">",url:""},
                {text:"修改手机号",txt:">",url:""},
                {text:"退出账号",txt:">",url:""},
            ],
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
.div :nth-child(2){
    color: #Ccc;
}
</style>