import '@/assets/styles/index.scss' // global css
// import '@/utils/permisson' // permisson for routing
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// ElementUI+
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Bootstrap5
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
// app.config.globalProperties.$t = i18n.global.t
// app.config.globalProperties.$i18n = i18n.global
app.use(i18n)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
