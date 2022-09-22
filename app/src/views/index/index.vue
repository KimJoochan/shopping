<template>
  <div class="index">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:"indexView",
    components:{
        Header,Footer
    }
}
</script>


<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>