<script setup>
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
    <ul class="raceStats">
      <li v-for="race in raceStatistic" :key="race.id">{{ race.race }} {{ race.count }}</li>
    </ul>
 </template>
 
 <script>
 export default {
    name: 'DataLadder'
 }
 </script>

 <style>
.raceStats{
   text-align: center;
   margin-top: 300px;
   color: white;
   font-size: xx-large;
   list-style-type: none;
}
</style>