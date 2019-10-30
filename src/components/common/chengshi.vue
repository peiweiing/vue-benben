<template>
    <div class="boxcs">
        <div class="head FX-sb FY-c">
            <img @click="go()" src="static/nav_back.png" alt="">
            <p>选择城市</p>
            <p></p>
        </div>
        <div class="divcs">
          <p>安庆</p>
          <p>安阳</p>
          <p>安康</p>
          <p>安顺</p>
          <p>安顺</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods:{
    go(){
        this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.boxcs{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-Sc-Bold;
}
.head{
    font-size:0.18rem;
    color: #333;
    font-family: PingFang-Sc-Bold;
  padding: 0.15rem 0.1rem;
  border-bottom: 1px solid #ccc;
}
.head img{
  padding: 0.06rem;
}
.divcs{
  margin-left: 0.1rem;
}
.divcs p{
    font-size:0.15rem;
    color: #333;
    font-family: PingFang-Sc-Medium;
  padding: 0.15rem;
  border-bottom: 1px solid #ccc;
}
</style>