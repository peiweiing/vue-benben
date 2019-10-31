<template>
    <div class="boxcs">
        <div class="topcs FX-sb FY-c">
            <img @click="my()" src="static/nav_back.png" alt="">
            <p>商家入口</p>
            <p></p>
        </div>
        <div class="divcs">
            <div class="div FX-sb">
                <span>认证</span>
                <span>></span>
            </div>
            <div class="div FX-sb">
                <span>店铺营业开关</span>
                <mt-switch v-model="value"></mt-switch>
            </div>
            <div class="div FX-sb" v-for="(v,i) in arra" :key="i">
                <span>{{v.text}}</span>
                <span>{{v.txt}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:true,
            arra:[
                {text:"商铺信息",txt:">",url:"myvip"},
                {text:"订单管理",txt:">",url:"shangjia"},
                {text:"服务上架",txt:">",url:"mymoney"},
                {text:"服务管理",txt:">",url:"guanyu"},
                {text:"商家二维码",txt:">",url:"myset"},
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