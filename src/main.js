import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Nav from './components/Nav-bar.vue'

createApp(Nav).mount('#nav')
createApp(App).mount('#app')
