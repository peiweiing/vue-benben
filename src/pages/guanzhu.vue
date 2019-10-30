<template>
    <div>
        <div class="mx-20px">
            <Guanzhu></Guanzhu>
        </div>
        <Tab class="tab"></Tab>
    </div>
</template>
<script>
import Tab from "../components/common/tabbar"
import Guanzhu from "../components/guanzhu/guanzhu"
export default {
    components:{
        Tab,
        Guanzhu
    }
}
</script>
<style scoped>
/* .tab{
    position: fixed;
    bottom: 0px;
} */
 .mx-20px{
     margin-left: 0.1rem;
     margin-right: 0.1rem;
 }
</style>