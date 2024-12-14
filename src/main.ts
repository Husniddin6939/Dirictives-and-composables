import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { focusElement } from './directives/v-focus'

const app = createApp(App)

app.directive('focus', focusElement)
app.use(createPinia())
app.use(router)

app.mount('#app')
