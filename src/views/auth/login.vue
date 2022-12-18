<template>
    <div class="my-5">
        <h2>Đăng nhập</h2>
        <b-form @submit.prevent="onLogin">
            <b-form-group>
                <label><h5>Username(*)</h5></label>
                <b-form-input 
                    v-model="username"
                    placeholder="Tên đăng nhập"
                    required
                />
            </b-form-group>
            <b-form-group>
                <label><h5>Password(*)</h5></label>
                <b-input-group>
                    <b-input
                        placeholder="Mật khẩu"
                        v-model="password"
                        :type="type_input"
                        required
                    />
                    <template #append>
                        <b-button
                            variant="light"
                            class="btn-icon"
                            @click="changeType"
                        >
                            <feather type="eye" size="16px"/>
                        </b-button>
                    </template>
                </b-input-group>
            </b-form-group>
            <b-button type="submit" variant="warning">Đăng nhập</b-button>
        </b-form>
    </div>
</template>
<script>
import router from '@/router'
//import axios from 'axios'

export default {
    data(){
        return {
            bool: true,
            type_input: 'password',
            username: '',
            password: ''
        }
    },
    methods: {
        changeType(){
            this.bool = !this.bool;
            if(this.bool == true){
                this.type_input = 'password';
            }else{
                this.type_input = 'text';
            }
        },
        onLogin(){
            this.$store.dispatch('login', {username:this.username, password:this.password}).then(()=>{
                    this.$bvToast.toast('Success', {
                        title: 'Đăng nhập thành công',
                        variant: 'success',
                        solid: true
                    });
                    setTimeout(()=>{
                        router.push({name:'home'})
                    }, 400);
                }).catch(() => {
                    this.$bvToast.toast('Kiểm tra lại thông tin đăng nhập',{
                        title: 'Đăng nhập thất bại',
                        variant: 'danger',
                        solid: true
                });
            })
        }
    }
}
</script>
<style scoped></style>