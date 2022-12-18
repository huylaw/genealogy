<template>
    <div>
        <div class="py-4">
            <h2 class="pb-3 border-bottom border-primary">Phả đồ</h2>
        </div>
        <div class="tree text-center">
            <TreeChart :json="treeData"/>
        </div>
    </div>
</template>

<script>
import TreeChart from "vue-tree-chart"

export default {
    components:{
        TreeChart
    },
    data(){
        return {
            treeData: {
                name: 'Lê Bá A',
                image_url: "https://mimosawedding.net/wp-content/uploads/2020/05/cach-cam-may-anh-chuyen-nghiep-4.jpg",
                mate: {
                    name: 'Đoàn Thị B',
                    image_url: "https://mimosawedding.net/wp-content/uploads/2020/03/hoc-chup-anh-o-dau-ha-noi-3.jpg"
                },
                children: [
                    {
                        name: 'Lê Thị C',
                        image_url: "https://mimosawedding.net/wp-content/uploads/2020/03/hoc-chup-anh-o-dau-ha-noi-3.jpg"
                    },
                    {
                        name: 'Lê Bá B',
                        image_url: "https://mimosawedding.net/wp-content/uploads/2020/05/cach-cam-may-anh-chuyen-nghiep-4.jpg",
                        mate: {
                            name: 'Hoàng Thị F',
                            image_url: "https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg"
                        },
                        children: [
                            {
                                name: 'Lê Thị K',
                                image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                            },
                            {
                                name: 'Lê Bá L',
                                image_url: 'https://mimosawedding.net/wp-content/uploads/2020/05/cach-cam-may-anh-chuyen-nghiep-4.jpg',
                                mate: {
                                    name: 'Nguyễn Thị M',
                                    image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                                },
                                children: [
                                    {
                                        name: 'Lê Thị S',
                                        image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                                    },
                                    {
                                        name: 'Lê Bá T',
                                        image_url: 'https://mimosawedding.net/wp-content/uploads/2020/05/cach-cam-may-anh-chuyen-nghiep-4.jpg',
                                        mate: {
                                            name: 'Đào Thị U',
                                            image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                                        },
                                        children: [
                                            {
                                                name: 'Lê Thị Z',
                                                image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                                            },
                                            {
                                                name: 'Lê Bá AA',
                                                image_url: 'https://mimosawedding.net/wp-content/uploads/2020/05/cach-cam-may-anh-chuyen-nghiep-4.jpg'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Lê Thị V',
                                        image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                                    }
                                ]
                            },
                            {
                                name: 'Lê Bá N',
                                image_url: 'https://mimosawedding.net/wp-content/uploads/2020/05/cach-cam-may-anh-chuyen-nghiep-4.jpg',
                                mate: {
                                    name: 'Phạm Thị O',
                                    image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                                }, 
                                children: [
                                    {
                                        name: 'Lê Bá W',
                                        image_url: 'https://mimosawedding.net/wp-content/uploads/2020/05/cach-cam-may-anh-chuyen-nghiep-4.jpg',
                                        mate: {
                                            name: 'Trần Ngọc X',
                                            image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                                        },
                                        children: [
                                            {
                                                name: 'Lê Thị BB',
                                                image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Lê Thị Y',
                                        image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Lê Bá F',
                        image_url: "https://mimosawedding.net/wp-content/uploads/2020/05/cach-cam-may-anh-chuyen-nghiep-4.jpg",
                        mate: {
                            name: 'Phạm Thị G',
                            image_url: "https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg"
                        },
                        children: [
                            {
                                name: 'Lê Thị P',
                                image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                            },
                            {
                                name: 'Lê Thị Q',
                                image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                            },
                            {
                                name: 'Lê Thị R',
                                image_url: 'https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg'
                            }
                        ]
                    },
                    {
                        name: 'Lê Thị H',
                        image_url: "https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg"
                    },
                    {
                        name: 'Lê Thị I',
                        image_url: "https://glints.com/vn/blog/wp-content/uploads/2021/11/photographing-darkness.jpg"
                    }
                ]
            }
        }
    }
}
</script>
<style scoped>
.tree{
    overflow-x: auto;
}
.node{
    width: 0;
}
</style>
