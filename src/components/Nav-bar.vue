<script setup>
</script>

<template>
  <nav class="nav-menu">
    <img class="w3vn-icon" src="/src/assets/w3n-hu-king.jpg" alt="w3vn-icon">
    <ul>
      <li><a href="https://gplay.vn/trangchu" target="_blank">
          <img class="nav-item" src="../assets/gplayG.png" alt="gplay-icon" width="50px" height="50px">
          <span class="nav-items-text">Install Gplay</span>
        </a></li>
      <li><a href="https://drive.google.com/file/d/1HYtvTMEGMy4LcwaKMwMO_I7Ff5zMPeX8/view" target="_blank">
          <img class="nav-item" src="../assets/we-icon.png" alt="we-icon" width="50px" height="50px">
          <span class="nav-items-text">W3VN Maps</span>
        </a></li>
      <li><a href="https://drive.google.com/drive/folders/1oxY6Ce6IAG62g4BE89MydgFIJ3B5PMZ9" target="_blank">
          <img class="nav-item" src="../assets/wc3-icon.png" alt="note-icon" width="50px" height="50px">
          <span class="nav-items-text">W3VN Notes</span>
        </a></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-menu {
  background-color: rgba(0, 0, 0, .9);
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
}

.nav-menu ul {
  margin: 0;
  padding: 0;
  height: 40px;
}
.nav-items-text {
  display: list-item;
}

.nav-menu li {
  float: left;
  list-style-type: none;

  >a {
    display: block;
    color: #f7ab06e1;
    text-align: center;
    padding: 38.90px;
    text-decoration: none;
  }
}

.nav-menu li a:hover {
  background-color: #ffb502;
  color: azure;
}

.w3vn-icon {
  width: 150px;
  height: 150.9px;
}

@media only screen and (max-width: 425px) {
  .w3vn-icon {
    width: 100px;
    height: 100px;
  }

  .nav-menu {
    width: 600px;
    height: 100px;
  }

  .nav-menu li {
    >a {
      padding: 20.1px 6px;
    }
  }
}</style>

