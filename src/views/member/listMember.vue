<template>
    <div>
        <div class="py-4">
            <h2 class="pb-3 border-bottom border-primary">Danh sách thành viên</h2>
        </div>
        <div class="d-flex flex-row-reverse">
            <b-button
                variant="primary"
                class="mb-3 "
                @click="New"
            >
                <span class="d-flex align-items-center">
                    <feather size="18px" type="plus"/>
                    Thêm thành viên
                </span>
            </b-button>
        </div>
        <div>
            <vue-good-table
                :columns="columns"
                :rows="rows"
                :line-numbers="true"
                :pagination-options="{enabled: true}"
            >
            <!--column Action-->
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field === 'action'">
                        <span class="d-flex justify-content-around" style="margin: -4px;">
                            <b-button
                                variant="primary"
                                size="sm"
                                @click="Edit(props.row)"
                            >
                                <feather size="15px" type="edit"/>
                            </b-button>
                            <b-button 
                                size="sm"
                                variant="danger"    
                                @click="Delete(props.row)"
                            >
                                <feather size="15px" type="trash"/>
                            </b-button>
                        </span>
                    </span>
                    <!--status-->
                    <span v-else-if="props.column.field === 'sex'">
                        {{props.formattedRow[props.column.field] === 0 ? "Nữ" : "Nam"}}
                    </span>
                    <!--Đời thứ-->
                    <span v-else-if="props.column.field === 'genus'">
                        {{ props.formattedRow[props.column.field] === 0 ? "Tổ tiên" : `Đời thứ ${props.formattedRow[props.column.field]}` }}
                    </span>
                </template> 
            <!--Pagination-->
            <!--no data-->
                <template slot="emptystate">
                    <div class="d-flex justify-content-center">
                        <span>Không có dữ liệu</span>
                    </div>
                </template>
            </vue-good-table>
        </div>
        <b-modal id="modal-edit" :title="getTitle()" size="xl" hide-footer>
            <!--Content Modal-->
            <div>
                <b-form @submit.prevent="handleOk">
                    <div class="d-flex row">
                        <div class="col-2">
                            <b-avatar rounded variant="outline-secondary"
                                class="border"
                                size="150px"
                                
                            />
                        </div>
                        <div class="col-10">
                            <b-row>
                                <b-col cols="12" md="3">
                                    <b-form-group>
                                        <label>Họ và tên <span class="text-danger">(*)</span></label>
                                        <b-form-input 
                                            v-model="currientItems.name"
                                            placeholder="Họ và tên"
                                            required
                                        />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="3">
                                    <b-form-group>
                                        <label>Giới tính <span class="text-danger">(*)</span></label>
                                        <b-form-radio-group 
                                            v-model="currientItems.sex"
                                            :options="[
                                                { value: 1, text: 'Name'},
                                                { value: 0, text: 'Nữ'}
                                            ]"
                                            required
                                        />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="3">
                                    <b-form-group>
                                        <label>Ngày sinh dương lịch<span class="text-danger">(*)</span></label>
                                        <b-form-input
                                            type="date"
                                            v-model="currientItems.birthday"
                                            required
                                        />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="3">
                                    <b-form-group>
                                        <label>Ngày sinh âm lịch<span class="text-danger">(*)</span></label>
                                        <b-form-input
                                            type="date"
                                            v-model="currientItems.lunar_birthday"
                                            required
                                        />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="3">
                                    <b-form-group>
                                        <label>Quốc tịch <span class="text-danger">(*)</span></label>
                                        <b-form-input 
                                            v-model="currientItems.country"
                                            placeholder="Quốc tịch"
                                            required
                                        />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="3">
                                    <b-form-group>
                                        <label>Chức vụ <span class="text-danger">(*)</span></label>
                                        <b-form-select 
                                            v-model="currientItems.position"
                                            :options="[
                                                { value: 'undefined', text: 'Chức vụ', disabled: true },
                                                { value: 'Trưởng họ', text: 'Trưởng họ' },
                                                { value: 'Trưởng chi', text: 'Trưởng chi' },
                                                { value: 'Thành viên', text: 'Thành viên' }
                                            ]"
                                            :required="true"
                                        />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="6">
                                    <b-form-group>
                                        <label>Nguyên quán <span class="text-danger">(*)</span></label>
                                        <b-form-input 
                                            v-model="currientItems.domicile"
                                            placeholder="Nguyên quán"
                                            required
                                        />
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                    <b-row>
                        <b-col cols="12" md="4">
                            <b-form-group>
                                <label>Địa chỉ thường trú <span class="text-danger">(*)</span></label>
                                <b-form-input 
                                    v-model="currientItems.resident"
                                    placeholder="Địa chỉ thường trú"
                                    required
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="2">
                            <b-form-group>
                                <label>Bố <span class="text-danger">(*)</span></label>
                                <b-form-input 
                                    v-model="currientItems.id_father"
                                    placeholder="Tên bố"
                                    required
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="2">
                            <b-form-group>
                                <label>Mẹ <span class="text-danger">(*)</span></label>
                                <b-form-input 
                                    v-model="currientItems.id_mother"
                                    placeholder="Tên mẹ"
                                    required
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="2">
                            <b-form-group>
                                <label>Vợ/chồng <span class="text-danger"></span></label>
                                <b-form-input 
                                    v-model="currientItems.id_spouse"
                                    placeholder="Tên Vợ/chồng"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="1">
                            <b-form-group>
                                <label>Đời <span class="text-danger">(*)</span></label>
                                <b-form-input 
                                    v-model="currientItems.genus"
                                    placeholder="Đời"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="2">
                            <b-form-group>
                                <label>Trình độ học vấn</label>
                                <b-form-input 
                                    v-model="currientItems.literacy"
                                    placeholder="Học vấn"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="2">
                            <b-form-group>
                                <label>Nghề nghiệp<span class="text-danger">(*)</span></label>
                                <b-form-input 
                                    v-model="currientItems.job"
                                    placeholder="Nghề nghiệp"
                                    required
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group>
                                <label>Nơi làm việc <span class="text-danger">(*)</span></label>
                                <b-form-input 
                                    v-model="currientItems.work_address"
                                    placeholder="Nơi làm việc"
                                    required
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="3">
                            <b-form-group>
                                <label>Số điện thoại</label>
                                <b-form-input 
                                    v-model="currientItems.phone"
                                    type="tel"
                                    placeholder="Số điện thoại"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="3">
                            <b-form-group>
                                <label>Ngày mất dương lịch</label>
                                <b-form-input
                                    type="date"
                                    v-model="currientItems.deadday"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="3">
                            <b-form-group>
                                <label>Ngày mất âm lịch</label>
                                <b-form-input
                                    type="date"
                                    v-model="currientItems.lunar_deadday"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="12">
                            <b-form-group>
                                <label>Mô tả</label>
                                <b-form-textarea 
                                    v-model="currientItems.description"
                                    placeholder="Mô tả"
                                    rows="3"
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!--footer-modal-->
                    <div class="card-footer p-1 text-center modal-footer">
                        <b-button
                            variant="danger"
                            class="ml-1"
                            @click="$bvModal.hide('modal-edit')"
                        >Thoát</b-button>
                        <b-button variant="primary" type="submit">{{ getTextAction }}</b-button>
                    </div>
                </b-form>
            </div>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'
