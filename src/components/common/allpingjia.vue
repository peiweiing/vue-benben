<template>
    <div>
        <div class="head FX-sb FY-c">
            <img @click="go()" src="static/nav_back.png" alt="">
            <p>全部评价</p>
            <p></p>
        </div>

        <div class="boxcs f3" v-for="(v,i) in arra" :key="i">

                <div class="topcs FY-c FX-sb">
                  <div class="imgcs F-xy">
                      <img :src="v.texturl" alt="">
                      <p>{{v.text}}</p>
                  </div>
                  <div class="FX-sb">
                        <span>{{v.riqi}}</span>
                  </div>
                </div>

                <div class="endcs">
                  <div class="img FY-c"> 
                    <van-rate :value="value" bind:change="onChange"></van-rate> 
                  </div>
                  <div class="end">
                    <p>{{v.pinglun}}</p>
                    <div>
                      <img :src="v.imgurl" alt="">
                      <img :src="v.imgurl" alt="">
                    </div>
                  </div>
                </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){ 
        return{ 
            value: "5",
            arra:[
                {text:"是二货呀",riqi:"2019-09-15",fenshu:"4.7",dizhi:"铜山万达广场4楼",pinglun:"味道是棒极了呀",imgurl:"../../static/img_02.png",texturl:"../../static/user_01.png",url:"/rechargemoney",km:"1.5km"},
                {text:"是饿货呀",riqi:"2019-09-15",fenshu:"4.7",dizhi:"铜山万达广场4楼",pinglun:"味道是不错的呀",texturl:"../../static/user_01.png",url:"/moduleone",km:"1.5km"},
                {text:"是额额啊",riqi:"2019-09-15",fenshu:"4.7",dizhi:"铜山万达广场4楼",pinglun:"味道是棒极了呀",texturl:"../../static/user_01.png",url:"/moduleone",km:"1.5km"},
            ]
        }
    },
    onChange(event) {
        this.setData({
        value: event.detail
        });
    },
    methods:{
        go(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.head{
    align-items: center;
    padding: 0.135rem 0.1rem;
    font-size:0.18rem;
    color: #333;
    font-family: PingFang-SC-Bold;
    border-bottom: 1px solid #ccc;
}
.boxcs{
  padding: 0.085rem 0.1rem 0.12rem 0;
  margin: 0 0 0 0.1rem;
  border-bottom: 1px solid #ccc;
}
.topcs{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.imgcs{
  margin-right: 0.1rem;
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-SC-Bold;
}
.imgcs p{
  margin-left: 0.12rem;
}
.endcs{
  margin-left: 0.48rem;
}
.end{
    font-size:0.12rem;
    color: #666;
    font-family: PingFang-SC-Medium;
}
.end p{
  margin: 0.15rem 0 0.12rem 0;
}
</style>