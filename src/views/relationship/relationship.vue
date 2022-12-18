<template>
    <div>
        <div class="py-4">
            <h2 class="pb-3 border-bottom border-primary">Xác định quan hệ</h2>
        </div>
        <!-- <b-card no-body class="w-100 p-2"> -->
            <!--form search-->
            <div class="d-flex justify-content-center">
                <b-row>
                    <b-col cols="12" md="6">
                        <b-form-group>
                            <label><h5>Thành viên 1</h5></label>
                            <b-input-group>
                                <b-input
                                    placeholder="Tên thành viên 1"
                                    v-model="user_1"
                                />
                                <template #append>
                                    <b-button
                                        variant="outline-danger"
                                        class="btn-icon"
                                        @click="user_1 = ''"
                                    >
                                        <feather type="x" size="16px"/>
                                    </b-button>
                                </template>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="6">
                        <b-form-group>
                            <label><h5>Thành viên 2</h5></label>
                            <b-input-group>
                                <b-input
                                    placeholder="Tên thành viên 2"
                                    v-model="user_2"
                                />
                                <template #append>
                                    <b-button
                                        variant="outline-danger"
                                        class="btn-icon"
                                        @click="user_2 = ''"
                                    >
                                        <feather type="x" size="16px"/>
                                    </b-button>
                                </template>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>
            </div>
            <!--button-->
            <div class="text-center pb-5">
                <b-button variant="primary" @click="handleSearch">Xác định</b-button>
                <b-button class="ml-2" variant="danger" @click="deleteSearch">Xóa</b-button>
            </div>
            <!--Mỗi quan hệ-->
            <div class="text-center">
                <h5>Mối quan hệ: </h5>
                <h5>{{relationship}}</h5>
            </div>
            <!--info of two users-->
            <div class="px-5 pb-3">
                <b-row class="text-center">
                    <b-col cols="12" md="6">
                        <h5>Thành viên:</h5>
                        <b-avatar rounded variant="outline-secondary"
                            class="border"
                            size="150px"
                        />
                        <h5>{{user_1}}</h5>
                    </b-col>
                    <b-col cols="12" md="6">
                        <h5>Thành viên:</h5>
                        <b-avatar rounded variant="outline-secondary"
                            class="border"
                            size="150px"
                        />
                        <h5>{{user_2}}</h5>
                    </b-col>
                </b-row>
            </div>
        <!-- </b-card> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            user_1: '',
            user_2: '',
            relationship: ''
        }
    },
    methods:{
        // xóa form xác định quan hệ thành viên
        deleteSearch(){
            this.user_1 = '';
            this.user_2 = '';
            this.relationship = '';
        },
        // xác định mối quan hệ
        handleSearch(){
            this.relationship = "Vợ - Chồng"
        }
    }
}
</script>
<style scoped>
*:focus {
    outline: none;
}
</style>