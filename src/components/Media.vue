<template>
<div id="boe-text">Youtube Clip</div>
<div id="black-box-container">
    <h1>Clip highlight Warcraft III Việt Nam</h1>
    <ul>
        <li>
            <span>Cây nhà lá vườn tự làm, 100% là các highlight do anh em Việt Nam biểu diễn </span>
            <a target="_blank" href="https://www.youtube.com/playlist?list=PL1OLN1NBSB7kYSa3xCQ5DgHFtmplVbRDx">Link danh sách phát</a>
        </li>
        <li>
            <span>Ngoài ra có 1 clip nổi tiếng trên toàn thế giới ngày xưa do anh Sleeping Moon làm </span>
            <a target="_blank" href="https://youtu.be/hZ21i9v8y8A?si=shTgZn2W1tqkMJz2">Link Destiny of the world</a>
        </li>
    </ul>
    <h1>Clip bình luận Warcraft III tiếng Việt</h1>
    <ul>
        <li>
            <span>Đây là những clip mình làm riêng lẻ từng replay hoặc bình luận nguyên 1 giải trực tiếp! </span>
            <a target="_blank" href="https://www.youtube.com/playlist?list=PL1OLN1NBSB7m_GSPhicQAIBVEAOu-xaed">Link danh sách phát</a>
        </li>
    </ul>         
    <h1>Các số Replay of the Week</h1>
    <ul>
        <li>
            <span>Đây là sê ri mình từng hay làm mỗi cuối tuần (từ 2010 - 2018), cast replay hay trong tuần & vài replay cũ, như anh em thấy nó lâu đến nỗi những số từ thời talktv đã bị mất hết, nên chỉ còn lại từng này! </span>
            <a target="_blank" href="https://www.youtube.com/playlist?list=PL1OLN1NBSB7llDRyyG4-8giahbMAMUWYk">Link danh sách phát</a>
        </li>
    </ul>  
</div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'Media',
    components: { RouterLink }
}
</script>

<style scoped>
h1{
    margin-left: 20px;
}

a {
    color: white;
    text-decoration: none;
}

#boe-text {
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

#black-box-container{
   display: block;
   color: #f7aa06;
   background-color: rgba(0, 0, 0, 0.8);
   width: 70%;
   padding: 5px;
}
</style>