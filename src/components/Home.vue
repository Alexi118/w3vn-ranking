<script setup>
import TopNav from './Nav-bar.vue'
import VueLatestTable from './VueLatestTable.vue'
import { ref,onMounted } from "vue";
import { supabase } from '../lib/supabaseClient'

const playersData = ref([])

async function fetchPlayersData() {
  const { data } = await supabase.from('gplay_ranking').select('*')
  playersData.value = data
}

const headers = [
  { text: 'No', value: 'rank' },
  { text: 'Name', value: 'name' },
  { text: 'Race', value: 'race' },
  { text: 'MMR', value: 'round' },
  { text: 'W/L(%)', value: 'winrate' },
  { text: 'W', value: 'win' },
  { text: 'L', value: 'lose' },
  { text: 'Zalo', value: 'social' },
  { text: 'Prev' , value: 'prev_rank' },
  { rankchange: 'rankchange'}
]

onMounted(()=>{
  fetchPlayersData()
})
</script>

<template>
  <div id="w3nladder-text">W3VN LADDER 2023</div>
  <VueLatestTable :headers="headers" :data="playersData" :isSearchable="true" searchPlaceholder="Search" :footer="{
    rowsPerPage: [-1, 10, 25, 50], // we only use the numbers, if there is a typo, we skip it. -1 means All
    allText: 'ALL' // for translation purposes
  }" :defaultTheme="true" noData="Sorry, there is no data to show..." rowsPerPageText="Rows per page" />
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#w3nladder-text {
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

@media only screen and (max-width: 425px) {
  #w3nladder-text {
    margin-left: 100px;
    display: flex;
    overflow: inherit;
  }
}
</style>
