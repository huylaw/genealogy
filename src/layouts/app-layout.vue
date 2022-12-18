<template>
    <div>
        <div class="sticky-top">
            <Header/>
        </div>
        <div class="px-5">
            <router-view/>
            <!-- <div class="col px-2 border-start border-primary ">
                <router-view/>
            </div> -->
        </div>
        <div class="ml-5 mt-5">
            <Footer/>
        </div>
    </div>
</template>

<script>
import Header from '../components/layout/header.vue'
import Footer from '../components/layout/footer.vue'

export default {
    components: {
        Header, Footer
    }
}
</script>