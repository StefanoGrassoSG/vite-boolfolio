import { createApp } from 'vue'
import App from './App.vue'

// Import our custom CSS
import '../src/assets/scss/main.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { router } from './router';

createApp(App).use(router).mount('#app')
