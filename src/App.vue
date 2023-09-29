<template>
  <TopNav></TopNav>
  <Home></Home>
</template>

<script>
import TopNav from './components/Nav-bar.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: { TopNav, Home}
}
</script>

<style scoped>
</style>
