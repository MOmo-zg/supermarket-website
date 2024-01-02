<template>
    <div class="circular">

        <div class="title">
            <div class="container mt-3">
                <h1 class="display-1">欢迎来到超市系统</h1>
                <h3 class="display-4">Welcome to the supermarket system</h3>
            </div>
        </div>

        <div class="button_select">
            <input class="btn btn-outline-primary btn-lg" type="button" value="注册">
            <input class="btn btn-outline-primary btn-lg" type="button" value="登录">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.circular {
    width: 100%;
    height: 100%;
    background-color: rgb(145, 233, 245);
    border-radius: 0% 0% 100% 0;
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
    top: 20%;
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
}</style>
