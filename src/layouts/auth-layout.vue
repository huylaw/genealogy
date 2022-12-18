<template>
    <div class="auth-layout d-flex justify-content-center">
        <div class="pt-5">
            <h1 class="text-center">Gia tộc họ Lê</h1>
            <router-view/>
        </div>
    </div>
</template>
<style scoped>
.auth-layout{
    background-image: url('../assets/image/background2.jpg');
    background-size: cover;
    height: 100vh;
    color: white;
}
h1{
    font-family: cursive;
    font-size: 60px;
}
</style>