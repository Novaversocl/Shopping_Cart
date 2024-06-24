import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Importacion de bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// Importacion de bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(store).use(router).mount('#app')
