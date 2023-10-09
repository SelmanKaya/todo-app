import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
//import './assets/style.css'
import "./index.css"
import store from './store'
import i18n from './locales/translate'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
