<template>
    <div class="boxcs">
        <div class="FX-sb top">
            <div></div>
            <img  @click="my()" src="static/login_guanbi.png" alt="">
        </div>
        <div v-if="loading"><img class="boximg" src="static/loading.gif" alt=""></div>
        <div v-else>
            <div class="login">登录</div>
            <div class="logincs">
                <div class="divcs F-column">

                    <div class="div FY-c">
                        <img src="static/login_sj.png" alt="">
                        <input id="userId" :class="dool ? 'inputcs': 'inputcs xiahuared'" type="phone" name="username" placeholder="请输入手机号"  @blur="login()" v-model="username">
                    </div>

                    <div class="div FY-c FX-sb">
                        <div>
                            <img src="static/login_mm.png" alt="">
                            <input class="inputcs" :type="pwdtype"  name="userpass" placeholder="请输入密码" v-model="userpwd">
                        </div>
                        <img :src="openeye" alt="" @click="changetype">
                    </div>

                    <div class="textcs FX-sb">
                        <span @click="forget()">忘记密码</span>
                        <span @click="register()">注册</span>
                    </div>

                </div>

                <div class="main">
                    <input  :disabled="btnbooll" :class="btnbooll ? 'butcs butcss' : 'butcs'" type="button" value="登录" @click="onlogin()">
                </div>
            </div>
            <div class="url"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",//登录页面用户名
            userpwd:"",//密码
            // btnbooll:true,//判断输入框内是否有值的真假

            // loading:true,//loading延时加载
            pwdtype: 'password', // 密码类型
            openeye: require('../../../static/login_yanjing.png'), //图片地址
        }
    },
    created(){
        let that=this
        setTimeout(function(){
            that.loading=false
        },1000)
    },
    methods:{
        changetype() {
            this.pwdtype = this.pwdtype === 'password' ? 'text' : 'password';
            this.openeye = this.openeye == require("../../../static/login_yanjing.png") ? require("../../../static/login_yanjing_01.png") : require("../../../static/login_yanjing.png");
        },
        my(){
            this.$router.push({
                path: "/my",
            });
        },
        login(){
            if(this.loginname!=""){
                this.namecode="1";
                // this.dool=true;
                this.axios({
                    url:"http://39.107.105.57:8084/user/findUser",
                    method:"get",
                    data:{
                        username:this.loginname
                    }
                }).then((ok)=>{
                })
            }else{
                this.namecode="0";
            }
        },
        register(){
            this.$router.push({
                path: "/register",
            });
        },
        forget(){
            this.$router.push({
                path: "/forget",
            });
        },
        onlogin(){//用户名登录
            let ls = localStorage;
            if(this.loginname!=""){
                this.axios({
                url:"http://39.107.105.57:8084/user/loginUser",
                method:"post",
                params:{
                    username:this.username,
                    password:this.userpwd
                }
                
                }).then((ok)=>{
                if(ok.data.message == "操作成功！"){
                    let ls = localStorage;
                    ls.setItem("用户名",ok.data.queryResult.user.id)
                    this.$toast.success("登录成功！");
                    this.$router.push("/home");
                }else{
                    this.$toast.fail("登录失败！");
                }
                })
            }
        }
    },
    // watch:{
    //     username(){
    //         if(this.namecode=="1"&&this.username!=""&&this.userpwd!=""){
    //             this.btnbooll=false
    //         }else{
    //             this.btnbooll=true
    //         }
    //     },
    //     userpwd(){
    //         if(this.namecode=="1"&&this.username!=""&&this.userpwd!=""){
    //             this.btnbooll=false
    //         }else{
    //             this.btnbooll=true
    //         }
    //     }
    // }
}
</script>
<style scoped>
.boxcs{
    height: 100%;
    color: #333;
    font-size: 0.15rem;
    font-family: PingFang-Sc-Medium;
}
.boximg{
    width: 100%;
}
.top{
    margin-right: 0.2rem;
    margin-top: 0.2rem;
}
.login{
    margin-left: 0.3rem;
    margin-top: 1rem;
    color: #333;
    font-size: 0.22rem;
    font-family: PingFang-Sc-Bold;
}
.logincs{
    margin: 0% 0.3rem;
}
.divcs{
    padding-top:0.5rem ;
    padding-bottom: 0.835rem;
}
.div{
    /* width: 100%; */
    border-bottom: 1px solid rgb(224, 224, 224);
    padding-bottom: 0.1rem;
    padding-top: 0.3rem;
}
.textcs{
    margin-top: 0.15rem;
}
.inputcs{
    border: none;
    background-color: #fff;
    padding-left: 0.15rem;
    /* outline:0; */
    /* border-bottom:1px solid #000; */
}
.butcs{
    /* outline:0; */
    width: 3.18rem;
    height: 0.45rem;
    color: #fff;
    background-color:#4adcdc;
    border-radius: 0.225rem;
    font-size: 0.16rem;
    border: none;
}
.butcss{
    background-color:#bcbcce;
}
.url{
    height: 1.7rem;
    background: url('/static/login_bg.png') no-repeat bottom;
}

.xiahua{
    border-bottom:3px solid green;
}
/* .xiahuared{
    border-radius: 30%;
    border-bottom: 2px solid red;
} */
</style>