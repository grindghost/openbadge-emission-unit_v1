import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css' // Importing global CSS file


createApp(App).use(createPinia()).use(router).mount('#app')
