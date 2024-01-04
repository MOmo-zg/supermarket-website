<template>
    <div class="circular">
        <div class="title">
            <div class="container mt-3">
                <h1 class="display-1">欢迎来到超市系统</h1>
                <h3 class="display-4">Welcome to the supermarket system</h3>
            </div>
        </div>
    </div>
    <div v-if="showTitle" class="button_select">
        <input @click="register_one" class="btn btn-outline-primary btn-lg" type="button" value="注册">
        <input @click="login_one" class="btn btn-outline-primary btn-lg" type="button" value="登录">
    </div>
    <div class="cirular_reg">
        <h1>{{ input_bt }}</h1>
    </div>
    <div class="input_bg">
        <div class="input_content">
            <label for="text">账号:</label>
            <input class="input_reg" type="text" placeholder="请输入账号" />
            <label for="password">密码:</label>
            <input class="input_reg" type="password" placeholder="请输入密码" />
            <input id="submit_reg" @click="changeMethod1" class="btn btn-outline-primary btn-lg" type="button" value="注册">
            <input id="submit_reg" @click="changeMethod2" class="btn btn-outline-primary btn-lg" type="button" value="登录">
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { computed, ref } from 'vue';

const showTitle = ref(true)
const input_bt = ref("")
const isReg = ref(true)
const isLog = ref(true)

// 请求代码
function register_axios(){
    
}
function login_axios(){
    
}
function register_two(){
    input_bt.value = "注册"
    time.to(".cirular_reg",{
        borderRadius: "0 0 100& 0",
        translate:"0%"
    }).to(".input_bg",{
        opacity: 1,
        duration: 1,
        translate:"0%"
    }).to(".circular",{
        borderRadius: "0 0 0 100%",
        translate:"33.33%"
    })
    isLog.value = true
}
function login_two(){
    input_bt.value = "登录"
    time.to(".cirular_reg",{
        borderRadius: "0 0 0 100%",
        translate:"150%"
    }).to(".input_bg",{
        opacity: 1,
        duration: 1,
        translate:"190%"
    }).to(".circular",{
        borderRadius: "0 0 100% 0",
        translate:"0%"
    })
    isReg.value = true
}

const changeMethod1 = computed(()=>{
    return isReg.value == false ? register_axios: register_two
})
const changeMethod2 = computed(()=>{
    return isLog.value == false ? login_axios: login_two
})



const time = gsap.timeline({})

//点击按钮，实现注册/登录界面 出现

function register_one() {
    // 当注册被点击时 圆缩小并跑到右边
    // 输入框 密码框 出现 
    time.to(".circular", {
        width: "75%",
        duration: 2
    }).to(".circular", {
        borderRadius: "0 0 0 100%",
        translate: "33.33%",
        duration: 1
    }).to(".title", {
        textAlign: "center"
    })
    showTitle.value = false
    time.to(".cirular_reg", {
        opacity: 1,
        width: "40%",
        duration: 1
    }).to(".input_bg", {
        opacity: 1,
        duration: 2,
    })
    input_bt.value = "注册"
    isReg.value = false
}
function login_one() {
    showTitle.value = false

    time.to(".circular",{
        width:"75%"
    }).to(".cirular_reg",{
        opacity:1,
        width:"40%",
    }).to(".cirular_reg",{
        borderRadius: "0 0 0 100%",
        translate:"150%"
    }).to(".input_bg",{
        opacity: 1,
        duration: 1,
        translate:"190%"
    })
    input_bt.value = "登录"
    isLog.value = false
}
// showTitle.value = false
</script>

<style scoped>
.circular {
    width: 100%;
    height: 100%;
    background-color: rgb(145, 233, 245);
    border-radius: 0% 0% 100% 0%;
}

.cirular_reg {
    display: flex;
    position: absolute;
    top: 0;
    width: 0%;
    height: 50%;
    background-color: rgb(247, 176, 24);
    border-radius: 0% 0% 100% 0%;
    opacity: 0;
    align-items: center;
    justify-content: center
}

.cirular_reg h1 {
    font-size: 5.0rem;
}

.button_select {
    position: absolute;
    top: 80%;
    left: 80%;
}

.button_select input {
    border-color: black;
    margin: 0 20px 0 20px;
}

.title {
    position: relative;
    text-align: center;
    top: 30%;
}

@keyframes fade-anim {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

.title {
    animation: fade-anim 2s;
}

.mt-3 {
    margin: 0 auto !important;
}

.input_bg {
    width: 30%;
    height: 30%;
    top: 60%;
    left: 5%;
    padding: 30px;
    position: absolute;
    opacity: 0;
}

.input_content {
    margin: 0 auto;
}

.input_content .input_reg {
    display: block;
    width: 100%;
    border-radius: 5px;
    border: 2px solid blue;
    margin-bottom: 20px;
}

#submit_reg {
    margin-right: 35px;
}</style>
