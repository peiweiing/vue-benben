<template>
    <div>
        <div class="FY-c boxcs" v-for="(v,i) in arra" :key="i">

            <div>
                <img :src="v.imgurl" alt="">
            </div>

            <div class="F-column divcs">
                <div class="textcs FX-sb">
                    <div>
                        <p>{{v.text}}</p>
                        <div class="imgcs">
                            <img :src="v.texturl" alt="">
                            <img :src="v.texturl" alt="">
                            <img :src="v.texturl" alt="">
                            <img :src="v.texturl" alt="">
                        </div>
                    </div>
                    <div class="butcs">
                        <button>关注</button>
                    </div>
                </div>

                <div class="text FX-sb">
                    <div>{{v.txt1}} {{v.txt2}} {{v.txt3}}</div>
                    <p>{{v.km}}</p>
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
                {text:"二乐拉面",txt1:"满20减9",txt2:"满50减15",txt3:"满70减30",imgurl:"../../static/twox1.png",texturl:"../../static/onexin2.png",url:"/rechargemoney",km:"1.5km"},
                {text:"二乐拉面",txt1:"满20减9",txt2:"满50减15",txt3:"满70减30",imgurl:"../../static/twox1.png",texturl:"../../static/onexin2.png",url:"/moduleone",km:"1.5km"},
                {text:"二乐拉面",txt1:"满20减9",txt2:"满50减15",txt3:"满70减30",imgurl:"../../static/twox1.png",texturl:"../../static/onexin2.png",url:"/moduleone",km:"1.5km"},
            ]
        }
    },
}
</script>
<style scoped>
.boxcs{
    border-bottom: 1px solid #ccc;
    padding: 0.2rem 0px 0.16rem;
    position: relative;
}
.divcs{
    margin-left: 10px;
    width: 100%;

}
.textcs{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:0.7rem;

    /* height: 0.25rem; */

}
.textcs p{
    margin-bottom: 5px;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-Sc-Bold;
}
.textcs .imgcs{
    display: flex;
    margin-top: 0.03rem;
}
.butcs{
    position: absolute;
    top: -0.2rem;
    right: 0;
    height: 0.25rem;
    width: 0.5rem;
}
.butcs button{
    width: 0.5rem;
    height: 0.25rem;
    color: #fff;
    background-color: #4adcdc;
    border-radius: 10px;
    font-size:0.14rem;
    font-family: PingFang-Sc-Medium;
    border: none;
}

.text{
    margin-top: 0.09rem;
    font-size:0.12rem;
    color: #333;
    font-family: PingFang-Sc-Medium;
}
</style>>