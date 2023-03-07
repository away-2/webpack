// console.log('this is a bug')
// import App from './App.vue'   // 引入App.vue    .vue无法识别

// const root = document.getElementById('root')
// root.textContent = 'this is a bug '
import { createApp } from 'vue'     // 依赖关系
import App from './App.vue'

const app = createApp(App)
app.mount('#root')
