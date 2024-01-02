<template>
    <!-- 表单绑定数据 测试ajax 前端和后端数据交互 -->
    <form>
        <div class="mb-3 mt-3">
            <label for="text" class="form-label">Email:</label>
            <input v-model="email" type="text" class="form-control" id="email" placeholder="Enter email" name="email">
        </div>
        <div class="mb-3">
            <label for="pwd" class="form-label">Password:</label>
            <input v-model="password" type="number" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
        </div>
        <button @click="test()" type="button" class="btn btn-primary">Submit</button>
    </form>
    <button @click="test()">测试</button>
    <!-- 路由点击改变内容 -->
    <nav class="navbar bg-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <RouterLink to="/" exact-active-class="home">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/about" exact-active-class="home">About</RouterLink>
            </li>
        </ul>
    </nav>
    <RouterView></RouterView>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const email = ref(null)
const password = ref(null)

email.value = 15151
password.value = 12121212

const data = {
    "id":1,
    "name":"long",
    "password":"123456"
}

function test() {
    axios.post('/api/test',data)
        .then(function (res) {
            console.log(res.data.name)
            email.value = res.data.name
            password.value = res.data.password
        })
}


</script> 

<style>
.home {
    text-decoration: none;
    color: green;
    border: 1px red solid;
}
</style>
