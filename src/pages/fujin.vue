<template>
    <div>
        <div class="mx-20px">
            <Head></Head>
        </div>
        <div class="bspan"></div>
        <div class="mx-20px">
            <Swiper></Swiper>
            <One class="one"></One>
        </div>
        <div class="bspan"></div>
        <div class="mx-20px">
            <Two></Two>
        </div>
        <Tab class="tab"></Tab>
    </div>
</template>
<script>
import Tab from "../components/common/tabbar"
import Head from "../components/common/header"
import Swiper from "../components/common/swiper"
import One from "../components/fujin/moduleone"
import Two from "../components/fujin/moduletwo"
export default {
    components:{
        Tab,
        Head,
        Swiper,
        One,
        Two
    }
}
</script>
<style scoped>
/* .tab{
    position: fixed;
    bottom: 0;
} */
 .mx-20px{
     margin-left:0.1rem;
     margin-right:0.1rem;
 }
 .bspan{
     border: 1px solid rgb(240, 236, 236);
 }
</style>