import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import tyhUi2 from 'tyh-ui2'
// import 'tyh-ui2/style/index.css'

import tyhUi2 from './components/tyhUi'
import './components/tyhUi/style/index.css'

import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'

<<<<<<< HEAD
// Sentry.init({
//   app,
//   dsn: "https://d00292ffeac649c496479d4b9c850791@o1141265.ingest.sentry.io/6199274",
//   integrations: [
//     new BrowserTracing({
//       routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//       tracingOrigins: ["localhost", "my-site-url.com", /^\//],
//     }),
//   ],
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

// http://localhost/tyh-ui2/public/index.php/index/index/index
onerror = function (msg, url) {
=======
onerror = function (msg, url, row, col) {
>>>>>>> 111efd43661320ce4d8b34d07cadefb62e71be20
  console.log(msg)
  console.log(url)
}

createApp(App)
  .use(router)
  .use(Element3)
  .use(tyhUi2)
  .mount('#app')
