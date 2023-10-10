<script setup>
import { ref } from 'vue'

const selected = ref('s1')
const options = [
  { text: 'W3VN gplay season 1 - 1v1', value: 's1' , first: 'Pow', firstRace: 'HU', second: 'Fervis', secondRace: 'UD', third: 'Tix3', thirdRace: 'UD'},
  { text: 'W3VN gplay season 2 - 2v2', value: 's2' },
  { text: 'W3VN gplay season 3 - 1v1', value: 's3' }
]

console.log(options[0].text)
</script>

<template>
<div id="hof-text">HALL OF FAME</div>
<div id="black-box-container">
   <div id="event-selection-box">
   <span>Select Event</span>
   <select v-model="selected">
      <option v-for="option in options" :value="option.value">
         {{ option.text }}
      </option>
   </select>
   <div id="top3-box">
      <span id="tour-name">{{selected}}</span>
      <div class="top3" id="1st">
         <img src="../assets/1stplace.png"/>
         <span>{{options[0].first}}</span>
      </div>
      <div class="top3" id="2nd">
         <img src="../assets/2ndplace.png"/>
         <span>{{options[0].second}}</span>
      </div>
      <div class="top3" id="3rd">
         <img src="../assets/3rdplace.png"/>
         <span>{{options[0].third}}</span>
      </div>
   </div>
   </div>
</div>
</template>

<script>
export default {
   name: 'HallofFame'
}
</script>

 <style scoped>
img{
   width: 50px;
   height: 50px;
}
div .top3{
   margin: 10px;
}

#tour-name{
   color: white;
   display: block;
   text-align: center;
   margin-top: 20px;
   margin-bottom: 20px;
   font-size: 30px;
 }

 #event-selection-box{
   color:#f7ab06e1;
   padding: 10px;
   >select{
      margin-left: 10px;
   }
 }

 #black-box-container{
   display: table;
   background-color: rgba(0, 0, 0, 0.9);
   margin-left: auto;
   margin-right: auto;
   width: 70%;
}
 #hof-text {
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
</style>