import VueUploadMultipleImage from 'vue-upload-multiple-image'

export default {
    components: {
        VueUploadMultipleImage
    },
    computed: {
        getTextAction(){
            if(this.editMode===true){
                return "Cập nhật";
            }
            return "Thêm mới";
        },
    },
    mounted(){
        this.loadItems();
    },
    methods:{  
        getTitle(){
            if(this.editMode===true){
                return "Cập nhật thông tin thành viên";
            }
            return "Thêm mới thành viên";
        },
        New(){
            this.currientItems = {}; 
            this.editMode = false;
            this.$bvModal.show('modal-edit')
        },
        Edit(item){
            this.currientItems = item;
            this.editMode = true;
            this.$bvModal.show('modal-edit');
        },
        async Delete(item){
            var res = await this.$bvModal.msgBoxConfirm(
                "Vui lòng xác nhận xóa thành viên :(",
                {
                    title: 'Xác nhận',
                    okTitle: 'Đồng ý',
                    cancelTitle: 'Hủy',
                    cancelVariant: 'danger'
                }
            );
            this.currientItems = item;
            if(res){
                axios.delete(`http://localhost:3000/api/data/${this.currientItems.id}`).then(() => {
                    this.loadItems();
                    this.$bvToast.toast('Xóa thành viên thành công',{
                        title: 'OK',
                        variant: 'success',
                        solid: true
                    });
                }).catch(() => {
                    this.$bvToast.toast('Xóa thành viên thất bại',{
                        title: 'Lỗi',
                        variant: 'danger',
                        solid: true
                    });
                })
            }
            this.$bvModal.hide('modal-edit');
        },
        async loadItems(){
            const {data} = await axios.get('http://localhost:3000/api/data');
            this.rows = data;
        },
        async handleOk(){
            if(!this.editMode){
                await axios.post('http://localhost:3000/api/data', this.currientItems).then(()=>{
                    this.loadItems();
                    this.$bvToast.toast('Thêm thành viên thành công', {
                        title: 'OK',
                        variant: 'success',
                        solid: true
                    });
                }).catch(() => {
                    this.$bvToast.toast('Thêm thành viên thất bại',{
                        title: 'Lỗi',
                        variant: 'danger',
                        solid: true
                    });
                })
            }else{
                await axios.put(`http://localhost:3000/api/data/${this.currientItems.id}`, this.currientItems).then(()=>{
                    this.loadItems();
                        this.$bvToast.toast('Cập nhật thành viên thành công', {
                        title: 'OK',
                        variant: 'success',
                        solid: true
                    });
                }).catch(() => {
                    this.$bvToast.toast('Cập nhật thành viên thất bại',{
                        title: 'Lỗi',
                        variant: 'danger',
                        solid: true
                    });
                })
            }
            this.$bvModal.hide('modal-edit')
        }
    },
    data(){
        return {
            isLoading: false,
            editMode: false,
            currientItems : {},
            columns: [
            {
                label: 'Họ và tên',
                field: 'name', 
                filterOptions: { enabled: true, placeholder: "Tên thành viên" },
                width: '150px'
            },
            {
                label: 'Ngày sinh',
                field: 'birthday',
                type: 'date',
                dateInputFormat: 'yyyy-MM-dd',
                dateOutputFormat: 'dd-MM-yyyy',
                filterOptions: { enabled: true, placeholder: "Ngày sinh" },
                width: '120px',
                tdClass: 'text-center'
            },
            {
                label: 'Ngày mất',
                field: 'deadday',
                type: 'date',
                dateInputFormat: 'yyyy-MM-dd',
                dateOutputFormat: 'dd-MM-yyyy',
                filterOptions: { enabled: true, placeholder: "Ngày mất" },
                width: '120px',
                tdClass: 'text-center'
            },
            {
                label: 'Giới tính',
                field: 'sex',
                filterOptions: { enabled: true, placeholder: "Giới tính" },
                width: '110px'
            },
            {
                label: 'Đời',
                field: 'genus',
                filterOptions: { enabled: true, placeholder: "Chi" },
                width: '120px'
            },
            {
                label: 'Chức vụ',
                field: 'position',
                filterOptions: { enabled: true, placeholder: "Chức vụ" },
                width: '120px'
            },
            {
                label: 'Quốc tịch',
                field: 'country',
                filterOptions: { enabled: true, placeholder: 'Quốc tịch'},
                width: '120px'
            },
            {
                label: 'Nguyên quán',
                field: 'domicile',
                filterOptions: { enabled: true, placeholder: "Nguyên quán" },
            },
            {
                label: 'Hoạt động',
                field: 'action',
                width: '120px',
                //tdClass: 'text-center'
            }
            ],
            rows: [],
        };
    },
}
</script>

<style scoped>

</style>

