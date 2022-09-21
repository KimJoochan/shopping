<template>
  <div class="index">
    <Header/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    name:"indexView",
    components:{
        Header:Header
    }
}
</script>


<style lang="scss" scoped>
    @import "@/assets/index.scss";
</style>