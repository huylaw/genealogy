<template>
    <div class="d-flex justify-content-between align-items-center py-1"
        style="background-color: #E8E8E8;"
    >
        <img alt="Ảnh logo" src="../../assets/image/Uchiha_Symbol.png">
        <div class="col-4">
            <Sidebar/>
        </div>
        <div>
            <b-dropdown
                variant="link"
                size="sm"
                right
                no-caret
            >
                <template #button-content>
                    <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
                </template>
                <!-- <b-dropdown-item href="/profile">
                    <span class="d-flex align-items-center py-1">
                        <feather class="mr-2" type="user"/> Cá nhân
                    </span>
                </b-dropdown-item> -->
                <b-dropdown-item @click="logout">
                    <span class="d-flex align-items-center py-1">
                        <feather class="mr-2" type="log-out"/> Đăng suất
                    </span>
                </b-dropdown-item>
            </b-dropdown>
        </div>
    </div>
</template>

<script>
import Sidebar from './sidebar.vue'
import router from '@/router';

export default {
    components:{
        Sidebar,
    },
    methods:{
        logout(){
            localStorage.clear();
            router.go('/');
        }
    }
}
</script>

<style scoped>
img{
    width: 40px;
    height: 50px;
    margin-left: 40px;
}
.feather{
    margin-right: 10px;
}
</style>