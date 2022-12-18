<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
import appLayout from './layouts/app-layout.vue'
import authLayout from './layouts/auth-layout.vue'

export default {
  components: {
    app: appLayout,
    auth: authLayout
  },  
  data(){
    return{}
  },
  computed: {
    layout(){
      return this.$store.state.layout;
    }
  }
}
</script>
<style scoped>
*{
  margin: 0;
}
</style>