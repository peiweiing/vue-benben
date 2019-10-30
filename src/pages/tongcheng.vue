<template>
    <div>
        <div class="mx-20px">
            <Head></Head>
        </div>
        <div class="bspan"></div>
        <div class="mx-20px">
            <Swiper></Swiper>
            <Tone class="one"></Tone>
        </div>
        <div class="bspan"></div>
        <div class="mx-20px">
            <Ttwo></Ttwo>
        </div>
        <Tab class="tab"></Tab>
    </div>
</template>
<script>
import Tab from "../components/common/tabbar"
import Head from "../components/common/header"
import Swiper from "../components/common/swiper"
import Tone from "../components/tongcheng/moduleone"
import Ttwo from "../components/tongcheng/moduletwo"
export default {
    components:{
        Tab,
        Swiper,
        Head,
        Tone,
        Ttwo
    }
}
</script>
<style scoped>
/* .tab{
    position: sticky;
    bottom: 0;
} */
 .mx-20px{
     margin-left: 0.1rem;
     margin-right: 0.1rem;
 }
 .bspan{
     border: 1px solid rgb(240, 236, 236);
 }
</style>