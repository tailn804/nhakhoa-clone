import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import './assets/css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(far,fas);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')