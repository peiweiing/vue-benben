<template>
  <van-tabbar v-model="active" inactive-color="#777777" active-color="#000000">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
      <span>{{item.title}}</span>
      <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: "",
      tabbars: [
        {
          name: "/fujin/one",
          title: "附近",
          normal:
            // "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx2.png",
            "static/icon_fujin.png",
          active:
            // "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-fx.png"
            "static/icon_fujin_pre.png"
        },
        {
          name: "/tongcheng/tone",
          title: "同城",
          normal:
            // "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx.png",
            "static/icon_tongcheng.png",
          active:
            // "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx2.png"
            "static/icon_tongcheng_pre.png"
        },
        {
          name: "/guanzhu/gone",
          title: "关注",
          normal:
            // "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx.png",
            "static/icon_guanzhu.png",
          active:
            // "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-xx2.png"
            "static/icon_guanzhu_pre.png"
        },
        {
          name: "/my",
          title: "我的",
          normal:
            // "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd.png",
            "static/icon_yonghu.png",
          active:
            // "http://sucai.suoluomei.cn/sucai_zs/images/20190910093117-wd2.png"
            "static/icon_wode_pre.png"
        }
      ]
    };
  },
  methods: {},
  //通过路由跳转判断选中的样式
  created() {
    if (this.$route.name == "fujin/one") {
      this.active = 0;
    } else if (this.$route.name == "tongcheng/tone") {
      this.active = 1;
    } else if (this.$route.name == "guanzhu/gone") {
      this.active = 2;
    } else if (this.$route.name == "my") {
      this.active = 3;
    }
  }
};
</script>

<style>
</style>