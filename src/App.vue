<template>
  <NavBar />
  <router-view/>
  <FooterComp />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp
  }
}
</script>

<style lang="scss">

</style>
