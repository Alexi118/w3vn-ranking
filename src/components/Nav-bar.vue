<template>
  <nav class="nav-menu">
  <router-link to='/'>
        <img id="w3vn-icon" src="/src/assets/w3n-hu-king.jpg" alt="w3vn-icon" />
  </router-link>  
    <ul>
      <li>
        <router-link to='/'>
          <img
            class="router-item"
            src="../assets/tpscroll.png"
            alt="gplay-icon"
          />
          <span class="nav-items-text">Home Page</span>
          </router-link>
       </li>
       <li>
        <router-link to='/tutorial'>
          <img
            class="router-item"
            src="../assets/guide.png"
            alt="gplay-icon"
          />
          <span class="nav-items-text">Book of Exp</span>
          </router-link>
       </li>
       <!-- <li>
        <router-link to="/dataladder">
          <img
            class="router-item"
            src="../assets/statistics.png"
            alt="dataladder-icon"
            width="50px"
            height="50px"
          />
          <span class="nav-items-text">Data Ladder</span>
        </router-link>
      </li> -->
      <li>
        <router-link to="/media">
          <img
            class="router-item"
            src="../assets/youtube.png"
            alt="hof-icon"
            width="50px"
            height="50px"
          />
          <span class="nav-items-text">Youtube VOD</span>
        </router-link>
      </li>
      <li>
        <router-link to="/halloffame">
          <img
            class="router-item"
            src="../assets/hof.png"
            alt="hof-icon"
            width="50px"
            height="50px"
          />
          <span class="nav-items-text">Tournament</span>
        </router-link>
      </li>
      <li>
        <a
          href="https://gplay.vn/congdong/warcraft-iii/huong-dan-tai-bo-max-fix-balance-w3vn-melee-patch-1.26?postId=8c6157c2-c040-4f86-9493-23caa6093259&groupId=6cd27c1d-4cf1-47a7-ba11-473cbbf8d23b"
          target="_blank"
        >
          <img
            class="nav-item"
            src="../assets/we-icon.png"
            alt="we-icon"
            width="50px"
            height="50px"
          />
          <span class="nav-items-text">W3VN Map</span>
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/drive/folders/1oxY6Ce6IAG62g4BE89MydgFIJ3B5PMZ9"
          target="_blank"
        >
          <img
            class="nav-item"
            src="../assets/wc3-icon.png"
            alt="w3vnmap-icon"
            width="50px"
            height="50px"
          />
          <span class="nav-items-text">W3VN Note</span>
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1QQAmwBKNsApNzEbk-jJEWQ1v9mSRv7UF/view?usp=drive_link"
          target="_blank"
        >
          <img
            class="nav-item"
            src="../assets/replay-icon.png"
            alt="note-icon"
            width="50px"
            height="50px"
          />
          <span class="nav-items-text">Replay Tool</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'TopNav',
    components: { RouterLink }
}
</script>

<style scoped>
.router-item{
  width:50px;
  height:50px;
}
.nav-menu {
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  position: fixed;
}

.nav-menu ul {
  margin: 0;
  padding: 0;
  display: flex;
}
.nav-items-text {
  display: list-item;
}

.nav-menu li {
  text-align: center;
  list-style-type: none;
  padding: 40px 10px;
  width: 110px;
  > a {
    color: #f7ab06e1;
    text-decoration: none;
  }
}

.nav-menu li:hover {
  background-color: #ffb502;
  >a{
    color: azure;
  }
}

#w3vn-icon {
  width: 150px;
  height: 150px;
}

@media only screen and (max-width: 426px) {
  ul{
    overflow: scroll;
  }
}
</style>
