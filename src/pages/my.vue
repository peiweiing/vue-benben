<template>
    <div>
        <My></My>
        <Tab class="tab"></Tab>
    </div>
</template>
<script>
import Tab from "../components/common/tabbar"
import My from '../components/my/my'
export default {
    components:{
        Tab,
        My
    }
}
</script>
<style scoped>
/* .tab{
    position: sticky;
    bottom: 0;
} */

</style>