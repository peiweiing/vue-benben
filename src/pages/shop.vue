<template>
    <div>
        <!-- <Shop v-for="(v,i) in arra" :key="i" :dianming="v.dianming" :img="v.img" :mingzi="v.mingzi" :shuliang="v.shuliang" :zhuangtai="v.zhuangtai" :fuwu="v.fuwu" :danjia="v.danjia" :heji="v.heji" :anniu="v.anjiu"></Shop> -->
        <Shop></Shop>
    </div>
</template>
<script>
import Shop from '../components/my/shop'
export default {
    components:{
        Shop
    },
    data(){
        return{
            arra:[
                {dianming:"小新蛋糕店",img:"../../static/img_shangping.png",mingzi:"巧克力蛋糕",shuliang:"1",zhuangtai:"待核销",fuwu:"共一件服务",danjia:"￥50.00",heji:"￥50.00",anniu:"确认核销"},
            ],
        }
    }
}
</script>
<style scoped>

</style>