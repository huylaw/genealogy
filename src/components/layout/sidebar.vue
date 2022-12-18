<template>
    <div>
        <ul>
            <li 
                v-for="(menu, index) in menues" :key="index"
                v-b-tooltip.hover.bottom="`${menu.name}`"
            >
                <div v-if="menu.link === '/'">
                    <b-link :to="menu.link" active-class="active" exact>
                        <feather :type="menu.icon"/>
                    </b-link>
                </div>
                <div v-else>
                    <b-link :to="menu.link" active-class="active">
                        <feather :type="menu.icon"/>
                    </b-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            menues: [
                {
                    link: '/',
                    name: 'Phả đồ',
                    icon: 'home',
                },
                {
                    link: '/member',
                    name: 'Thành viên',
                    icon: 'layers'
                },
                {
                    link: '/relationship',
                    name: 'Xác định quan hệ',
                    icon: 'server'
                },
                {
                    link: '/statistical',
                    name: 'Thống kê',
                    icon: 'database'
                }
            ]
        }
    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li a {
  display: block;
  text-align: center;
  padding: 10px 30px;
  text-decoration: none;
  color: black;
}

li a:hover {
  background-color: #4876FF;
  color: white;
}

li .active{
    color: blue;
    border-bottom: 3px solid blue;
}
</style>