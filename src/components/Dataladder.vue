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
<div id="statistics-text">STATISTICS</div>
<div id="black-box-container">
    <ul class="raceStats">
      <li v-for="race in raceStatistic" :key="race.id">{{ race.race }} {{ race.count }}</li>
    </ul>
</div>
 </template>
 
 <script>
 export default {
    name: 'DataLadder'
 }
 </script>

 <style>
#black-box-container{
   display: table;
   background-color: rgba(0, 0, 0, 0.8);
   margin-left: auto;
   margin-right: auto;
   width: 70%;
}

#statistics-text {
  font-family: 'Eurostile MN', sans-serif;
  font-size: 50px;
  font-weight: bolder;
  margin-top: 210px;
  margin-bottom: 60px;
  text-align: center;
  color: white;
  text-shadow: 3px 1px black;
  letter-spacing: .05em;
}

.raceStats{
   text-align: center;
   margin-top: 100px;
   color: white;
   font-size: xx-large;
   list-style-type: none;
}
</style>