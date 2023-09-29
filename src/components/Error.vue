<script setup>
import TopNav from './Nav-bar.vue'
</script>

<template>
    <TopNav></TopNav>
    <h1>Page not found ....</h1>
</template>
 
 <script>
 export default {
    name: 'Error'
 }
 </script>

 <style scoped>
 h1{
    margin-top: 250px;
    text-align: center;
    color: #f7ab06e1;
 }
</style>