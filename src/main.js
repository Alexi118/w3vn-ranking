import { createApp } from 'vue'
import '/src/style.css'
import App from '/src/App.vue'
import Nav from '/src/components/Nav-bar.vue'

createApp(Nav).mount('#nav')
createApp(App).mount('#app')
