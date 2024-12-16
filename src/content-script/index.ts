import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import packageJson from '../../package.json'
import App from './app.vue'
import styles from './index.scss?inline'
import routes from '~pages'

const { name } = packageJson

routes.push({
  path: '/',
  redirect: '/content-script',
})

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App).use(router)

// console.log(router.getRoutes())

self.onerror = function (message, source, lineno, colno, error) {
  console.info(
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}

// Mount app using Shadow DOM
const extensionRoot = document.createElement('div')
extensionRoot.id = `${name}-extension-container`

// Append to DOM before creating Shadow DOM
document.body.appendChild(extensionRoot)

// Attach Shadow DOM
const shadowRoot =
  extensionRoot.shadowRoot || extensionRoot.attachShadow({ mode: 'open' })

// Create app root inside Shadow DOM
const appRoot = document.createElement('div')
extensionRoot.id = `${name}-extension-root`
shadowRoot.appendChild(appRoot)

// Create a style element and set css content
const styleElement = document.createElement('style')
styleElement.textContent = styles

shadowRoot.appendChild(styleElement)

// Mount Vue app
app.mount(appRoot)
