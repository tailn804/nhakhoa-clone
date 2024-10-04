import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import '@/assets/base.css'
import '@/assets/tailwind.css'
import Antd from 'ant-design-vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const app = createApp(App)

app.use(router)
app.use(Antd)

app.component('font-awesome-icon',FontAwesomeIcon)

app.mount('#app')