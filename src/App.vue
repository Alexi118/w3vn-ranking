<template>
  <TopNav />
  <router-view />
</template>

<script>
import TopNav from './components/Nav-bar.vue'

export default {
  name: 'App',
  components: { TopNav}
}
</script>

<style scoped>
</style>
