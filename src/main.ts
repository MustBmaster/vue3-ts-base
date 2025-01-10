import '@/assets/styles/index.scss' // global css
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// i18n
import { createI18n } from 'vue-i18n'
const locales = import.meta.glob('./locales/*.json', { eager: true })
const messages: Record<string, any> = {}
Object.keys(locales).forEach((key) => {
  const locale = key.replace(/\.\/locales\/(.*)\.json/, '$1')
  messages[locale] = locales[key]
})

const i18n = createI18n({
  legacy: true,
  locale: 'en',
  messages,
})

const app = createApp(App)

// Cấu hình các plugin và mount ứng dụng
app.use(i18n) // Đảm bảo gọi i18n sau khi cấu hình
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
