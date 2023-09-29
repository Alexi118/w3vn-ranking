<script setup>
import TopNav from './Nav-bar.vue'
import { ref,onMounted } from "vue";
import { supabase } from '../lib/supabaseClient'

const raceStatistic = ref([])

async function fetchRaceStatisticData() {
  const { data } = await supabase.from('race_statistics').select('*')
  raceStatistic.value = data
}

onMounted(()=>{
   fetchRaceStatisticData()
})

console.log(raceStatistic)
</script>

<template>
    <TopNav></TopNav>
    <h1>This is dataladder page </h1>
 </template>
 
 <script>
 export default {
    name: 'DataLadder'
 }
 </script>