<template>
    <div class="boxcs">
        <div class="head FX-sb FY-c">
            <img @click="go()" src="static/nav_back.png" alt="">
            <p>提交订单</p>
            <p></p>
        </div>
        <div class="divcs" v-for="(v,i) in arra" :key="i">

                <div class="top">
                    {{v.text}}
                </div>

                <div class="div flex">

                    <div class="lcs">
                        <img :src="v.imgurl" alt="">
                    </div>
                    <div class="FX-sb f3">
                        <div class="cencs F-column">
                            <p>{{v.txt}}</p>
                            <span>×{{shuliang}}</span>
                        </div>
                        <div class="rcs FY-c">
                            <strong>￥{{danjia}}</strong>
                        </div>
                    </div>

                </div>

                <div class="youhui FX-sb FY-c">
                    <p>满减优惠</p>
                    <span>-￥{{quan}}</span>
                </div>
                <div class="beizhu">
                    <p>备注</p>
                    <textarea class="text" name="" id="" cols="29" rows="9" placeholder="请输入备注内容" style="resize:none"></textarea>
                </div>
            
        </div>
        
        <div class="tanchu F-xy">
            <div class="heji FX-sb FY-c">
                <div class="lcs">共{{shuliang}}件服务</div>
                <div class="rcs">￥{{heji}}</div>
            </div>
            <div class="fukuan F-xy">提交订单</div>
        </div>

    </div>
</template>
<script>
// import Remai from './remai'
export default {
    components:{
        // Remai
    },
    data(){ 
        return{
            value:"5",
            arra:[
                {text:"二乐拉面",fenshu:"4.7",txt:"一大份鸡排拉面",txt2:"",txt3:"",imgurl:"../../static/twox2.png",texturl:"../../static/onexin2.png",url:"/rechargemoney",km:"1.5km"},
            ],
        }
    },
    methods:{
        go(){
            this.$router.go(-1)
        },
        allpingjia(){
            this.$router.push("/allpingjia")
        }
    }
}
</script>
<style scoped>
.head{
    font-size:0.18rem;
    color: #333;
    font-family: PingFang-SC-Bold;
    padding: 0.135rem 0.1rem;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
}
.head img{
  padding: 0.06rem;
}
.divcs{
    margin: 0 0.1rem;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.top{
    padding: 0.135rem 0;
    border-bottom: 1px solid #ccc;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.div{
    border-bottom: 1px solid #ccc;
}
.div .lcs{
    margin: 0.14rem 0;
}
.div .cencs{
    margin: 0.17rem 0.11rem;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Medium;
}
.div .cencs span{
    margin-top: 0.31rem;
    align-content: flex-start;
    font-size:0.12rem;
    color:#b1b1b1;
    font-family: PingFang-SC-Medium;
}
.div .rcs{
    font-size:0.18rem;
    color: #fe2c16;
    font-family: PingFang-SC-Bold;
}
.youhui{
    padding: 0.15rem 0;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Medium;
    border-bottom: 1px solid #ccc;
}
.youhui span{
    font-size:0.15rem;
    color: #fe2c16;
    font-family: PingFang-SC-Bold;
}
.beizhu{
    border-bottom: 1px solid #ccc;
    font-family: PingFang-SC-Medium;
    font-size:0.15rem;
}
.beizhu p{
    color: #333;
    margin: 0.15rem 0 0.1rem 0;
}
.beizhu .text{
    color: #b1b1b1;
    width: 100%;
    border:none;
    background-color: #fff;
}

.tanchu{
    position: fixed;
    bottom: 0.1rem;
    width: 100%;
    height: 0.49rem;
    /* border-radius: 0.245rem; */
    font-size:0.15rem;
    color: #fff;
    font-family: PingFang-SC-Medium;
}
.tanchu .heji{
    border-radius: 0.245rem 0 0 0.245rem;
    background-color: #333;
    width: 2.565rem;
    height: 100%;
}
.tanchu .heji .lcs{
    margin-left: 0.205rem;
}
.tanchu .heji .rcs{
    margin-right: 0.15rem;
}
.tanchu .fukuan{
    border-radius: 0 0.245rem 0.245rem 0;
    background-color: #4adcdc;
    width: 0.99rem;
    height: 100%;
}
</style>