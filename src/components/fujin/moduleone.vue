<template>
    <div class="F-column">
        <p class="font">同城人气榜</p>
        <div class="boxcs FY-c">
            <div class="divcs" v-for="(v,i) in arra" :key="i" @click="neirong(v.url)">
                <img class="img" :src="v.imgurl" alt="">
                <div class="textcs">
                    <img class="imgcs" :src="v.texturl" alt="">
                    <p class="pcs">{{v.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){ 
        return{
            arra:[
                {text:"一乐拉面",texturl:"../../static/twox3.png",imgurl:"../../static/one2x.png",url:"/rechargemoney"},
                {text:"一乐拉面",texturl:"../../static/twox3.png",imgurl:"../../static/one2x.png",url:"/rechargemoney"},
                {text:"一乐拉面",texturl:"../../static/twox3.png",imgurl:"../../static/one2x.png",url:"/moduleone"},
                {text:"一乐拉面",texturl:"../../static/twox3.png",imgurl:"../../static/one2x.png",url:"/moduleone"},
            ]
        }
    },
}
</script>
<style scoped>
 .font{
    margin-top: 0.15rem;
    font-size:0.16rem;
    color: #333;
    font-family: PingFang-SC-Bold;
 }
 .boxcs{
    font-size:0.16rem;
    color: #333;
    font-family: PingFang-SC-Bold;
    padding-top:0.1rem;
    padding-bottom: 0.14rem;
     width:100%;
     overflow: auto;
 }
 .divcs{
     width: 1.62rem;
     height:0.945rem;
     margin-right: 0.1rem;
 }
 .textcs{
     font-size:0.14rem;
     color: #333;
     border-radius:0 0 10px 10px;
     background-color: #fff;
     box-shadow:2px 2px 4px #ccc; 
     font-family: PingFang-Sc-Bold;
 }
 .divcs>img{
     width: 1.62rem;
     height:0.605rem;
     border-radius: 10px 10px 0 0 ;
 }
 .imgcs{
     position: relative;
     float: left;
     bottom: 0.25rem;
     left: 12px;
     margin-right: 0.2rem;
 }
 .pcs{
     padding-top: 0.1rem;
     padding-bottom: 0.1rem;
 }
</style>