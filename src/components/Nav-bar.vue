<script setup>
</script>

<template>
<div class="nav-menu">
  <img class="w3vn-icon" src="/src/assets/w3n-hu-king.jpg" alt="w3vn-icon">
  <div class="nav-links">
        <a href="https://gplay.vn/trangchu" target="_blank">
        <!-- <img class="gplay-icon" scr="/src/assets/gplayG.jpg" alt="gplay-icon"> -->
        Gplay
        </a>
        <a href="https://gplay.vn/congdong" target="_blank">
          <!-- <img class="we-icon" scr="/src/assets/we-icon.jpg" alt="we-icon"> -->
          W3VN Map
        </a>
        <!-- <a class="link" href="" target="_blank">
          <span>War3 1.26</span>
        </a> -->
  </div>
</div>
</template>

<style scoped>
.nav-menu{
  background-color: rgba(0,0,0,.9);
  width: 100vw;
  height: 150px;
  display: flex;
}

.w3vn-icon{
  width: 150px;
  height: 150px;
  margin-left: 25%;
  display: inherit;
}
.nav-links{
  display: flex;
  :hover {
      box-shadow: 0 0 17px gray;
    } 
}
</style>
