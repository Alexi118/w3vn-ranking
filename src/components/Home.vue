<script setup>
import VueLatestTable from './VueLatestTable.vue'
import { ref,onMounted } from "vue";
import { supabase } from '../lib/supabaseClient'

// const playersData = ref([])

// async function fetchPlayersData() {
//   const { data } = await supabase.from('gplay_ranking').select('*')
//   playersData.value = data
// }

// const headers = [
//   { text: 'No', value: 'rank' },
//   { text: 'Name', value: 'name' },
//   { text: 'Race', value: 'race' },
//   { text: 'MMR', value: 'round' },
//   { text: 'W/L(%)', value: 'winrate' },
//   { text: 'W', value: 'win' },
//   { text: 'L', value: 'lose' },
//   { text: 'Zalo', value: 'social' },
//   { text: 'Prev' , value: 'prev_rank' },
//   { rankchange: 'rankchange'}
// ]

// onMounted(()=>{
//   fetchPlayersData()
// })
</script>

<template>
  <div id="w3nladder-text">LIVE STREAM</div>
  <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCgDMjTwfdv57M_Z5S4G6srQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://youtube.com/embed/live_stream?channel=UCgDMjTwfdv57M_Z5S4G6srQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <a class="stream">
      <img class="stream-image" >
      <div class="stream-body">
        <div class="stream_header">
          <span class="stream_name"></span>
          <span class="stream_view"></span>
        </div>
        <div class="stream_title"></div>
      </div>
    </a>
  </div>
  <!-- <VueLatestTable :headers="headers" :data="playersData" :isSearchable="true" searchPlaceholder="Search" :footer="{
    rowsPerPage: [-1, 10, 25, 50], // we only use the numbers, if there is a typo, we skip it. -1 means All
    allText: 'ALL' // for translation purposes
  }" :defaultTheme="true" noData="Sorry, there is no data to show..." rowsPerPageText="Rows per page" /> -->
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

@media only screen and (max-width: 426px) {
  #w3nladder-text {
  }
  #VueLatestTable{
    max-width: 425px;
    overflow-x: scroll;
  }
}
</style>
