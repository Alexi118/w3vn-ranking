<script setup>
import VueLatestTable from '/lib/VueLatestTable.vue'

const headers = [
  { text: 'No', value: 'ranking' },
  { text: 'Name', value: 'name' },
  { text: 'Race', value: 'race' },
  { text: 'MMR', value: 'mmr' },
  //{ text: 'Rank', value: 'league' },
  { text: 'W/L(%)', value: 'winrate' },
  { text: 'W', value: 'win' },
  { text: 'L', value: 'lose' },
  { text: 'Zalo', value: 'social' },
]
const players = [
  { ranking: 1, name: 'Fervis', race: 'UD-icon', mmr: 2029, league: 'A', winrate: 100, win: 4, lose: 0, social: 'Tran Tin' },
  { ranking: 2, name: 'Peki', race: 'HU-icon', mmr: 1879, league: 'B', winrate: 0, win: 0, lose: 2, social: 'Duong' },
  { ranking: 3, name: 'Tix3love3', race: 'UD-icon', mmr: 1800, league: 'B', winrate: 0, win: 0, lose: 0, social: 'Hai' },
  { ranking: 4, name: 'Pow', race: 'HU-icon', mmr: 1707, league: 'B', winrate: 0, win: 4, lose: 3, social: 'Nguyen Dinh Vuong' },
  { ranking: 5, name: 'Ninh', race: 'NE-icon', mmr: 1600, league: 'C', winrate: 0, win: 0, lose: 0, social: 'Austro' },
  { ranking: 6, name: 'Shadow', race: 'OC-icon', mmr: 1486, league: 'C', winrate: 0, win: 0, lose: 2, social: 'Ot Cay' },
  { ranking: 7, name: 'TrieuVoi', race: 'OC-icon', mmr: 1421, league: 'C', winrate: 100, win: 2, lose: 0, social: 'Nguyen Dinh Hoang' },
  { ranking: 8, name: 'Kaioshin', race: 'OC-icon', mmr: 1288, league: 'D', winrate: 0, win: 2, lose: 2, social: 'Dinh Quang Manh' },
  { ranking: 9, name: 'DOMIVN', race: 'UD-icon', mmr: 1200, league: 'D', winrate: 0, win: 0, lose: 0, social: 'Anh Khoa Nguyen' },
  { ranking: 10, name: 'LQUES', race: 'OC-icon', mmr: 1121, league: 'D', winrate: 100, win: 2, lose: 0, social: 'Le Quang' },
  { ranking: 11, name: 'Kingtruong', race: 'OC-icon', mmr: 969, league: 'D', winrate: 0, win: 1, lose: 6, social: 'Truonggg' },
  { ranking: 12, name: 'dailygao', race: 'OC-icon', mmr: 900, league: 'D', winrate: 0, win: 0, lose: 0, social: 'Dung Phung' },
  { ranking: 13, name: 'delley', race: 'UD-icon', mmr: 800, league: 'D', winrate: 0, win: 0, lose: 0, social: 'Hoang Nhat' },
  { ranking: 14, name: 'baobmtpro', race: 'OC-icon', mmr: 700, league: 'D', winrate: 0, win: 0, lose: 0, social: 'Bao nho' },
  { ranking: 15, name: 'sieuvukhi', race: 'UD-icon', mmr: 600, league: 'D', winrate: 0, win: 0, lose: 0, social: 'Nguyen Hung' },
  { ranking: 16, name: 'Lhd1998', race: 'OC-icon', mmr: 500, league: 'D', winrate: 0, win: 0, lose: 0, social: 'Le Huynh Duc' },
  { ranking: 17, name: 'lich', race: 'UD-icon', mmr: 400, league: 'D', winrate: 0, win: 0, lose: 0, social: 'Nguyen Hoang Lich' },
]
</script>

<template>
  <div id="w3nladder-text">W3VN LADDER 2023</div>
  <VueLatestTable :headers="headers" :data="players" :isSearchable="true" searchPlaceholder="Search" :footer="{
    rowsPerPage: [-1, 10, 25, 50], // we only use the numbers, if there is a typo, we skip it. -1 means All
    allText: 'ALL' // for translation purposes
  }" :defaultTheme="true" noData="Sorry, there is no data to show..." rowsPerPageText="Rows per page" />
</template>

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
    margin-left: 130px;
    display: flex;
    overflow: inherit;
  }
}
</style>
