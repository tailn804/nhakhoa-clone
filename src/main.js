import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import '@/assets/base.css'
import '@/assets/tailwind.css'
import Antd from 'ant-design-vue';
import '@fortawesome/fontawesome-free/css/all.css'



const app = createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')