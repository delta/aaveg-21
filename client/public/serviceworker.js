const contentToCache = [
  'static/media/404.e9b9c6f8.jpeg',
  'static/media/aavegwhite.bb6bfc58.png',
  'static/media/bgImg1.478996a1.png',
  'static/media/bgImg2.6d376a9c.png',
  'static/media/cloud.ee4c9d85.svg',
  'static/media/loginPage.3491bd66.png',
  'static/media/questionPage.90583f09.png',
  'static/media/stacked-peaks-haikei.f6562424.png',
  'static/media/temple-right.b298bffc.png',
  'static/media/white.104c164b.png',
  'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;700;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap'
]

const self = this

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('images').then(function (cache) {
      return cache.addAll(contentToCache)
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
