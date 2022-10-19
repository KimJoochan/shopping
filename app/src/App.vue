<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>
<script>
  export default {
      name:"indexView",
      data() {
        return {
        
        }
      },
      mounted() {
        this.$store.dispatch('init_load');
      },
  }
</script>


<style lang="scss">

</style>
