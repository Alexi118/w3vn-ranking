<script setup>
import { ref, watch } from 'vue'

const data = [
  { value: 's1' , first: 'Pow', firstRace: 'HU'},
  { value: 's2', first: 'Fervis', secondRace: 'UD'},
  { value: 's3', first: 'Tix3', thirdRace: 'UD' }
]

const options = [{ text: "W3VN gplay season 1 - 1v1", value: "s1" },{ text: "W3VN gplay season 2 - 2v2", value: "s2" },{ text: "W3VN gplay season 3 - 1v1", value: "s3" }]

// const selected = ref(options[0].text)

const tourFilter = (arr, value) => {
  value = String(value).toLowerCase();
  if (value === "s1") {
    return arr.filter((o) =>
      Object.entries(o).some((entry) => String(entry[1]) == "s1")
    );
  }
}

watch(
  () => options.value,
  (newData, _oldData) => {
    tourFilter(data, newData);
    console.log(options.value)
  }
);

</script>

<template>
<div id="hof-text">HALL OF FAME</div>
<div id="black-box-container">
   <div id="event-selection-box">
   <span>Select Event</span>
   <select v-model="selected">
      <option disabled value="">Select a tournament</option>
      <option v-for="option in options" :value="data.value">
         {{ option.text }}
      </option>
   </select>
   </div>
   <div id="top3-box">
      <!-- <span id="tour-name">{{selected}}</span> -->
      <div class="top3" id="1st">
         <img src="../assets/1stplace.png"/>
         <span>{{data.first}}</span>
      </div>
      <div class="top3" id="2nd">
         <img src="../assets/2ndplace.png"/>
         <!-- <span>{{options[0].second}}</span> -->
      </div>
      <div class="top3" id="3rd">
         <img src="../assets/3rdplace.png"/>
         <!-- <span>{{options[0].third}}</span> -->
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
.top3 > img{
   width: 30px;
   height: 30px;
}
.top3{
   display:flex;
   align-items: center;
   font-size: 40px;
   margin: 10px;
   background: linear-gradient(108deg, rgba(42, 42, 50, 1) 0%, rgba(42, 42, 50, 1) calc(100% - 400px), rgba(54, 54, 62, 1) calc(100% - 400px), rgba(54, 54, 62, 1) 100%);
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
   padding: 10px;
   >select{
      margin-left: 10px;
   }
 }

#black-box-container{
   display: block;
   color: #f7aa06;
   background-color: rgba(0, 0, 0, 0.8);
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

@media only screen and (min-width: 2000px) {
  #black-box-container {
    width: 50%;
  }
}
</style>